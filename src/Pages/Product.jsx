import React from 'react'
import Davice_Info from '../Components/device_Info';
import Suggestion from '../Components/Suggestion';

const Product = () => {
  return (
    <div className='w-full bg-white py-8'>
      <div className='container max-w-[1460px] mx-auto '>
        <Davice_Info />
        
        {/* Divider with text */}
        <div className='flex items-center gap-4 pt-4'>
          <span className='w-full h-[1px] bg-gray-300  ' />
          <span className='whitespace-nowrap text-sm font-medium text-black'>
            YOU MAY ALSO LIKE
          </span>
          <span className='w-full h-[1px] bg-gray-300' />
        </div>
        {/* Suggestions Section */}
        <Suggestion/>
      </div>
    </div>
  )
}

export default Product