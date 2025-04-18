'use client'
import React, { useRef } from 'react';
import { Timeline } from 'antd';
import { motion, useInView } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

const App = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    
    return (
        <div className='w-full px-4' ref={ref}>
            <Timeline
                mode={isMobile ? 'left' : 'alternate'}
                items={[
                    {
                        label: <motion.span
                            className='text-white text-sm md:text-lg'
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            Oct 2024 - Present
                        </motion.span>,
                        children: <motion.div
                            className='flex flex-col gap-3 text-white pr-4 rounded-lg'
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <div className='flex flex-col'>
                                <h1 className='text-lg font-semibold'>Fullstack Developer</h1>
                                <h2 className='text-sm md:text-base'>Parameta Technologies - Dubai, UAE</h2>
                            </div>
                            <ul className='flex flex-col gap-2 text-sm md:text-base'>
                                <li>✅ Developed and maintained a gym trainer-client management web application using Next.js and Node.js.</li>
                                <li>✅ Designed and implemented MongoDB schemas and queries to manage user data efficiently.</li>
                                <li>✅ Integrated AWS services for secure data storage and authentication.</li>
                                <li>✅ Collaborated with Flutter developers for cross-platform consistency.</li>
                                <li>✅ Implemented RESTful APIs for seamless communication.</li>
                            </ul>
                        </motion.div>,
                    },
                    {
                        label: <motion.span
                            className='text-white text-sm md:text-lg'
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >Jun 2024 - Oct 2024</motion.span>,
                        children: <motion.div
                            className='flex flex-col gap-3 text-white pr-4 rounded-lg'
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <div className='flex flex-col'>
                                <h1 className='text-lg font-semibold'>Software Developer Executive</h1>
                                <h2 className='text-sm md:text-base'>Marhaba Investments - Dubai, UAE</h2>
                            </div>
                            <ul className='flex flex-col gap-2 text-sm md:text-base'>
                                <li>✅ Developed CRM system using Python and Django.</li>
                                <li>✅ Implemented responsive UIs with Vue.js and Bootstrap.</li>
                                <li>✅ Designed and managed databases with PostgreSQL.</li>
                                <li>✅ Utilized Docker for containerization.</li>
                            </ul>
                        </motion.div>,
                    },
                    {
                        label: <motion.span
                            className='text-white text-sm md:text-lg'
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >Jul 2022 - Jun 2024</motion.span>,
                        children: <motion.div
                            className='flex flex-col gap-3 text-white pr-4 rounded-lg'
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        >
                            <div className='flex flex-col'>
                                <h1 className='text-lg font-semibold'>Software Developer (Back-End)</h1>
                                <h2 className='text-sm md:text-base'>Nucore software solutions - Kerala, India</h2>
                            </div>
                            <ul className='flex flex-col gap-2 text-sm md:text-base'>
                                <li>✅ Led backend development using Node.js with Express.</li>
                                <li>✅ Designed data storage solutions with PostgreSQL and Redis.</li>
                                <li>✅ Architected scalable microservice architecture.</li>
                                <li>✅ Implemented SSO authentication for improved security.</li>
                                <li>✅ Utilized RabbitMQ for asynchronous communication.</li>
                                <li>✅ Integrated Socket.io for real-time communication.</li>
                                <li>✅ Managed APIs with Swagger documentation.</li>
                            </ul>
                        </motion.div>,
                    },
                ]}
            />
        </div>
    )
}

export default App;