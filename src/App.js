import photo from './tati.jpg';
import './App.css';

function App() {
  return (
    <div className="d-flex h-100 text-center text-white bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header className="mb-auto">
    <div>
      <h3 className="float-md-start mb-0">My website</h3>
      <nav className="nav nav-masthead justify-content-center float-md-end">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">About me</a>
        <a className="nav-link" href="#">My work</a>
        <a className="nav-link" href="#">Contact</a>
      </nav>
    </div>
  </header>

  <main className="px-3">
    <h1>Tatiana Sofía Gomes</h1>
    <p className="lead">Front-end developer based in Warsaw</p>
    <p className="lead">
    <img src={photo} className="photoImg" alt="photo"/>
    </p>
  </main>

  <footer className="mt-auto text-white-50">
    <p><a href="https://github.com/gltats/weather-react-app"
         target="_blank">
          Open-source code
        </a>
          {" "}by Tatiana Gomes</p>
  </footer>
</div>

    </div>
  );
}

export default App;
