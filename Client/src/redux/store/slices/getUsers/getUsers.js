import { createSlice } from '@reduxjs/toolkit'
import * as actions from '../../../actions'

                                
export const getUsersSlice = createSlice({
  name: 'users',
  initialState: {
    users:[]
  },
  reducers: { },
  extraReducers:(builder) => {

    builder.addCase(actions.fetchAllUsers.fulfilled, (state, action) => {
      // Add user to the state array
      state.users=action.payload
    })
  },
})

export default getUsersSlice
