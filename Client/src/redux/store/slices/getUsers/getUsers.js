import { createSlice } from '@reduxjs/toolkit'
import * as actions from '../../../actions'

export const getUsersSlice = createSlice({
  name: 'users',
  initialState: {
    users:[],
    userID:{},
    isLogin:false,

  },
  reducers: {
     compareLoginData: (state,action) => {
       const filter = state.users.filter(e=>e.email===action.payload.email)
       if(filter.length){
        state.isLogin=true
       }

    },
   },
  extraReducers:(builder) => {
    builder.addCase(actions.fetchAllUsers.fulfilled, (state, action) => {
      // Add user to the state array
      state.users=action.payload
    })
  },
})

export const {compareLoginData} = getUsersSlice.actions
export default getUsersSlice