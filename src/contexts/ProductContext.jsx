import React, {createContext, useState,useEffect} from 'react'
import { getProduct, getProducts } from '../services/axios.services';

export const ProductContext = createContext();


const ProductProvider = ({children}) => {
    const [products, setProducts ] = useState([])
    useEffect(() => {
        const fetchProducts = () =>{
            getProducts().then((resp)=>{
                setProducts(resp)
                console.log(resp)
            })
        }
        fetchProducts()
        
    }, [])
    
  return <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
  
}

export default ProductProvider