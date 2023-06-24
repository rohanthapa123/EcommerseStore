import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { ToastifyError, ToastifySuccess, ToastifyWarning } from '../services/toastify.services';

const CartItem = ({item}) => {
const { removeFromCart ,increaseAmount, decreaseAmount } = useContext(CartContext)
  const {id, title, image, price, amount} = item;
  const handleRemove = () =>{
    removeFromCart(id);
    ToastifyError("Item Removed")
  }
  const handleIncrease = (e,id) =>{
    increaseAmount(id)
    ToastifySuccess("Quantity Increased")
  }
  const handleDecrease = (e,id) =>{
    decreaseAmount(id)
    ToastifyWarning("Quantity Decreased")
  }
  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light '>
    <div className='w-full min-h-[150px] flex items-center gap-x-4  '>
      <Link to={`/product/${id}`} className='w-28 p-2'>
      <img src={image} className='max-w-[80px]' alt="imageinHere" />
      </Link>
      <div className='w-full flex flex-col'>
        <div className='flex justify-between mb-2'>
          <Link to={`/product/${id}`}>
              <h1 className=' text-sm uppercase'>{title}</h1>
          </Link>
          <div onClick={(e)=>{handleRemove(e,id)}} className='text-xl cursor-pointer'>
            <AiOutlineClose  className='text-gray-500 hover:text-red-500 transition'/>
          </div>
        </div>
        <div className='flex  gap-x-2 h-[36px] text-sm items-center'>
          <div className='flex items-center gap-x-3 px-2 border'>
            <div className='cursor-pointer' onClick={(e)=> handleIncrease(e,id)}><AiOutlinePlus/></div>
            <div>{amount}</div>
            <div className='cursor-pointer' onClick={(e)=> handleDecrease(e,id)}><AiOutlineMinus/></div>
          </div>
          <div className='flex-1 flex items-center justify-around'>${price}</div>
          <div className='font-bold flex justify-end flex-1 '>${parseFloat(price*amount).toFixed(2)}</div>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default CartItem