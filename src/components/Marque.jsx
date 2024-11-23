import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Marque() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="overflow-hidden relative border-t-[1px] border-b-[1px] border-[#5e5a56] mt-2 py-2"
      onMouseEnter={() => setIsHovered(true)} // Pause animation on hover
      onMouseLeave={() => setIsHovered(false)} // Resume animation on mouse leave
    >
      <div className="flex items-center">
        <motion.h1
          initial={{ x: '0' }} 
          animate={{ x: isHovered ? '0' : '-100%' }} // Stop on hover
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'linear',
          }}
          className="text-[6vw] leading-none pr-10 whitespace-nowrap"
        >
          Let's create something together
          <a
            href="mailto:example@example.com?subject=Inquiry&body=Hello,%0D%0A"
            className='bg-[#1c1c1a] text-[#c3bcb2] ml-4 rounded-xl px-4'
          >
            EMAIL
          </a>
        </motion.h1>

        <motion.h1
          initial={{ x: '0' }} 
          animate={{ x: isHovered ? '0' : '-100%' }} // Stop on hover
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'linear',
          }}
          className="text-[6vw] leading-none pr-10 whitespace-nowrap"
        >
          Let's create something together
          <a
            href="mailto:example@example.com?subject=Inquiry&body=Hello,%0D%0A"
            className='bg-[#1c1c1a] text-[#c3bcb2] ml-4 rounded-xl px-4'
          >
            EMAIL
          </a>
        </motion.h1>
      </div>
    </div>
  );
}

export default Marque;
