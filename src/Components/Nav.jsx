import React from 'react'
import Logo from '../assets/POCO.png'
import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'

const Nav = () => {
  return (
    <section className='w-full select-none'>
      {/* Top Nav */}
      <div className='bg-black flex justify-between items-center border-t-2 border-amber-300 px-[230px] '>
        <div>
          <img src={Logo} alt="PoCO"  /> 
        </div>
        <div className='text-white flex gap-4 text-sm items-center'>
          <Link className='hover:text-amber-300 duration-400 cursor-pointer'>SIGN IN</Link> |
          <Link className='hover:text-amber-300 duration-400 cursor-pointer'>REGISTER</Link>
          <ShoppingBag className='ml-6 text-white hover:text-amber-300' />
        </div>
      </div>  
  
    </section>
  )
}

export default Nav  