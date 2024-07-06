import './App.css';
import {Library} from './components/libros/Libros';

function App() {
  return (
    <div className="App">
      <h1 className='text-title'>Libros</h1>
      <p className='text-p'>Libros dispobibles e interesantes para una lectura reveladora</p>
      <div className='contenedor'>
        <Library />
      </div>
    </div>
  );
}

export default App;
