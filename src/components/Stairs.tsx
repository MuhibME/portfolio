import React from 'react';
import {animate,motion} from 'framer-motion';

//variations
const stairAnimation = {
  initial:{
    top:'0%',
  },
  animate:{
    top:'100%',
  },
  exit:{
    top:['100%','0%'],
  },
};

const reverseIndex = (index:any)=>{
  const totalSteps=6;
  return totalSteps  - index -1;
}

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_,index)=>{
        return (
        <motion.div 
          key={index} 
          variants={stairAnimation} 
          initial="initial" 
          animate="animate" 
          exit="exit" 
          transition={{
            duration: 0.4,
            delay: reverseIndex(index) * 0.1,
            ease:'easeInOut',
          }} 
        className='h-full w-full relative bg-white'
        />)
      })}
    </>
  )
}

export default Stairs;