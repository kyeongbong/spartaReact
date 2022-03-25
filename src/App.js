import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainWord from './component/MainWord';
import AddWord from './component/AddWord';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainWord/>}/>
        <Route path='/AddWord' exact element={<AddWord/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;
