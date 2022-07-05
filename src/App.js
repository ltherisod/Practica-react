import './App.css';
import PromiseContainer from './components/promiseContainer/PromiseContainer';

function App() {
  const info = 'esta es la info del componente'

  return (
    <div className="App">
      <h2>Practica React</h2>
      <PromiseContainer/>
    </div>
  );
}

export default App;
