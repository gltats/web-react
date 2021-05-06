
import './App.css';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Work from './Work';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Work />
      <Contact />


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
