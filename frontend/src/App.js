// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SectionOne from './sec1/SectionOne';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className='sub-app'>
        {/* slider */}

        <SectionOne/>
      </div>

    </div>
  );
}

export default App;
