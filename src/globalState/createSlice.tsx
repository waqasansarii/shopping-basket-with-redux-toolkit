import { createSlice } from '@reduxjs/toolkit'
import { Initial_state,Products } from './initialState'


const firtSlice = createSlice({
  name: 'list',
  initialState: Initial_state,


  reducers: {
    addItem: (state, action) => {
           
      Products.list.filter((val)=>{
        if(val.id===action.payload.id){
        val.bool=true
        return val
      }})
      state.basket = [action.payload,...state.basket]
    },
    deleteItem: (state, action) => {

      Products.list.filter((val)=>{if(val.id===action.payload.id){
        val.bool=false
        return val
      }})

      let filter: any = state.basket.filter((val) => val.id !== action.payload.id)
      // console.log(filter)
      state.basket = [...filter]
    }
  }

})

export const { addItem, deleteItem }: any = firtSlice.actions


// export const selectList =(state:any)=> state.list

export const listReducer = firtSlice.reducer