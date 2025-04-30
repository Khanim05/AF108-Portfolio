import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todoSlider'

export const store = configureStore({
    reducer: {
         todo: todoReducer,
    },
})

