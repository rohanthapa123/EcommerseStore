import React, { useContext } from 'react'
import  { SideBarContext } from '../contexts/SideBarContext'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { CartContext } from '../contexts/CartContext';
import {FaTrash} from 'react-icons/fa'
import { ToastifyError } from '../services/toastify.services';
const SideBar = () => {
    const { isOpen , handleClose } = useContext(SideBarContext);
    const {cart, clearCart , total,itemAmount} = useContext(CartContext)
  return (
    <div className={` ${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] `}>    
        <div className='flex justify-between items-center'>
            <div className='font-semibold '>Item({itemAmount})</div>
        <AiOutlineArrowRight className='cursor-pointer w-8 items-center  h-8 mt-5 ' onClick={handleClose}/>
        </div>
        <div className='border border-b-0 '>
        </div>
        <div className='flex flex-col gap-y-2 h-[520px] lg:h-[600px] overflow-y-auto overflow-x-hidden border-b'>
          {
            cart.map((item)=>{
              return (
                <CartItem item={item} key={item.id}/>
              )
            })
          }
        </div>
        <div className='flex items-center justify-between'>
          <div>
            <span>Total: </span> $ {parseFloat(total).toFixed(2)}
          </div>
          <div onClick={()=> {
            clearCart()
            ToastifyError("Cart Cleared")
          }} className='cursor-pointer  bg-red-400 p-2'>
            <FaTrash/>
          </div>
        </div>
        <div className='mt-4'>
          <div className='py-2'>
          <button className=' uppercase bg-gray-500 w-full py-3 lg:py-1'>View Cart</button>
          </div>
          <div className='py-2'>
          <button className=' uppercase bg-gray-900 text-white w-full py-3 lg:py-1'>Check Out</button>
          </div>
        </div>
    </div>
  )
}

export default SideBar