import React from 'react'
import { Link } from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi'
const TopSection = () => {
  return (
    <>
        <nav className='bg-gray-200 select-none fixed z-10 top-0 w-full '>
            <li className='flex gap-6 text-sm justify-center py-1'>
                <Link to={"/payment"}>PAYMENT METHODS</Link>
                <Link to={"/customercare"}>CUSTOMER CARE</Link>
                <Link className='flex items-center' to={"/login"}>LOGIN <FiLogIn/></Link>
                <Link to={"/register"}>SIGN UP</Link>
            </li>
        </nav>
    </>
  )
}

export default TopSection