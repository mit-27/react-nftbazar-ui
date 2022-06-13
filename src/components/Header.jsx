import React from 'react'
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <motion.nav
    initial={{y:-40,opactiy:0}}
    animate={{y:0,opactiy:1}}
    transition={{duration:0.5,ease:"easeInOut"}}
    className='h-[10vh] border-b border-b-[#DCE4FF] flex justify-between items-center max-w-[1240px] mx-auto mb-2'>
        <img src={require('../assets/logo.png')} alt="logo" />
        <ul className='flex gap-4'>
            <li className="flex flex-col cursor-pointer">
              <p className='nav-item active'>Marketplace</p>
              <div className='w-[20%] h-1 ml-2 rounded-full bg-primary'></div>
            </li>
            <li className="group flex flex-col cursor-pointer">
              <p className='nav-item group-hover:text-primary ease-in-out duration-200'>NFT collectibles</p>
              <div className='w-[20%] h-1 ml-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 ease-in-out duration-200'></div>
            </li>
            <li className="group flex flex-col cursor-pointer">
              <p className='nav-item group-hover:text-primary ease-in-out duration-200'>Mining</p>
              <div className='w-[20%] h-1 ml-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 ease-in-out duration-200'></div>
            </li>
            <li className="group flex flex-col cursor-pointer">
              <p className='nav-item group-hover:text-primary ease-in-out duration-200'>Resources</p>
              <div className='w-[20%] h-1 ml-2 rounded-full bg-primary opacity-0 group-hover:opacity-100 ease-in-out duration-200'></div>
            </li>
            
        </ul>
        <div className='flex gap-3'>
            <button className='font-Archivo font-medium p-2 m-1'>Sign up</button>
            <button className="btn px-7">Login</button>
        </div>
    </motion.nav>
  )
}

export default Header