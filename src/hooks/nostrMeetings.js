import { parseMeetings } from 'utils/parsers'
import { useSubscribe } from 'nostr-hooks'
import RELAYS from 'constants/relays'

export const useNostrMeetings = () => {
  const { events } = useSubscribe({
    relays: RELAYS,
    filters: [{ kinds: [31922] }],
    options: {
      closeAfterEose: false
    }
  })

  return parseMeetings(events)
}
