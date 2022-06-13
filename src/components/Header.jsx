import React from 'react'

const Header = () => {
  return (
    <nav className='h-[10vh] border-b border-b-[#DCE4FF] flex justify-between items-center max-w-[1240px] mx-auto mb-2'>
        <img src={require('../assets/logo.png')} alt="logo" />
        <ul className='flex gap-4'>
            <li className="flex flex-col cursor-pointer">
              <p className='nav-item active'>Marketplace</p>
              <div className='w-[20%] h-1 ml-2 rounded-full bg-primary'></div>
            </li>
            <li className="group flex flex-col cursor-pointer">
              <p className='nav-item group-hover:text-primary'>NFT collectibles</p>
              <div className='w-[20%] h-1 ml-2 rounded-full bg-primary hidden group-hover:block '></div>
            </li>
            <li className="group flex flex-col cursor-pointer">
              <p className='nav-item group-hover:text-primary'>Mining</p>
              <div className='w-[20%] h-1 ml-2 rounded-full bg-primary hidden group-hover:block '></div>
            </li>
            <li className="group flex flex-col cursor-pointer">
              <p className='nav-item group-hover:text-primary'>Resources</p>
              <div className='w-[20%] h-1 ml-2 rounded-full bg-primary hidden group-hover:block '></div>
            </li>
            
        </ul>
        <div className='flex gap-3'>
            <button className='font-Archivo font-medium p-2 m-1'>Sign up</button>
            <button className="btn px-7">Login</button>
        </div>
    </nav>
  )
}

export default Header