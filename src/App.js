// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';


// import logo from './assets/logo.png';

const App = () => {

  return (
    <div className='bg-site-sm lg:bg-site-lg bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Work />
      <Contact />
      <div className='h-[50px]'></div>
    </div>
  );
};

export default App;