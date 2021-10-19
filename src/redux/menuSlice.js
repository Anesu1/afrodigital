import { createSlice } from '@reduxjs/toolkit'

export const openSlice = createSlice({
  name: 'menu',
  initialState: {
    open: false,
  },
  reducers: {
    setOpen: (state, action) => { 
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.open = action.payload;
    },
  },
})

// When create slice returns it makes an object like this
// {
//    actions: {setDark},
//    reducers: {setDark: yourfunctionabove listens for the action setDark}
// }

// Action creators are generated for each case reducer function
export const { setOpen } = openSlice.actions

export default openSlice.reducer