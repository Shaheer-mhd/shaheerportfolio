'use client'
import React, { useRef } from 'react'
import { CiShare1 } from "react-icons/ci";
import { motion, useInView } from 'framer-motion'

const websiteProjectObj: Array<{
    title: string,
    src: string,
    link: string
}> = [
        {
            title: 'Creative Innovate',
            src: '/projects/websites/1.png',
            link: 'https://creativeinnovate.ae/'
        },
        {
            title: 'GRPFZC',
            src: '/projects/websites/2.png',
            link: 'https://grpfzc.com/en'
        },
        {
            title: 'Dr Fadi Bakal',
            src: '/projects/websites/3.png',
            link: 'https://fadibakal.ae/en'
        },
        {
            title: 'Avaluxe Staging',
            src: '/projects/websites/4.png',
            link: 'https://avaluxestaging.com/'
        },
    ]

const webAppProjects: Array<{
    title: string,
    src: string,
    overView: React.ReactNode,
    techHighlights: React.ReactNode
}> = [
        {
            title: 'XiaFit',
            src: '/projects/3.jpg',
            overView: <ul className='pl-5 list-disc'>
                <li>Web and mobile application connecting personal gym
                    coaches and their clients.</li>
                <li>
                    Coaches manage training plans; clients follow workouts
                    from their app.
                </li>
            </ul>,
            techHighlights: <ul className='pl-5 list-disc'>
                <li>Stack: Node.js, Next Js, Express, Flutter (mobile),
                    MongoDB</li>
                <li>
                    Role: Full Stack
                </li>
            </ul>
        },
        {
            title: 'EcoSolutions',
            src: '/projects/2.jpeg',
            overView: <ul className='pl-5 list-disc'>
                <li>A role-based CRM system designed for an investment-based real
                    estate company.</li>
                <li>
                    Handles the flow from Lead to Client, including KYC , bank details
                    & document handling
                </li>
            </ul>,
            techHighlights: <ul className='pl-5 list-disc'>
                <li>Stack: Vue.js, python django, PostgreSQL</li>
                <li>
                    Role: Full stack
                </li>
            </ul>
        },
        {
            title: 'nuCEM',
            src: '/projects/4.png',
            overView: <ul className='pl-5 list-disc'>
                <li>Developed to manage high volumes of email-based
                    customer enquiries and support requests.</li>
                <li>
                    Automatically fetches incoming emails and converts
                    them into actionable requests.
                </li>
                <li>
                    Requests are categorized, prioritized, and assigned to
                    appropriate staff.
                </li>
            </ul>,
            techHighlights: <ul className='pl-5 list-disc'>
                <li> Stack: Node.js, PostgreSQL, Redis, Socket.io</li>
                <li>
                    Role: Backend development
                </li>
            </ul>
        },
    ]

const ProjectSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: false})
    return (
        <div className='relative w-full bg-default-reverse border-b border-zinc-600'>
            <div className='mask-wrapper absolute' />
            <div className='content-wrapper z-50 relative'>
                <div className='w-full flex flex-col gap-12 py-20'>
                    <h1 className='text-white font-bold text-4xl tracking-wider uppercase w-full text-center'>Projects</h1>
                    <div ref={ref} className='flex flex-col gap-8 items-center'>
                        <div className='flex flex-col gap-6'>
                            <motion.h1
                                className='text-xl text-zinc-500 uppercase tracking-widest'
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8 }}
                            >
                                Websites
                            </motion.h1>
                            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                                {
                                    websiteProjectObj.map((item, index) => {
                                        const isLeft = index < 2;
                                        return (
                                            <motion.div
                                                initial={{ x: isLeft ? -100 : 100, opacity: 0 }}
                                                animate={isInView ? { x: 0, opacity: 1 } : {}} 
                                                transition={{
                                                    duration: 0.6,
                                                    delay: index * 0.3,
                                                    ease: 'easeInOut',
                                                }}
                                                key={index}
                                                className='w-[350px] md:w-full p-2 rounded-lg bg-gray-600 flex gap-3 items-center flex-col cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'
                                                onClick={() => window.open(item.link, '_blank')}
                                            >
                                                <img src={item.src} className='w-full h-auto' />
                                                <div className='flex items-center justify-between w-full'>
                                                    <h1 className='text-white'>{item.title}</h1>
                                                    <CiShare1 color='white' />
                                                </div>
                                            </motion.div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <motion.h1
                                className='text-xl text-zinc-500 uppercase tracking-widest'
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8 }}
                            >
                                web apps
                            </motion.h1>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                                {
                                    webAppProjects.map((item, index) => {
                                        
                                        return (
                                            <motion.div
                                                key={index}

                                                className='w-[350px] md:w-full p-2 rounded-lg bg-gray-600 flex gap-3 items-center flex-col cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'
                                            >
                                                <img src={item.src} className='w-full h-auto' />
                                                <div className='flex flex-col w-full px-4 gap-3 text-white'>
                                                    <h1 className='text-white text-lg font-bold'>{item.title}</h1>
                                                    <div className='flex flex-col gap-2'>
                                                        <h1>Overview:</h1>
                                                        {item.overView}
                                                    </div>
                                                    <div className='flex flex-col gap-2'>
                                                        <h1>Tech Highlights:</h1>
                                                        {item.techHighlights}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection