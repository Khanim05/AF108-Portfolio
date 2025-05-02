import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const initialState={
    basketProducts:[]
}

const basket = createSlice({
    name:"product",
    initialState,
    reducers:{
        updateBasket:(state,action)=>{
            let existProd=state.basketProducts.find(prod=>prod.id==action.payload.id)
            if (!existProd) {
                state.basketProducts.push({...action.payload, count:1} )
                toast.success("mehsul sebete elave olundu")
            }
            else{
                existProd.count +=1
            }
        }
    }
   
})


export default basket.reducer
export const {updateBasket} = basket.actions
