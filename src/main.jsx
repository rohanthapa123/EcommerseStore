import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductProvider from './contexts/ProductContext.jsx'
import SideBarProvider from './contexts/SideBarContext.jsx'
import CartProvider from './contexts/CartContext.jsx';

import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById('root')).render(

  <SideBarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </React.StrictMode>,
      </ProductProvider>
    </CartProvider>
  </SideBarProvider>
)
