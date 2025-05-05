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
            console.log(existProd)
            if (!existProd) {
                state.basketProducts.push({...action.payload, count:1} )
                toast.success("Mehsul sebete elave olundu")
            }
            else{
                existProd.count +=1
            }
        },
        delItem:(state,action)=>{
            state.basketProducts=state.basketProducts.filter(item=>
                item.id!=action.payload
            )
            toast.info("Mehsul basketden silindi")

        },
        delAll:(state)=>{
            state.basketProducts=[]
            toast.info("Basket Temizlendi")
        },
        increment:(state,action)=>{
            let findProduct=state.basketProducts.find(item=>
                item.id==action.payload)
                console.log(findProduct)

                if (findProduct) {
                    findProduct.count += 1
                }
        },
        decrement:(state,action)=>{
        let findProduct=state.basketProducts.find(item=>
            item.id===action.payload
        )
        if (findProduct && findProduct.count>1) {
            findProduct.count -= 1
        }
        }

    }
   
})


export default basket.reducer
export const {updateBasket,delItem,delAll,increment,decrement} = basket.actions
