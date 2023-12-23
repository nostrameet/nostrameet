import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getRockets from './RocketsServices.js'

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', getRockets)

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
  reserved: []
}

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rockets = state.rockets.find((results) => results.id === action.payload)
      rockets.reserved = !rockets.reserved
    },
    myReservedRockets: (state) => {
      const rockets = state.rockets.filter((rocket) => rocket.reserved === true)
      state.reserved = rockets
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.rockets = action.payload
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectAllRockets = (state) => state.rockets.rockets
export const getRocketsStatus = (state) => state.rockets.status
export const getRocketsError = (state) => state.rockets.error
export const getReservedRockets = (state) => state.rockets.reserved
export const { reserveRocket, myReservedRockets } = rocketsSlice.actions
export default rocketsSlice.reducer
