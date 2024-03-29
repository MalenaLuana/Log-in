import { createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


const {URL_API} = process.env
//Acciones manejo de usuarios
export const fetchAllUsers = createAsyncThunk(
    'users/getUsers',
    async()=>{
      const {data}= await axios.get(`${URL_API}users`)
  
      return data
    }
  )
  
export const compareLoginData = createAsyncThunk(
  'login/UserLogin',
  async(payload)=>{
    const {data}= await axios.get(`${URL_API}/login/${payload.email}/${payload.password}`)
   return data
  }
)


export const postNewUser = createAsyncThunk(
  'newUser/postUser',
  async(payload)=>{
    const {data}= await axios.post(`${URL_API}/users`,payload)
    return data
    
  }
)

//acciones manejo de Notas <3

export const getUserNotes = createAsyncThunk(
  'notes/getNotes',
  async(payload)=>{
    const {data}= await axios.get(`${URL_API}/users/${payload}/notes`)
    return data
  }
)            

export const postNote = createAsyncThunk(
  'newNote/postNote',
  async(payload)=>{
    const {data}= await axios.post(`${URL_API}/notes`,payload)
    return data
    
  }
)

export const deleteNote =  createAsyncThunk(
  'deleteNote/deleteNote',
  async(payload)=>{
    const {data}= await axios.delete(`http://localhost:3001/notes/${payload}`)
    return data
    
  }
)

export const editeNote = createAsyncThunk(
  'deleteNote/deleteNote',
  async(payload)=>{
    const {data}= await axios.put(`http://localhost:3001/notes/${payload.id}`,payload.object)
    console.log(payload)
    console.log(data)
    
  }
)