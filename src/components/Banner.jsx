import React from 'react';
//images
import Image from '../assets/avatar.png'

import {FaGithub, FaLinkedin} from 'react-icons/fa'

import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants'

import { Link } from 'react-scroll';

const Banner = () => {
  return (
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7}}
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px] drop-shadow-[2px_4px_4px_rgba(184,9,195,1)]'>
              SARAH <span>CAMPBELL</span>
            </motion.h1>
            <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7}}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4 drop-shadow-xl'>I am a</span>
              <TypeAnimation
                sequence={[
                'Full Stack Developer',
                2000,
                'UI/UX Designer',
                2000,
              ]}
              speed={30}
              className='text-accent drop-shadow-[2px_4px_4px_rgba(184,9,195,0.6)]'
              wrapper='span'
              repeat={Infinity}
              />
            </motion.div>
              <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7}}
              className='mb-8 max-w-lg mx-auto lg:mx-0 drop-shadow'>
                I design and code websites that are both user-friendly and aesthetically pleasing. Always eager to grow my skills and see what opportunities come next.
              </motion.p>
              <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7}}
              className='flex max-w-max gap-x-6 items-center mb-8 mx-auto lg:mx-0'>
                <Link
                  to='contact'
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='btn btn-lg'>
                    Contact Me
                </Link>
                <Link
                  to='work'
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='text-yellow-500 font-secondary uppercase font-bold text-lg btn-link drop-shadow-[2px_4px_4px_rgba(184,9,195,0.7)] hover:text-yellow-400 cursor-pointer'>
                  My Portfolio
                </Link>
              </motion.div>
              <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7}}
              className='flex text-[25px] gap-x-6 max-w-max mx-auto lg:mx-0 lg:pl-6'>
                <a href="https://www.linkedin.com/in/sarah-campbell-805569a7/" target='_blank' rel="noopener noreferrer" className='drop-shadow'>
                  <FaLinkedin />
                </a>
                <a href="https://github.com/campbell46" target='_blank' rel="noopener noreferrer" className='drop-shadow'>
                  <FaGithub />
                </a>
              </motion.div>
          </div>
          {/* image */}
          <motion.div
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileTap={{
            scale: 0.8,
            rotate: -10,
          }}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] drop-shadow-xl'>
            <img src={Image} alt=''></img>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;