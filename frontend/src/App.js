import './App.css';
import Navbar from './components/Navbar';
import Contact from './contact/Contact';
import SectionOne from './sec1/SectionOne';
import Footer from './footer/Footer';
import ImgSlider from './Slider/ImgSlider';

// console.log(window.location)
function App() {

  let Component;
  switch(window.location.pathname){
    case '/':
      Component = ImgSlider;
      break;
    case '/SectionOne':
      Component = SectionOne;
      break;
    case '/Contact':
      Component = Contact;
      break;
  }

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
