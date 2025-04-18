'use client'
import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { FaAws, FaCss3, FaDocker, FaGit, FaHtml5, FaJira, FaJs, FaNodeJs, FaNpm, FaPython, FaReact, FaVuejs } from 'react-icons/fa';
import { SiBlazemeter, SiDjango, SiExpress, SiMongodb, SiPostgresql, SiRabbitmq, SiRedis, SiRedux, SiRobotframework, SiSelenium, SiSocketdotio, SiTailwindcss, SiTypescript, SiWebdriverio } from "react-icons/si";
import { TbApi, TbBrandNextjs, TbFileTypeSql } from "react-icons/tb";

const tabData = [
    {
        label: 'Programming Languages',
        content: [
            <FaPython size={40} className='text-white' />,
            <FaJs size={40} className='text-white' />,
            <SiTypescript size={40} className='text-white' />,
            <TbFileTypeSql size={40} className='text-white' />
        ]
    },
    {
        label: 'Framework & Libraries',
        content: [
            <FaNodeJs size={40} className='text-white' />,
            <SiExpress size={40} className='text-white' />,
            <SiDjango size={40} className='text-white' />,
            <FaVuejs size={40} className='text-white' />,
            <FaReact size={40} className='text-white' />,
            <TbBrandNextjs size={40} className='text-white' />,
            <SiRedux size={40} className='text-white' />,
            <TbApi size={40} className='text-white' />
        ]
    },
    {
        label: 'Automation and testing',
        content: [
            <SiSelenium size={40} className='text-white' />,
            <SiRobotframework size={40} className='text-white' />,
            <SiBlazemeter size={40} className='text-white' />,
            <SiWebdriverio size={40} className='text-white' />
        ]
    },
    {
        label: 'Backend Technologies',
        content: [
            <FaAws size={40} className='text-white' />,
            <SiSocketdotio size={40} className='text-white' />,
            <SiRabbitmq size={40} className='text-white' />,
            <SiRedis size={40} className='text-white' />,
        ]
    },
    {
        label: 'Databases',
        content: [
            <SiPostgresql size={40} className='text-white' />,
            <SiMongodb size={40} className='text-white' />
        ]
    },
    {
        label: 'Front End Technologies',
        content: [
            <FaHtml5 size={40} className='text-white' />,
            <FaCss3 size={40} className='text-white' />,
            <SiTailwindcss size={40} className='text-white' />
        ]
    },
    {
        label: 'Development tools',
        content: [
            <FaJira size={40} className='text-white' />,
            <FaGit size={40} className='text-white' />,
            <FaNpm size={40} className='text-white' />,
            <FaDocker size={40} className='text-white' />
        ]
    },
]

const TabContent = ({ content }: { content: React.ReactNode[] }) => {
    return (
        <div className='w-full flex justify-center'>
            <div className='grid grid-cols-4 md:grid-cols-8 gap-8'>
                {content.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </div>
    );
};

const SkillListed = () => {
    const [value, setValue] = React.useState(1);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(event)
        setValue(newValue);
    };
    return (
        <div className='w-full h-full'>
            <div className='w-full flex justify-center'>
                <Tabs textColor='primary' value={value} onChange={handleChange} aria-label="tab example" variant='scrollable' scrollButtons='auto' allowScrollButtonsMobile sx={{
                    '& .MuiTabScrollButton-root': {
                    color: 'white',
                    },
                }}>
                    {tabData.map((tab, index) => (
                        <Tab sx={{color: 'white'}} key={index} label={tab.label} />
                    ))}
                </Tabs>
            </div>
            <div className="mt-8 w-full flex justify-center">
                <div className='w-[90%]'>
                    <TabContent content={tabData[value].content} />
                </div>
            </div>
        </div>
    )
}

export default SkillListed