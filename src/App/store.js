import { configureStore } from '@reduxjs/toolkit'
import panelSliceReducer from 'components/Panel/panelSlice'
import meetingsReducer from 'components/MeetingsCalendar/meetingsSlice'
import publishReducer from 'components/Publish/publishSlice'

export default configureStore({
  reducer: {
    panel: panelSliceReducer,
    meetings: meetingsReducer,
    publish: publishReducer
  }
})
