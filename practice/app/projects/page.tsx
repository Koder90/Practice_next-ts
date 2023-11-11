import React from 'react'
import Image from 'next/image'
import gameFinderImage from '../../public/gamefinderimg.png'

export default function Projects() {
  return (
    <div>
      <div className='text-white'>Here are my projects</div>
      <div className='grid grid-cols-3 gap-4'>
<Image 
src={gameFinderImage}
alt='gamefinder'
height={300}
width={300}
/>
<Image 
src={gameFinderImage}
alt='gamefinder'
height={300}
width={300}
/>
<Image 
src={gameFinderImage}
alt='gamefinder'
height={300}
width={300}
/>
<Image 
src={gameFinderImage}
alt='gamefinder'
height={300}
width={300}
/>
<Image 
src={gameFinderImage}
alt='gamefinder'
height={300}
width={300}
/>
<Image 
src={gameFinderImage}
alt='gamefinder'
height={300}
width={300}
/>
<Image 
src={gameFinderImage}
alt='gamefinder'
height={300}
width={300}
/>
      </div>
    </div>
  )
}
