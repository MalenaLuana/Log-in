import { configureStore } from '@reduxjs/toolkit'
import { getNotesSlice } from './slices/getNotes'
 
import {getUsersSlice} from './slices/getUsers'

export default configureStore({
  reducer: {
    getUsers: getUsersSlice.reducer,
    getNotes:getNotesSlice.reducer
  }
})
