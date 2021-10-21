import { configureStore } from '@reduxjs/toolkit'
import darkReducer from './redux/darkSlice'
import openReducer from './redux/menuSlice'
import openSideReducer  from './redux/sideBarSlice'

export default configureStore({
  reducer: {
    theme: darkReducer,
    menu: openReducer,
    sideBar: openSideReducer
  },
})