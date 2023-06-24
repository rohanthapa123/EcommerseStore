import React, { useContext } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { ProductContext } from '../contexts/ProductContext';
import ProductSection from './ProductSection';
const ProductDisplay = () => {
    const { products } = useContext( ProductContext);
    
    const clothings = products?.filter((item)=>{
        return (item.category === "men's clothing" || item.category === "women's clothing")
    })
    const electronics = products?.filter((item)=>{
        return (item.category === "electronics")
    })
    // console.log(clothings, electronics)
  return (
    <>  
        <ProductSection products={clothings} heading={"CLOTHES"} />
        <ProductSection products={electronics} heading={"ELECTRONICS"} />
    </>
  )
}

export default ProductDisplay