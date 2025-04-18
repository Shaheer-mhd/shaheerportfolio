'use client'
import React, { useRef } from 'react'
import {motion, useInView} from 'framer-motion'
import { Button } from '../ui/button'

const HeroSection = () => {
    const navRef = useRef(null)
    const contentRef = useRef(null)

  const isNavInView = useInView(navRef, { once: false })
  const isContentInView = useInView(contentRef, { once: false })
  return (
    <div className='relative h-screen w-full bg-[url(/bg/bg2.jpg)] bg-center bg-cover bg-no-repeat border-b border-zinc-600'>
        <div className='absolute mask-wrapper' />
        <div className='content-wrapper relative'>
            <div className='pt-10 md:flex justify-between items-center hidden'>
                <div className='flex-1' />
                <div className='flex items-center gap-6 uppercase text-white tracking-widest' ref={navRef}>
                    {
                        ['About', 'Skills', 'Experience', 'Projects', 'Education'].map((menu, index) => (
                            <motion.span
                                key={index}
                                initial={{opacity: 0, x: (index + 1) * 10}}
                                animate={isNavInView ? {opacity: 1, x: 0} : {}}
                                transition={{duration: 0.8, delay: index * 0.1}}
                                whileHover={{scale: 1.2}}
                                className='cursor-pointer text-sm'
                            >
                                {menu}
                            </motion.span>
                        ))
                    }
                </div>
            </div>
            <div className='h-full justify-center flex flex-col gap-4 p-4 md:p-0' ref={contentRef}>
                <motion.h1
                    className='uppercase font-bold text-white text-2xl md:text-4xl tracking-wider'
                    initial={{opacity: 0, x: -10}}
                    animate={isContentInView ? {opacity: 1, x: 0} : {}}
                    transition={{duration: 0.8}}
                >
                    - Muhammed Shaheer
                </motion.h1>
                <motion.h2
                    className='uppercase font-bold text-white text-xl md:text-2xl tracking-wider pl-5 md:pl-8'
                    initial={{opacity: 0, x: -20}}
                    animate={isContentInView ? {opacity: 1, x: 0}: {}}
                    transition={{duration: 0.8}}
                >
                    Software Developer 
                </motion.h2>
                <motion.div
                   className='pl-5 md:pl-8'
                   initial={{opacity: 0, x: -30}}
                   animate={isContentInView ? {opacity: 1, x: 0}: {}}
                   transition={{duration: 0.8}} 
                >
                    <Button variant={'outline'} className='text-white bg-transparent cursor-pointer uppercase text-sm tracking-wide' onClick={() => window.open('/files/muhammed_shaheer_full_stack_dev.pdf', '_blank')}>Download cv</Button>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection