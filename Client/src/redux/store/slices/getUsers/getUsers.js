import { createSlice } from '@reduxjs/toolkit'
import * as actions from '../../../actions'


export const getUsersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    user: null,
    isLogin: null,
    loginErrors: null,
    singUpMsg:null

  },
  reducers: {
    logOut: (state) => {
      state.isLogin = null
      state.user=null
     
    },
    singUpErr: (state,action)=>{
      state.singUpMsg=action.payload
    },
    reset:(state)=>{
      state.singUpMsg=null
      state.loginErrors= null
    }

  },
  extraReducers: (builder) => {
    builder.addCase(actions.fetchAllUsers.fulfilled, (state, action) => {
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
    builder.addCase(actions.postNewUser.fulfilled, (state, action) => {
      // Add user to DB
      if(action.payload==='Ya existe un usuario con esa cuenta de mail'){
        state.singUpMsg=action.payload
      } else{
        state.user=action.payload
        window.localStorage.setItem(
          'loggedUserData', JSON.stringify(action.payload)
        )
        state.isLogin=true
      }
    })
  },
})

export const { compareLoginData, logOut,reset } = getUsersSlice.actions
export default getUsersSlice