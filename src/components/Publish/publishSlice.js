import { createSlice } from '@reduxjs/toolkit'

export const publishSlice = createSlice({
  name: 'publish',
  initialState: {
    title: '',
    start: new Date(),
    end: new Date(),
    status: 'idle',
    error: null
  },
  reducers: {
    setTitle(state, action) {
      state.title = action.payload
    },
    setStart(state, action) {
      state.start = action.payload
    },
    setEnd(state, action) {
      state.end = action.payload
    }
  }
})

export const { setTitle, setStart, setEnd } = publishSlice.actions

export default publishSlice.reducer

export const selectContent = (state) => state.publish.content

export const selectStatus = (state) => state.publish.status

export const selectTitle = (state) => state.publish.title
export const selectStart = (state) => state.publish.start
export const selectEnd = (state) => state.publish.end
