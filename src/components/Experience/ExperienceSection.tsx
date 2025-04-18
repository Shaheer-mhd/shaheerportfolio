import React from 'react'
import ExperienceTimeLine from './ExperienceTimeline'

const ExperienceSection = () => {
  return (
    <div className='hidden md:flex relative bg-default border-b border-zinc-600'>
        <div className='mask-wrapper absolute' />
        <div className='content-wrapper relative'>
            <div className='w-full flex flex-col gap-12 py-20'>
                <h1 className='text-white font-bold text-4xl tracking-wider uppercase w-full text-center'>Experience</h1>
                <ExperienceTimeLine />
            </div>
        </div>
    </div>
  )
}

export default ExperienceSection