import React from 'react';
//images
// import logo from '../assets/logo.svg';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>

        <h1 className='font-secondary font-semibold leading-5 tracking-widest drop-shadow-[2px_4px_4px_rgba(184,9,195,1)]'>Sarah Campbell</h1>

        <a href="https://infograph.venngage.com/ps/sAx0axxkcdI/sarah-campbells-resume" target='_blank' rel="noopener noreferrer">
          <button className='btn btn-sm'>Resume</button>
        </a>
      </div>
    </div>
  </header>;
};

export default Header;