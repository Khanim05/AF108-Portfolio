import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

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
            toast.info("Mehsul sevimlilerden silindi")
          }
          else{
            state.wishlistProducts.push(action.payload)
            toast.success("Mehsul sevimlilere elave olundu")
          }
        },
        removeItem:(state,action)=>{
          state.wishlistProducts=state.wishlistProducts.filter((p)=>p.id!=action.payload.id)
          toast.info("Mehsul wishlistden silindi")
        },
        removeAll:(state)=>{
          state.wishlistProducts=[]
          toast.info("Wishlist Temizlendi")
        }
    }
   
})


export default wishlist.reducer
export const {updateWishlist,removeItem,removeAll} = wishlist.actions
