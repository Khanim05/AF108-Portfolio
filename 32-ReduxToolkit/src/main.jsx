import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import App from './App.jsx'
import {store}  from './redux/store/store.js'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <Provider store={store}>
    <App />
   </Provider>
   </BrowserRouter>

    
  
)
