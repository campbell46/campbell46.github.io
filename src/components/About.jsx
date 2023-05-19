import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import { Link } from 'react-scroll';

const About = () => {

  return (
    <section className='section' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          <motion.div
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3 }}
          className='flex-1 bg-about bg-contain bg-no-repeat min-h-[250px]  h-[650px] bg-top'></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3 }}
            className='flex-1'>
            <h2 className='h2 text-accent  drop-shadow-[2px_4px_4px_rgba(184,9,195,1)]'>About me.</h2>
            <h3 className='font-bold text-3xl mb-4 drop-shadow tracking-wide'>
              My name is Sarah, I currently live in Rockland, ON.
            </h3>
            <p className='mb-2 drop-shadow'>
              I've had a passion for tech since a young age, always wondering how things worked. I took a programming course in highschool and it changed the way I view everything.
            </p>
            <p className='mb-6 drop-shadow'>
              Before settling down in Rockland and completing the Lighthouse Labs Web Dev Bootcamp, I was previously working as a conductor on the railway up North and prior to that I was a vegetation technician all over the West side of Canada. Finally pursuing my passion of programming and excited to see where it takes me.
            </p>
            {/* skills */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-8'>
              <h1 className='font-secondary text-accent uppercase font-bold drop-shadow-[2px_4px_4px_rgba(184,9,195,0.7)]'>Skills:</h1>
              <div className='flex flex-wrap'>
                <p className='skill1 font-bold uppercase'>Javascript</p>
                <p className='skill2 font-bold uppercase'>Next.JS</p>
                <p className='skill3 font-bold uppercase'>React</p>
                <p className='skill1 font-bold uppercase'>Node.JS</p>
                <p className='skill2 font-bold uppercase'>Express</p>
                <p className='skill3 font-bold uppercase'>SASS</p>
                <p className='skill1 font-bold uppercase'>Tailwind</p>
                <p className='skill2 font-bold uppercase'>Bootstrap</p>
                <p className='skill3 font-bold uppercase'>SQL</p>
                <p className='skill1 font-bold uppercase'>Cypress</p>
              </div>




            </div>



            <div className='flex gap-x-8 items-center'>
            <a href="https://infograph.venngage.com/ps/sAx0axxkcdI/sarah-campbells-resume" target='_blank' rel="noopener noreferrer">
              <button className='btn btn-sm'>Resume</button>
            </a>
              <Link
              to='work'
              activeClass='active'
              smooth={true}
              spy={true} 
              className='text-yellow-500 font-secondary uppercase font-bold text-lg btn-link drop-shadow-[2px_4px_4px_rgba(184,9,195,0.7)] hover:text-yellow-400 cursor-pointer'>
                My Portfolio
              </Link> 
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;