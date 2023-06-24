import React, { useContext } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { ToastifySuccess } from '../services/toastify.services'

const ProductSection = ({products, heading}) => {
    
    const { addToCart ,itemAmount, setItemAmount } = useContext(CartContext)
    const addToCarts = (e, item)=>{
        e.preventDefault()   
        // console.log(item.id)
        addToCart(item, item.id)
        ToastifySuccess("Added to Cart")
    }
     //const {id, image,category, title, price} = products;
  return (
    <div className='border-blue-700 border-y-2'>
    <h1 className='bg-gray-400 py-2 text-center font-bold text-2xl'>{heading}</h1>
        <div className='grid bg-gray-400 px-2 py-5 grid-flow-row  lg:grid-cols-5 xl:grid-cols-6 md:grid-cols-4 gap-5'>
            {
                products && products.map((item)=>{
                    return <div key={item.id} className="lg:w-64 mx-auto md:w-48 flex flex-col transition-all justify-between  bg-slate-200 border border-gray-200 rounded-lg w-72">
                        <Link className='' to={`/product/${item.id}`}>
                            <img className="m-auto p-3 h-48 rounded-t-lg hover:scale-110 transition-all ease-in-out rounded-md mix-blend-multiply " src={item.image} alt="product image" />
                        </Link>
                        <div className='px-3 pb-5'>
                        <Link to={`/product/${item.id}`}>
                                <h5 className="text-xl  font-semibold tracking-tight text-gray-900 ">{item.title}</h5>
                        </Link>
                    </div>
                    <div className="px-3 pb-5">
                        <div className="flex items-center mt-2.5 mb-5">
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill={`${item.rating.rate >= 1 ? "currentColor" : "gray"}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill ={`${item.rating.rate >= 2 ? "currentColor" : "gray"}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill={`${item.rating.rate >= 3 ? "currentColor" : "gray"}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill={`${item.rating.rate >= 4 ? "currentColor" : "gray"}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill={`${item.rating.rate == 5 ? "currentColor" : "gray"}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{item.rating.rate}</span>
                            <Link href="#" className="text-sm font-medium text-blue-500 underline hover:no-underline ">({item.rating.count})</Link>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-gray-900">$ {item.price}</span>
                            <button onClick={(e)=>addToCarts(e,item,)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex gap-2 items-center"><AiOutlineShoppingCart/>+</button>
                        </div>
                    </div>
                </div>
                })
            }


        </div>
    </div>
  )
}

export default ProductSection