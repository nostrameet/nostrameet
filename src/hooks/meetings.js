import { useEffect } from 'react'
import { getMeetingsStatus, fetchMeetings, selectAllMeetings } from 'components/MeetingList/meetingsSlice'
import { useSelector, useDispatch } from 'react-redux'

export const useMeetings = () => {
  const dispatch = useDispatch()
  const meetingsStatus = useSelector(getMeetingsStatus)
  const meetings = useSelector(selectAllMeetings)

  useEffect(() => {
    if (meetingsStatus === 'idle') {
      dispatch(fetchMeetings())
    }
  }, [meetingsStatus, dispatch])

  console.log('hola')
  return meetings
}
