import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProduct } from '../services/axios.services'

const Hero = () => {
    const [product, setProduct ] = useState({})

    const getProd = () =>{
        getProduct().then((resp)=>{
            setProduct(resp)
        })
    }
    useEffect(()=>{
        getProd();
    },[])
  return (
    <>
        <div className='flex items-center bg-gray-200 py-20 mt-24 '>
        <div className='items-center w-96 lg:w-[50%] px-10 '>
            <Link to={`/product/${product.id}`}>
            <h1 className='text-xl font-bold  '>{product.title}</h1>
            <h1>{product.description}</h1>
            </Link>
            <div className='flex pt-5 items-center gap-4'>
            <p className='underline font-bold'>Only ${product.price}</p>
            </div>
        </div>
        <div className='w-96 m-auto  '>
            <img src={product.image} className='h-96 w-96 mix-blend-multiply' alt="" />
        </div>
        </div>
    </>
  )
}

export default Hero