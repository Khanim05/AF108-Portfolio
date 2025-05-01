import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


let url="http://localhost:3001/product"

export const getallproducts = createAsyncThunk(
    'product/getallproducts',
    async () => {
      let { data } = await axios.get(url);
      return data;
    }
  )
const initialState={
    allProducts:[]
}

const product = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getallproducts.fulfilled,(state,action)=>
        {
            state.allProducts=action.payload
        })
    }
})

export default product.reducer
export const {extraReducers} = product.actions