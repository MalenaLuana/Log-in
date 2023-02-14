import { configureStore } from '@reduxjs/toolkit'
 
import {getUsersSlice} from './slices/getUsers'

export default configureStore({
  reducer: {
    getUsers: getUsersSlice.reducer

  }
})
