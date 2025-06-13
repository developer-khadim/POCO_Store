import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
  return (
   <div className=" w-full hidden md:flex overflow-x-auto md:justify-end md:pr-4 lg:pr-64 items-right py-4 md:py-7 gap-4 md:gap-10 bg-black text-white  white z-10">
        <Link className="font-semibold hover:text-amber-300 duration-400 cursor-pointer" to="/product">POCO F7 PRO ULTRA</Link>
        <Link className="font-semibold hover:text-amber-300 duration-400 cursor-pointer ml-6" to="/poco-f7-pro">POCO F7 PRO</Link>
        <Link className="font-semibold hover:text-amber-300 duration-400 cursor-pointer ml-6" to="/poco-f7-pro-5g">POCO F7 PRO 5G</Link>
        <Link className="font-semibold hover:text-amber-300 duration-400 cursor-pointer ml-6" to="/poco-c75">POCO C75</Link>
        <Link className="font-semibold hover:text-amber-300 duration-400 cursor-pointer ml-6" to="/poco-m6-pro">POCO M6 PRO</Link>
        <Link className="font-semibold hover:text-amber-300 duration-400 cursor-pointer ml-6" to="/poco-f6-pro">POCO F6 PRO</Link>
        <Link className="font-semibold hover:text-amber-300 duration-400 cursor-pointer ml-6" to="/poco-f6">POCO F6</Link>
        <Link className="font-semibold hover:text-amber-300 duration-400 cursor-pointer ml-6" to="/poco-x6-pro-5g">POCO X6 PRO 5G</Link>
</div>
  )
}

export default Links
