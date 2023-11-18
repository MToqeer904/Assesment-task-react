import './App.css';
import Feature from './components/features/Feature';
import HeroSection from './components/heroSection/HeroSection';
import Navbar from './components/navbar/Navbar';
import RegistrationForm from './components/registrationForm/RegistrationForm';
import Slider from './components/slider/Slider';

function App() {
  return (
    <div className='app'>
      <Navbar isNavbar={true}/>
      <HeroSection />
      <Feature />
      <Slider />
      <RegistrationForm />
      <hr style={{strokeWidth: "1px", stroke: "#CBCBCB"}} />
      <Navbar isNavbar={false}/>
      <p className='footerPara'>Copyright © 2023 i2c inc. All rights reserved.</p>
    </div>
  );
}

export default App;
