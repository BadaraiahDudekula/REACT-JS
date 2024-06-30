import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Emplisting from './Emplisting';
import EmpCreate from './EmpCreate';
import EmpDetails from './EmpDetails';
import EmpEdit from './EmpEdit';

function App() {
  return (
    <div className="App">
     <h1>React Js CRUD Operations</h1>
     <BrowserRouter>
  <Routes>
    <Route path='/' element={<Emplisting/>}> </Route>
    <Route path='/employee/create' element={<EmpCreate/>}></Route>
    <Route path='/employee/details/:empid' element={<EmpDetails/>}></Route>
    <Route path='/employee/edit/:empid' element={<EmpEdit/>}></Route>

   
    </Routes>
  </BrowserRouter>
    </div>
  );
 
}

export default App;
