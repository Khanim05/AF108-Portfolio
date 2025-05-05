import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { toast } from 'react-toastify';



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
        await axios.delete(`${url}/${id}`);
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
            toast.success("Mehsul elave olundu")
        });
        builder.addCase(deleteproduct.fulfilled,(state,action)=>{
            state.allProducts=state.allProducts.filter(p=>p.id!=action.payload)
            toast.info("Mehsul silindi")
        });
        builder.addCase(updateproduct.fulfilled,(state,action)=>{
          state.allProducts=state.allProducts.map(
            (product)=>{
              if (product.id==action.payload.id)
                return action.payload
              else{
                 return product
              }
        })
        toast.success("Mehsul edit olundu")
          
        })

    },
   
})

export default product.reducer
export const {extraReducers} = product.actions