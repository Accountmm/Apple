import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  return (
    <Html >
      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
        <div className='w-[10vw] h-[10vw]  '>
          <div class="flex flex-row gap-2">
            <div class="w-4 h-4 rounded-full bg-blue animate-bounce [animation-delay:.7s]"></div>
            <div class="w-4 h-4 rounded-full bg-blue animate-bounce [animation-delay:.3s]"></div>
            <div class="w-4 h-4 rounded-full bg-blue animate-bounce [animation-delay:.7s]"></div>
          </div>
        </div>
      </div>
    </Html>
  )
}

export default Loader