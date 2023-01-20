import React from 'react';
import { AiFillSetting, AiOutlineInfoCircle } from 'react-icons/ai';
const Navbar = ({setHelp}) => {
  return (
    <div className='flex w-100 justify-between items-center pt-5 py-3 sm:pt-3 text-black border-b-2 border-slate-700'>
        <AiOutlineInfoCircle className='text-3xl mx-3 cursor-pointer dark:text-white' onClick={()=>setHelp(true)}/>
        <h1 className='text-3xl font-bold dark:text-white'>WORDLE</h1>
        <AiFillSetting className='text-3xl mx-3 cursor-pointer dark:text-white' />
    </div>
  )
}

export default Navbar