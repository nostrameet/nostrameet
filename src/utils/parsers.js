export const parseMeetings = (meetings) => {
  return meetings.map((meet) => {
    return {
      id: meet?.id,
      title: meet?.attributes?.title,
      start: new Date(meet?.attributes?.start),
      end: new Date(meet?.attributes?.end)
    }
  })
}
