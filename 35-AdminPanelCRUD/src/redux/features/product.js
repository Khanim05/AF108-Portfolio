import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


let url="http://localhost:3000/product"

export const getallproducts = createAsyncThunk(
    'product/getallproducts',
    async () => {
      let { data } = await axios.get(url);
      return data;
    }
  )


  export const addproducts=createAsyncThunk(
    'product/addproducts',
    async(product)=>{
        let {data}=await axios.post(url,product)
        return data
    }
  )

  export const deleteproduct=createAsyncThunk(
    'product/deleteproducts',
    async(id)=>{
        await axios.delete(`${url}/a${id}`);
        return id;
    }
  )

  export const updateproduct=createAsyncThunk(
    'products/editProduct',
    async(product)=>{
     let {data}=await axios.put(`${url}/${product.id}`, product)
     return data
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
        });

        builder.addCase(addproducts.fulfilled,(state,action)=>{
            state.allProducts.push(action.payload)
        });
        builder.addCase(deleteproduct.fulfilled,(state,action)=>{
            state.allProducts=state.allProducts.filter(p=>p.id!=action.payload)
        });

    },
   
})

export default product.reducer
export const {extraReducers} = product.actions