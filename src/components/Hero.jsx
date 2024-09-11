import React from 'react'
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/LinkedIn.jpg"
import { motion } from "framer-motion";
import { FiDownload } from 'react-icons/fi';
import resumePdf from '../../src/assets/projects/ArjunKharade_1DS21CS045(DSCE).pdf'


const container = (delay) => ({
    hidden:{x : -100, opacity:0},
    visible:{
        x:0,
        opacity: 1,
        transition:{duration: 0.5, delay: delay},
    },
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-36'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className=' bg-gradient-to-r from-cyan-300 via-cyan-200 to-white bg-clip-text pb-16 text-6xl font-normal tracking-tight lg:mt-16 lg:text-8xl text-cyan-200'>Arjun Kharade</motion.h1>
                    <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                     className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Software Developer</motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                        { HERO_CONTENT}
                    </motion.p>

                    <motion.a
                        href={resumePdf}
                        download="Arjun_Kharade_Resume.pdf"
                        className='flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full mt-4'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        >
                        <FiDownload className='mr-2' />
                        Download Resume
                    </motion.a>
                </div>
            </div>
            <div  className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img 
                        initial={{x:100, opacity:0}}
                        animate={{x:0,opacity:1}}
                        transition={{duration:1, delay:1.2}}
                        className='rounded-2xl w-96' src={profilePic} alt='Arjun Kharade'/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Hero