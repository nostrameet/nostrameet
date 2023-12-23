import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getProfile from './ProfileServices.js'

export const fetchProfile = createAsyncThunk('profile/fetchProfile', getProfile)

const initialState = {
  profile: [],
  status: 'idle',
  error: null
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.profile = action.payload
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectAllProfile = (state) => state.profile.profile
export const getProfileStatus = (state) => state.profile.status
export const getProfileError = (state) => state.profile.error
export default profileSlice.reducer
