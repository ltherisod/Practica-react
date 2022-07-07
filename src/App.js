import './App.css';
import'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Fetch from './components/fetch/Fetch';


function App() {
  const info = 'esta es la info del componente'

  return (
    <div className="App">
      <h2>Practica React</h2>
      <Fetch/>
    </div>
  );
}

export default App;
