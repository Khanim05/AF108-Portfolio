import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store/store.js'
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from './redux/store/store.js'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <App/>
      </PersistGate>
    </Provider>
   </BrowserRouter>


    
  
)
