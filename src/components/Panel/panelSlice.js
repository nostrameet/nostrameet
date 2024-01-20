import { createSlice } from '@reduxjs/toolkit'

export const panelSlice = createSlice({
  name: 'panel',
  initialState: {
    visibility: false,
    placement: 'start',
    keyword: 'publish'
  },
  reducers: {
    showPanel: (state) => {
      state.visibility = true
    },
    hidePanel: (state) => {
      state.visibility = false
    }
  }
})

export const { showPanel, hidePanel } = panelSlice.actions

export default panelSlice.reducer

export const selectVisibility = (state) => state.panel.visibility

export const selectPlacement = (state) => state.panel.placement

export const selectKeyword = (state) => state.panel.keyword
