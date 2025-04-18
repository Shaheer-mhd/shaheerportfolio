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
            <FaPython key="python" size={40} className='text-white' />,
            <FaJs key="js" size={40} className='text-white' />,
            <SiTypescript key="ts" size={40} className='text-white' />,
            <TbFileTypeSql key="sql" size={40} className='text-white' />
        ]
    },
    {
        label: 'Framework & Libraries',
        content: [
            <FaNodeJs key="node" size={40} className='text-white' />,
            <SiExpress key="es" size={40} className='text-white' />,
            <SiDjango key="dj" size={40} className='text-white' />,
            <FaVuejs key="vue" size={40} className='text-white' />,
            <FaReact key="rs" size={40} className='text-white' />,
            <TbBrandNextjs key="ns" size={40} className='text-white' />,
            <SiRedux key="rd" size={40} className='text-white' />,
            <TbApi key="api" size={40} className='text-white' />
        ]
    },
    {
        label: 'Automation and testing',
        content: [
            <SiSelenium key="sl" size={40} className='text-white' />,
            <SiRobotframework key="rf" size={40} className='text-white' />,
            <SiBlazemeter key="bz" size={40} className='text-white' />,
            <SiWebdriverio key="dr" size={40} className='text-white' />
        ]
    },
    {
        label: 'Backend Technologies',
        content: [
            <FaAws key="aws" size={40} className='text-white' />,
            <SiSocketdotio key="io" size={40} className='text-white' />,
            <SiRabbitmq key="mq" size={40} className='text-white' />,
            <SiRedis key="red" size={40} className='text-white' />,
        ]
    },
    {
        label: 'Databases',
        content: [
            <SiPostgresql key="psql" size={40} className='text-white' />,
            <SiMongodb key="mdb" size={40} className='text-white' />
        ]
    },
    {
        label: 'Front End Technologies',
        content: [
            <FaHtml5 key="html" size={40} className='text-white' />,
            <FaCss3 key="css" size={40} className='text-white' />,
            <SiTailwindcss key="tail" size={40} className='text-white' />
        ]
    },
    {
        label: 'Development tools',
        content: [
            <FaJira key="jira" size={40} className='text-white' />,
            <FaGit key="git" size={40} className='text-white' />,
            <FaNpm key="npm" size={40} className='text-white' />,
            <FaDocker key="dckr" size={40} className='text-white' />
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