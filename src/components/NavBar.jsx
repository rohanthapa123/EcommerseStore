import React, { useContext } from 'react'
import {BsSearch} from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { SideBarContext } from '../contexts/SideBarContext'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
const NavBar = () => {
  //sidebarContext
  const {isOpen , setIsOpen } = useContext(SideBarContext)
  const {itemAmount} = useContext(CartContext)
  return (
    <>
        <nav className='flex fixed select-none z-10 top-7 justify-between  md:justify-center md:gap-10 lg:gap-32 px-5 md:px-32 py-4 bg-gray-400 w-full'>
            <div className=' items-center flex '>
            <Link to={"/"} >
              <h1 className='font-bold text-3xl '>ROHAN</h1>
            </Link>
            </div>
            <div className='flex items-center w-[60%]'>
            <input  type="text" placeholder='search' className='border w-full p-4'/>
            <BsSearch className='h-12 -ml-10'/>
            </div>
            <div className='flex items-center font-semibold text-lg' onClick={() => setIsOpen(!isOpen)}>
              

            <AiOutlineShoppingCart className='h-14 w-8 cursor-pointer' /><span className='cursor-pointer'> ({itemAmount})</span>
            </div>
        </nav>
    </>
  )
}

export default NavBar