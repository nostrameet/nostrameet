import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getMeetings from './MeetingsListServices.js'

export const fetchMeetings = createAsyncThunk('meetings/fetchMeetings', getMeetings)

const initialState = {
  meetings: [],
  status: 'idle',
  error: null
}

const meetingsSlice = createSlice({
  name: 'meetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeetings.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchMeetings.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.meetings = action.payload
      })
      .addCase(fetchMeetings.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectAllMeetings = (state) => state.meetings.meetings
export const getMeetingsStatus = (state) => state.meetings.status
export const getMeetingsError = (state) => state.meetings.error

export default meetingsSlice.reducer
