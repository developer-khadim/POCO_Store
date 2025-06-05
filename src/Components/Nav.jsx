import React from 'react'
import Logo from '../assets/POCO.png'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <section className='w-full select-none'>
      {/* Top Nav */}
      <div className='bg-black flex justify-between items-center border-t-2 border-amber-300 px-[230px]'>
        <div>
          <img src={Logo} alt="PoCO" />
        </div>
        <div className='text-white' >
          <Link >  Login  </Link>
        </div>
      </div>  
      {/* Bottom Nav */}
      <div>Bottom Nav</div>
    </section>
  )
}

export default Nav