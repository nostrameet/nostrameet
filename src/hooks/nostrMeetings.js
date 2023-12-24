import { useState } from 'react'
// import { getMeetingsStatus, fetchMeetings, selectAllMeetings } from 'components/MeetingList/meetingsSlice'
// import { useSelector, useDispatch } from 'react-redux'
import { useNDK } from '@nostr-dev-kit/ndk-react'

export const useNostrMeetings = () => {
  const [nostrEvents, setNostrEvents] = useState([])

  const { fetchEvents } = useNDK()

  const filter = {
    kinds: [1],
    '#t': ['ndk']
  }

  const parseNostrEvent = (nostrEvent) => {
    const jsonString = nostrEvent?.content?.split('#')[0].replace('`', '').replace("'", '').replace("'", '')
    const json = JSON.parse(jsonString)
    console.log('jsonString', jsonString)
    console.log('json', json)

    const event = {
      id: nostrEvent?.id,
      title: json.title,
      start: new Date(json.start),
      end: new Date(json.end)
    }
    console.log('event', event)
    return event
  }

  const getEvents = async () => {
    const nostrEvents = await fetchEvents(filter).then((result) =>
      setNostrEvents(
        result
          ?.filter((nostrEvent) => nostrEvent?.pubkey === '1c256737b88db5cc294f754a63c2740356d1fe86d7de4af450f91693e88e4d7b')
          ?.map(parseNostrEvent)
      )
    )
    return nostrEvents
  }
  getEvents()

  return nostrEvents
}
