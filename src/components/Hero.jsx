import React from 'react'
import {motion} from 'framer-motion'


const Hero = () => {
  return (
    <div className=" bg-[url('./assets/bg_image.png')] bg-cover">
        <div className="grid grid-cols-4 max-w-[1240px] mx-auto h-auto">

{/* Left side content */}
<motion.div
initial={{x:-50,opacity:0}}
animate={{x:0,opacity:1}}
transition={{duration:0.5,delay:0.5,ease:"easeInOut"}}
 className='col-span-1 flex flex-col gap-8 mt-[40%]'>
  <div className='flex flex-col gap-1'>
    <h1 className='text-5xl font-sans font-bold'>Discover,</h1>
    <h1 className='text-5xl font-sans font-bold'>collect,</h1>
    <h1 className='text-5xl font-sans font-bold'>and sell <span className='text-primary'>NFTs</span></h1>

  </div>
  <p className='font-Archivo font-medium'>World’s fast growing NFTs bazar based on collectible NFTs.</p>
  <button className="btn px-2 w-[60%] py-3 flex justify-center">View Collection <img src={require('../assets/right_arrow.png')} width={7} height={7} className="ml-2 mt-1" alt="" /> </button>
</motion.div>

{/* Image for center */}
<motion.img 
initial={{y:70,opacity:0}}
animate={{y:0,opacity:1}}
transition={{duration:0.8,ease:"easeInOut"}}
src={require('../assets/hero_image.png')} className="col-span-2 w-[60%] ml-10"  alt="Hero Image" />

{/* Right side content */}

<motion.div 
initial={{x:50,opacity:0}}
animate={{x:0,opacity:1}}
transition={{duration:0.5,delay:0.5,ease:"easeInOut"}}
className='flex flex-col col-span-1 mt-[40%] gap-9 items-center w-full'>
  {/* Card */}
  <div className='p-8 rounded-xl drop-shadow-lg bg-[#FAFFFF] flex flex-col gap-3 w-full'>
    <h2 className='font-Archivo text-xl font-bold'>Silver the <span className='text-primary'>Hedgehog</span></h2>

    <div className='p-3 bg-primarylight rounded-lg flex flex-col gap-2'>
      <h2 className='font-Archivo text-base '>Current Bid</h2>
      <div className='flex gap-2 items-center'>
        <img src={require('../assets/eth.png')} width={15} alt="" />
        <p className="font-sans font-bold text-xl text-primary">1.018</p>
        <p className='font-sans font-semibold text-lg'>($2,396)</p>
      </div>
    </div>

    <div className='flex gap-4'>
      <button className="btn px-5">Place a bid</button>
      <button className="font-Archivo font-medium py-2 m-1 text-primary">Share</button>
    </div>
  </div>

  <div className='flex gap-3 mt-5 flex-col w-full'>
    <h2 className="font-Archivo text-xl font-bold">Top Contributors</h2>

    {/* 2 Profiles */}
    <div className='flex items-start gap-4'>
      <img src={require('../assets/profile_1.png')} width={45} alt="Profile 2" />
      <div className='flex flex-col'>
        <p className="font-Archivo font-bold text-lg">Rashid Khan</p>
        <p className="font-Archivo font-semibold text-sm text-primary">2 days ago</p>
      </div>
      <div className="flex gap-4 pt-1 ml-5">
        <p className="font-Archivo font-semibold text-sm text-primary">Qty: <span className='text-black'>1</span></p>
        <p className="font-Archivo font-semibold text-sm text-primary">UP: <span className='text-black'>0.01</span></p>
      </div>
    </div>


    <div className='flex items-start gap-4'>
      <img src={require('../assets/profile_2.png')} width={45} alt="Profile" />
      <div className='flex flex-col'>
        <p className="font-Archivo font-bold text-lg">Shardul Thakur</p>
        <p className="font-Archivo font-semibold text-sm text-primary">3 days ago</p>
      </div>
      <div className="flex gap-4 pt-1">
        <p className="font-Archivo font-semibold text-sm text-primary">Qty: <span className='text-black'>2</span></p>
        <p className="font-Archivo font-semibold text-sm text-primary">UP: <span className='text-black'>1.01</span></p>
      </div>
    </div>


  </div>
</motion.div>


</div>
    </div>
    
  )
}

export default Hero