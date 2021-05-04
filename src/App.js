import photo from './tati.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
    
  <header className="mb-auto">
    <div className="containerButton">
      <nav className="nav nav-masthead justify-content-center float-md-end">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">About me</a>
        <a className="nav-link" href="#">My work</a>
        <a className="nav-link" href="#">Contact</a>
      </nav>
    </div>
  </header>

  <main className="container">
    <h1>Tatiana Sofía Gomes</h1>
    <p className="lead">Front-end developer based in Warsaw</p>
    <p className="lead"></p>
    <img src={photo} className="photoImg" alt="photo"/>
  </main>

  <footer className="mt-auto text-white-50">
    <p><a href="https://github.com/gltats/web-react"
         target="_blank">
          Open-source code
        </a>
          {" "}by Tatiana Gomes</p>
  </footer>
</div>

  );
}

export default App;
