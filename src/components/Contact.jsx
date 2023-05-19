import React, { useRef } from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import emailjs from '@emailjs/browser';



const Contact = () => {
  const form = useRef();

  const submitForm = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_1josmrp', 'template_vlyic3n', form.current, 'wIBhYI8_uw6S7FNsK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  }

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/*text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-2xl uppercase text-white font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[55px] text-[#b51d6a] uppercase lg:text-[90px] leading-none mb-12 drop-shadow-[2px_4px_4px_rgba(184,9,195,1)]'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            ref={form}
            onSubmit={(e) => submitForm(e)}
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-10 p-6 items-start form mb-16 lg:mb-0'
            >
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type="text"
              name='name'
              placeholder='Name'
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type="text"
              name='email'
              placeholder='Email'
            />
            <input
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' 
              type="text"
              name='subject'
              placeholder='Subject'
            />
            <textarea 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent resize-none mb-4'
              name='message'
              placeholder='Message'
            ></textarea>
            <button type='submit' className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
};

export default Contact;