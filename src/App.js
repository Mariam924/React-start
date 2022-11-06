import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header/Header';
import Portfolio from './Portfolio/Portfolio';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
   <>
    <Navbar/>
    <Header/>
    <Portfolio/>
    <About/>
    <Contact/>
    <Footer/>
   </>
  );
}

export default App;
