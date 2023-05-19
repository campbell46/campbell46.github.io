import React from 'react';

import { motion } from 'framer-motion';

import {FaGithub} from 'react-icons/fa'

import { fadeIn } from '../variants';

import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return (
  <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3 }}
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent drop-shadow-[2px_4px_4px_rgba(184,9,195,1)]'>
              My Latest <br />
              Work.
            </h2>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>  
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt='' />
             {/* info */}
              <div className='bg-[#00cae5] rounded-r-full pl-2 pr-6 md:pl-8 md:pr-12 absolute -bottom-full  group-hover:bottom-6 lg:group-hover:bottom-12  transition-all duration-500 z-50'>
              {/* title */}
              <div className='flex flex-col items-around'>
                <span className='text-2xl uppercase text-[#005b67] font-bold drop-shadow pt-4'>Happy Helpers</span>
                <span className='font-secondary font-bold drop-shadow mb-2'>Design and Development</span>
              {/* github button */}
                <a href="https://github.com/campbell46/happy-helpers" className='text-[25px] drop-shadow mb-4' target='_blank' rel="noopener noreferrer">
                    <FaGithub />
                </a>
              </div>
            </div>
            {/* stack */}
            <div className='absolute -bottom-full  right-4 md:right-12 lg:right-4 xl:right-12 group-hover:bottom-4 transition-all duration-700 z-50 '>
              <div className='flex flex-col'>
                <p className='skill1 font-bold uppercase h-6 md:h-8'>Next.JS</p>
                <p className='skill2 font-bold uppercase h-6 md:h-8'>Prisma</p>
                <p className='skill3 font-bold uppercase h-6 md:h-8'>Postgres</p>
                <p className='skill1 font-bold uppercase h-6 md:h-8'>Node.JS</p>
                <p className='skill2 font-bold uppercase h-6 md:h-8'>Tailwind</p>
              </div>
            </div>
            
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3 }}
          className='flex-1 flex flex-col gap-y-10'>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>  
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt='' />
             {/* info */}
              <div className='bg-[#00cae5] rounded-r-full pl-2 pr-6 md:pl-8 md:pr-12 absolute -bottom-full  group-hover:bottom-6 lg:group-hover:bottom-12  transition-all duration-500 z-50'>
              {/* title */}
              <div className='flex flex-col items-around'>
                <span className='text-2xl uppercase text-[#005b67] font-bold drop-shadow pt-4'>MyVault</span>
                <span className='font-secondary font-bold drop-shadow mb-2'>Design and Development</span>
              {/* github button */}
                <a href="https://github.com/campbell46/myVault" className='text-[25px] drop-shadow mb-4' target='_blank' rel="noopener noreferrer">
                    <FaGithub />
                </a>
              </div>
            </div>
            {/* stack */}
            <div className='absolute -bottom-full  right-4 md:right-12 lg:right-4 xl:right-12 group-hover:bottom-4 transition-all duration-700 z-50 '>
              <div className='flex flex-col'>
                <p className='skill1 font-bold uppercase h-6 md:h-8'>Node.JS</p>
                <p className='skill2 font-bold uppercase h-6 md:h-8'>Express</p>
                <p className='skill3 font-bold uppercase h-6 md:h-8'>PSQL</p>
                <p className='skill1 font-bold uppercase h-6 md:h-8'>SASS</p>
                <p className='skill2 font-bold uppercase h-6 md:h-8'>Bootstrap</p>
              </div>
            </div>
          </div>


          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>  
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt='' />
             {/* info */}
              <div className='bg-[#00cae5] rounded-r-full pl-2 pr-6 md:pl-8 md:pr-12 absolute -bottom-full  group-hover:bottom-6 lg:group-hover:bottom-12  transition-all duration-500 z-50'>
              {/* title */}
              <div className='flex flex-col items-around'>
                <span className='text-2xl uppercase text-[#005b67] font-bold drop-shadow pt-4'>Interview Scheduler</span>
                <span className='font-secondary font-bold drop-shadow mb-2'>Development</span>
              {/* github button */}
                <a href="https://github.com/campbell46/scheduler" className='text-[25px] drop-shadow mb-4' target='_blank' rel="noopener noreferrer">
                    <FaGithub />
                </a>
              </div>
            </div>
            {/* stack */}
            <div className='absolute -bottom-full  right-4 md:right-12 lg:right-4 xl:right-12 group-hover:bottom-4 transition-all duration-700 z-50 '>
              <div className='flex flex-col'>
                <p className='skill1 font-bold uppercase h-6 md:h-8'>React</p>
                <p className='skill2 font-bold uppercase h-6 md:h-8'>Node.JS</p>
                <p className='skill3 font-bold uppercase h-6 md:h-8'>Express</p>
                <p className='skill1 font-bold uppercase h-6 md:h-8'>PSQL</p>
                <p className='skill2 font-bold uppercase h-6 md:h-8'>SCSS</p>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  )
};

export default Work;