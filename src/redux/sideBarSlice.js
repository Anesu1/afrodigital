import { createSlice } from '@reduxjs/toolkit'

export const openSideSlice = createSlice({
  name: 'sideBar',
  initialState: {
    openSide: false,
  },
  reducers: {
    setOpenSide: (state, action) => { 
      state.openSide = action.payload;
    },
  },
})

export const { setOpenSide } = openSideSlice.actions

export default openSideSlice.reducer