import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between max-w-[1240px] mx-auto h-[8vh] pb-8 items-center mt-3'>
      <div className='flex flex-col p-2'>
        <p className='text-lg'>Join Community - </p>
        <img src={require('../assets/social_icons.png')} alt="" />
      </div>

      <h2 className='text-xl font-Archivo'>
        Created by <a className='text-primary hover:border-b p-1 hover:border-b-primary' href='https://github.com/mit-27'>Mit Suthar</a>
      </h2>

      <img src={require('../assets/fueler_tag.png')} width={150} alt="" />

    </div>
  )
}

export default Footer