import logo from './logo.svg';
import './App.css';
import Contenedor from './components/contenedor/Contenedor';
import Contador from './components/contador/Contador';

function App() {
  const info = 'esta es la info del componente'

  return (
    <div className="App">
      <h2>Practica React</h2>
      <Contenedor data={info}/>
      <Contador stock={12} initial={1}/>
    </div>
  );
}

export default App;
