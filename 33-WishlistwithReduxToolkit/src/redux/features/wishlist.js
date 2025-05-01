import { createSlice } from '@reduxjs/toolkit'


const initialState={
    wishlistProducts:[]
}

const wishlist = createSlice({
    name:"product",
    initialState,
    reducers:{
        updateWishlist:(state,action)=>{
          let existPro=state.wishlistProducts.find((p)=>p.id==action.payload.id)
          if (existPro) {
            state.wishlistProducts=state.wishlistProducts.filter((pro)=>pro.id!=action.payload.id)
          }
          else{
            state.wishlistProducts.push(action.payload)
          }
        },
        removeItem:(state,action)=>{
          state.wishlistProducts=state.wishlistProducts.filter((p)=>p.id!=action.payload.id)
        },
        removeAll:(state)=>{
          state.wishlistProducts=[]
        }
    }
   
})

export default wishlist.reducer
export const {updateWishlist,removeItem,removeAll} = wishlist.actions
