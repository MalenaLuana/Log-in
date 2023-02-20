import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'




export const fetchAllUsers = createAsyncThunk(
    'users/getUsers',
    async()=>{
      const {data}= await axios.get('http://localhost:3001/users')
  
      return data
    }
  )
  
export const compareLoginData = createAsyncThunk(
  'login/UserLogin',
  async(payload)=>{
    const {data}= await axios.get(`http://localhost:3001/login/${payload.email}/${payload.password}`)
   return data
  }
)

                             