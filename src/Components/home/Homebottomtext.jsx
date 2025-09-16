import React from 'react'
import { Link } from 'react-router-dom'

const Homebottomtext = () => {
  return (
  <div className='font-[font2] flex items-center justify-center gap-3'>
   <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-23 flex items-center px-14 border-white rounded-full uppercase'>
     <Link className='text-[6vw] mt-6' to='/project'>Projects</Link>
     </div>

     <div className='border-3 hover:border-[#D3FD50] hover:text-[#D3FD50] h-23 flex items-center px-14 border-white rounded-full uppercase'>
    <Link className='text-[6vw] mt-6'to='/agency'> Agence</Link>
    </div>
  </div>
  )
}

export default Homebottomtext