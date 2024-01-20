export const parseMeetings = (events) => {
  return events
    .filter((event) => containsValidJSON(event.content))
    .map(extractMeeting)
    .map((meet) => {
      return {
        id: meet?.id,
        title: meet?.title,
        start: new Date(meet?.start),
        end: new Date(meet?.end)
      }
    })
}

const extractMeeting = (event) => {
  return JSON.parse(event?.content)
}

const containsValidJSON = (inputString) => {
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
