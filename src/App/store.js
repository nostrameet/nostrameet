import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'components/Counter/counterSlice.js'
import rocketReducer from 'components/Rockets/rocketSlice.js'
import meetingsReducer from 'components/MeetingList/meetingsSlice.js'
import profileReducer from 'components/Profile/profileSlice'
export default configureStore({
  reducer: {
    counter: counterReducer,
    rockets: rocketReducer,
    meetings: meetingsReducer,
    profile: profileReducer
  }
})
