import { Route, Routes } from "react-router-dom";

import './App.css';
import Login from "./components/Login/Login";
import Home from './components/LandingPage/Home';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/photos' element={<Home />} />
      <Route path='/games' element={<Home />}  />
      <Route path='/movies' element={<Home />}  />
      <Route path='/notes' element={<Home />}  />
      <Route path='/places' element={<Home />}  />
    </Routes>
  );
}

export default App;
