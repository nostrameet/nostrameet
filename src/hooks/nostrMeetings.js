import { parseMeetings } from 'utils/parsers'
import { useSubscribe } from 'nostr-hooks'

export const useNostrMeetings = () => {
  const { events } = useSubscribe({
    relays: ['ws://127.0.0.1:4444'],
    filters: [{ kinds: [1] }],
    options: {
      closeAfterEose: false
    }
  })

  return parseMeetings(events)
}
