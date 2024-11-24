export const parseMeetings = (events) => {
  return events.map(extractMeeting)
}

export const containsValidJSON = (inputString) => {
  const jsonMatch = inputString.match(/\{.*\}/) // Using a regular expression to extract the JSON part
  if (jsonMatch) {
    try {
      JSON.parse(jsonMatch[0])
      return true
    } catch (error) {
      console.error('Error parsing JSON:', error.message)
    }
  }
  return false
}

// Helper function to process each tag based on its type
const processTag = (tag, accumulator) => {
  const [tagType, ...tagData] = tag

  switch (tagType) {
    case 'd':
      return { ...accumulator, id: tagData[0] } // change d to id
    case 'title':
      return { ...accumulator, title: tagData[0] }
    case 'start':
      return { ...accumulator, start: tagData[0] }
    case 'end':
      return { ...accumulator, end: tagData[0] }
    case 'location':
      return { ...accumulator, location: tagData[0] }
    case 'g':
      return { ...accumulator, geohash: tagData[0] }
    case 'p':
      return addParticipantToAccumulator(tagData, accumulator)
    case 't':
      return addHashtagToAccumulator(tagData, accumulator)
    case 'r':
      return addReferenceToAccumulator(tagData, accumulator)
    default:
      return accumulator
  }
}

// Helper function to add participant to the accumulator
const addParticipantToAccumulator = (tagData, accumulator) => {
  const participant = {
    pubkey: tagData[0],
    relay_url: tagData[1],
    role: tagData[2]
  }

  return {
    ...accumulator,
    participants: [...(accumulator.participants || []), participant]
  }
}

// Helper function to add hashtag to the accumulator
const addHashtagToAccumulator = (tagData, accumulator) => {
  return {
    ...accumulator,
    hashtags: [...(accumulator.hashtags || []), tagData[0]]
  }
}

// Helper function to add reference to the accumulator
const addReferenceToAccumulator = (tagData, accumulator) => {
  return {
    ...accumulator,
    references: [...(accumulator.references || []), tagData[0]]
  }
}

// Main function to extract tags to an object using `reduce`
const extractMeeting = (events) => {
  return events.tags.reduce((acc, tag) => processTag(tag, acc), {})
}
