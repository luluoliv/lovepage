import { Route, Routes } from "react-router-dom";

import './App.css';
import Login from "./components/Login/Login";
import Home from './components/LandingPage/Home';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
