import { createSlice } from '@reduxjs/toolkit'

export const meetingsSlice = createSlice({
  name: 'meetings',
  initialState: {
    meetings: [],
    status: 'idle',
    error: null
  },
  reducers: {
    getEvents(state, action) {
      state.meetings.meetings = action.payload
    }
  }
})

export default meetingsSlice.reducer

export const selectMeetings = (state) => state.meetings.meetings

export const selectStatus = (state) => state.meetings.status
