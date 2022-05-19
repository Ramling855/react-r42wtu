import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data:[],
  // seat: 0,
  All:[],
  
}

export const seatSlice = createSlice({
  name: 'seat',
  initialState,
  reducers: {
    add:(state,action)=>{
 state.data.push(action.payload);
 
    },
    pay:(state,action)=>{
      state.All.push(action.paylad)
    }
  },
  color:()=>{

  }
})


export const {add,pay } = seatSlice.actions

export default seatSlice.reducer