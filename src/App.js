import './App.css';
import'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Fetch from './components/fetch/Fetch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PromiseContainer from './components/promiseContainer/PromiseContainer';
import Nav from './components/nav/Nav';
import DetalleContainer from './components/detalle/DetalleContainer';


function App() {
  return (
   <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<Fetch/>}/>
        <Route path='/promesa' element={<PromiseContainer/>}/>
        <Route path='/detalle/:id' element={<DetalleContainer/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
