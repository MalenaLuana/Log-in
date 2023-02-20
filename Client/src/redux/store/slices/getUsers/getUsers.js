import { createSlice } from '@reduxjs/toolkit'
import * as actions from '../../../actions'


export const getUsersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    user: null,
    isLogin: null,
    loginErrors: { msg: '' }

  },
  reducers: {
    logOut: (state) => {
      state.isLogin = null
      state.user=null
     
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actions.fetchAllUsers.fulfilled, (state, action) => {
      // Add user to the state array
      state.users = action.payload
    })

    builder.addCase(actions.compareLoginData.fulfilled, (state, action) => {
      if (action.payload === 'User not found' || action.payload === 'Wrong password') {
        state.loginErrors = action.payload

      } else {
        state.user = action.payload
        window.localStorage.setItem(
          'loggedUserData', JSON.stringify(action.payload)
        )
        state.isLogin=action.payload

      }

    })
  },
})

export const { compareLoginData, logOut } = getUsersSlice.actions
export default getUsersSlice