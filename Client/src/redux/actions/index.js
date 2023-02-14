import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchAllUsers = createAsyncThunk(
    'users/getUsers',
    async(thunkAPI)=>{
      const {data}= await axios.get('http://localhost:3001/users')
  
      return data
    }
  )
  
                             