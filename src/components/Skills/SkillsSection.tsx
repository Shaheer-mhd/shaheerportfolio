import React from 'react'
import SkillListed from './SkillListed'

const SkillsSection = () => {
  return (
    <div className='relative w-full h-full bg-default-reverse border-b border-zinc-600'>
        <div className='mask-wrapper absolute' />
        <div className='content-wrapper relative'>
            <div className='w-full flex flex-col gap-12 py-20'>
                <h1 className='text-white font-bold text-4xl tracking-wider uppercase w-full text-center'>Skills</h1>
                <SkillListed />
            </div>
        </div>
    </div>
  )
}

export default SkillsSection