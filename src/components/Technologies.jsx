import React from 'react'
import { motion } from "framer-motion";

import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { RiNodejsFill } from 'react-icons/ri'
import { RiFirebaseLine } from 'react-icons/ri'
import { RiHtml5Fill} from 'react-icons/ri'
import { RiJavaLine} from 'react-icons/ri'
import { RiCloudLine} from 'react-icons/ri'
import { RiGithubLine} from 'react-icons/ri'
import { BiLogoAndroid} from 'react-icons/bi'
import { SiMongodb} from 'react-icons/si'
import { SiKalilinux} from 'react-icons/si'
import { SiSpringboot} from 'react-icons/si'
import { SiPython} from 'react-icons/si'
import { SiSqlite} from 'react-icons/si'


const iconVariants = (duration)=>({
    initial :{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
});


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>

        <div className="my-2 flex flex-wrap items-center justify-center gap-4">
           
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavaLine className='text-7xl text-red-600'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiHtml5Fill className='text-7xl text-orange-500'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiNodejsFill className='text-7xl '/>
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython className='text-7xl text-yellow-200'/>
            </motion.div>
            
            
           
        </div>
        <div className="my-2 flex flex-wrap items-center justify-center gap-4">
            <motion.div 
             variants={iconVariants(2.5)}
             initial="initial"
             animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoAndroid className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
             variants={iconVariants(3.5)}
             initial="initial"
             animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSpringboot className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
             variants={iconVariants(4)}
             initial="initial"
             animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            
            
            
            
            
        </div>
        <div className="my-2 flex flex-wrap items-center justify-center gap-4">
            <motion.div 
             variants={iconVariants(2.5)}
             initial="initial"
             animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiFirebaseLine className='text-7xl text-orange-500'/>
            </motion.div>
            <motion.div 
             variants={iconVariants(3.5)}
             initial="initial"
             animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSqlite className='text-7xl text-blue-800'/>
            </motion.div>

        </div>
        <div className="my-2 flex flex-wrap items-center justify-center gap-4">
            
            <motion.div 
             variants={iconVariants(2.5)}
             initial="initial"
             animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiKalilinux className='text-7xl text-blue-500'/>
            </motion.div>
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiCloudLine className='text-7xl text-red-600'/>
            </motion.div>
            <motion.div 
             variants={iconVariants(3.5)}
             initial="initial"
             animate='animate'
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiGithubLine className='text-7xl text-white'/>
            </motion.div>
            
        </div>
    </div>
  )
}

export default Technologies