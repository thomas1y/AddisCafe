import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import 'bootstrap/dist/css/bootstrap.css';
import 'glightbox/dist/css/glightbox.css';
//import {BrowserRouter} from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.jsx'
import StoreContextProvider from './context/StoreContext.jsx';
//import Navbar from './components/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  
     <StoreContextProvider>
           
           <App />
     </StoreContextProvider>
  
   
  
)
