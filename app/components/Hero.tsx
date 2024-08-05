import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill='white' />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill='purple' />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill='blue' />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className='relative my-20 z-10 grid grid-cols-1 md:grid-cols-2 items-center '>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center md:items-start justify-center mx-auto mt-[-25rem] ml-[10rem]'>
          <h2 className='uppercase tracking-widest text-xs text-center md:text-left text-blue-100 max-w-80'>
            I'm
          </h2>
          <TextGenerateEffect
            className='text-center md:text-left text-[20px] md:text-5xl lg:text-5xl'
            words='ANJUMOL GEORGE '
          />
          <p className='text-center md:text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            FRONTEND DEVELOPER
          </p>
          <a href='#about'>
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position='right'
            />
          </a>
        </div>
        <div className='flex justify-center md:justify-end mt-[-15rem] '>
          <img src="mee.png" alt="" className='max-w-full' />
        </div>
      </div>
    </div>
  )
}

export default Hero
