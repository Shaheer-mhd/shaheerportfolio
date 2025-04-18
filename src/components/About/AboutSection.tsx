'use client'
import React, { useRef } from 'react'
import { Button } from '../ui/button'
import { FaWhatsapp } from 'react-icons/fa'
import {motion, useInView} from 'framer-motion'

const AboutSection = () => {
    const headingRef = useRef(null)
    const contentRef = useRef(null)

    const isHeadInView = useInView(headingRef, {once: false})
    const isContentInView = useInView(contentRef, {once: false})
  return (
    <div className='relative h-full w-full bg-default border-b border-zinc-600'>
        <div className='mask-wrapper absolute' />
        <div className='content-wrapper relative'>
            <div className='w-full h-full py-20 flex flex-col gap-12' ref={headingRef}>
                <motion.h1 
                    className='w-full text-center text-4xl uppercase tracking-wider text-white font-bold'
                    initial={{opacity: 0, y: 20}}
                    animate={isHeadInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.8}}
                >
                    About Me
                </motion.h1>
                <div className='w-full flex flex-col md:flex-row h-full' ref={contentRef}>
                    <div className='w-full md:w-1/2 self-stretch p-5 md:p-0'>
                        <motion.img 
                            src={'/images/abt.png'} height={500} width={500}
                            initial={{opacity: 0, y: 20}}
                            animate={isContentInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.8, delay: 0.3}}
                        />
                    </div>
                    <motion.div 
                        className='w-full md:w-1/2 p-5 self-stretch flex flex-col justify-center text-white text-justify tracking-wide gap-4'
                        initial={{opacity: 0, y: 20}}
                        animate={isContentInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.8, delay: 0.5}}
                    >
                        <p> Dynamic and detail-oriented experienced Software Developer specializing in backend development (ERP &
                            CRM) using Node.js. Proven track record in designing, implementing, and maintaining robust backend systems,
                            ensuring high performance and scalability. Adept at developing efficient automated testing frameworks to
                            enhance software quality and streamline development processes. Possesses strong problem-solving skills, a
                            collaborative mindset, and a commitment to delivering high-quality solutions in fast-paced environments.
                        </p>
                        <div className='flex gap-3'>
                            <Button variant={'outline'} className='text-white bg-transparent cursor-pointer'>View Projects</Button>
                            <Button variant={'outline'} className='border border-green-600 bg-transparent cursor-pointer' onClick={() => window.open('https://wa.me/971502058789', '_blank')}>
                                Contact Me
                                <FaWhatsapp color='green' />    
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection