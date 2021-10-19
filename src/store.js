import { configureStore } from '@reduxjs/toolkit'
import darkReducer from './redux/darkSlice'
import openReducer from './redux/menuSlice'

export default configureStore({
  reducer: {
    theme: darkReducer,
    menu: openReducer
  },
})