import { useEffect } from 'react'
import { getProfileStatus, fetchProfile, selectAllProfile } from 'components/Profile/profileSlice'
import { useSelector, useDispatch } from 'react-redux'

export const useProfile = () => {
  const dispatch = useDispatch()
  const meetingsStatus = useSelector(getProfileStatus)
  const meetings = useSelector(selectAllProfile)

  useEffect(() => {
    if (meetingsStatus === 'idle') {
      dispatch(fetchProfile())
    }
  }, [meetingsStatus, dispatch])

  console.log('hola')
  return meetings
}
