import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

let initialState ={
    value : []
}

export const todoSlider=createSlice({
       name:"todo",
       initialState,
       reducers:{ 
        addTodo:(state,action) =>{
            state.value.push({
                id:uuidv4(),
                name:action.payload
            })
        },
        editTodo: (state,action)=>{
           state.value = state.value.map((item)=>
                item.id==action.payload.id ? {...item,name:action.payload.newName}
                : item
            )
        },
        delAll: (state)=>{
            state.value=[]
        },
        delItem:(state,action)=>{
            state.value=state.value.filter((item)=>
                item.id!=action.payload
            )
        }

       }
})
 export let {addTodo,editTodo,delAll,delItem}=todoSlider.actions
export default todoSlider.reducer
