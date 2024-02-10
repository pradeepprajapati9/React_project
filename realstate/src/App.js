import Intro from './components/Intro';
import About from './components/About';
import Run2  from './components/Run2';
import Run from './components/Run';
import Schools from "./components/Schools";
import Form from './components/Form';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Timeline from './components/Timeline';
import Testimonials from '../src/components/Testimonials/Testimonials';

function App() {
  return (
    <>
      <Navbar />

      <Intro />
      
      <About />
      
      <Run/>

      <Timeline />

      <Testimonials />
     
      <Run2 />
     
      <Schools />     
      
      <Form />

      <Footer />

    </>
    
  );
}


export default App;
