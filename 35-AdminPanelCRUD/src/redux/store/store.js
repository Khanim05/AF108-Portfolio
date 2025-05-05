import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/product'
import wishlistReducer from '../features/wishlist'
import basketReducer from '../features/basket'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
  key: 'root',
  storage,
};

const persistWishlist=persistReducer(persistConfig,wishlistReducer)
const persistProduct=persistReducer(persistConfig,counterReducer)
const persistBasket=persistReducer(persistConfig,basketReducer)



export const store =configureStore({
  reducer:
  {
    product:persistProduct,wishlist:persistWishlist, basket:persistBasket
  }
})



// 5. Persistor
export const persistor = persistStore(store);
