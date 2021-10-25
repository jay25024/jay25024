import Topbar from './components/topbar/topbar';
import Intro from './components/intro/intro';
import Portfolio from './components/portfolio/portfolio';
import Works from './components/works/works';
import Testimonials from './components/testimonials/testimonials';
import Contact from './components/contact/contact';
import "./App.scss"
import {useState} from "react";
import Menu from './components/Menu/menu';



function App() {
  const[menuOpen,setMenuOpen] = useState(false);
   
  return (
    <div className="App">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/> 
     <div className = "sections">
       
       <Intro/>
       <Portfolio/>
       <Works/>
       <Testimonials/>
       <Contact/>
      
     </div>
    </div>
  );
}

export default App;
