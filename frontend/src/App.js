import './App.css';
import Navbar from './components/Navbar';
import Contact from './contact/Contact';
import SectionOne from './sec1/SectionOne';
import Footer from './footer/Footer';
import ImgSlider from './Slider/ImgSlider';

function App() {

  return (
    <div className="App">
      <Navbar/> 
      <ImgSlider/>

        <div className='sub-app'>
          <SectionOne/>
          <Contact/>
        </div>
          
          <Footer/>

    </div>
  );
}

export default App;
