
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Loader from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Work />
      <Contact />
      <h5>This page is under development</h5>
      <Loader 
      type="TailSpin"
      color="#00BFFF"
      height={100}
      width={100}
      
      />


  <footer className="mt-auto text-white-50">
    <p>
      <a href="https://github.com/gltats/web-react"
         target="_blank"
         rel="noreferrer">
          Open-source code
      </a>
          {" "}by Tatiana Gomes
    </p>
    
      
  </footer>
</div>

  );
}

export default App;
