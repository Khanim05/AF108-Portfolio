import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/product'
import wishlistReducer from '../features/wishlist'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
};

const persistWishlist=persistReducer(persistConfig,wishlistReducer)
const persistProduct=persistReducer(persistConfig,counterReducer)

export const store =configureStore({
  reducer:
  {
    product:persistProduct,wishlist:persistWishlist
  }
})



// 5. Persistor
export const persistor = persistStore(store);
