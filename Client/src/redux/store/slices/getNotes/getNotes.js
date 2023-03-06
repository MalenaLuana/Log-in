import { createSlice } from '@reduxjs/toolkit'
import * as actions from '../../../actions'


export const getNotesSlice = createSlice({
  name: 'notes',
  initialState: {
   notes:[]
  },
  reducers: {
   
  },
  extraReducers: (builder) => {

    builder.addCase(actions.getUserNotes.fulfilled, (state, action) => {
   
      state.notes = action.payload.reverse()
      
    })

    },
})

