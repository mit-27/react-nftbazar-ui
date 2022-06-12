import React from 'react'

const Header = () => {
  return (
    <nav className='h-[10vh] border-b border-b-[#DCE4FF] flex justify-between items-center max-w-[1240px] mx-auto'>
        <img src={require('../assets/logo.png')} alt="logo" />
        <ul className='flex gap-4'>
            <li className="font-Archivo font-medium p-2 m-1 hover:border-b-2 rounded-sm border-b-primary hover:text-primary">Marketplace</li>
            <li className="font-Archivo font-medium p-2 m-1 hover:border-b-2 rounded-sm border-b-primary hover:text-primary">NFT collectibles</li>
            <li className="font-Archivo font-medium p-2 m-1 hover:border-b-2 rounded-sm border-b-primary hover:text-primary">Mining</li>
            <li className="font-Archivo font-medium p-2 m-1 hover:border-b-2 rounded-sm border-b-primary hover:text-primary">Resources</li>
        </ul>
        <div className='flex gap-3'>
            <button className='font-Archivo font-medium p-2 m-1'>Sign up</button>
            <button className="font-Archivo font-medium py-2 px-7 m-1 bg-primary rounded-full shadow-lg text-white">Login</button>
        </div>
    </nav>
  )
}

export default Header