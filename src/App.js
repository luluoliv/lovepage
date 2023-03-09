import { Route, Routes } from "react-router-dom";

import './App.css';
import Login from "./pages/Login";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
{/*       <Route path='/home' element={<Home />} />
      <Route path='/mural' element={<Mural />} />
      <Route path='/games' element={<Games />}  />
      <Route path='/movies' element={<Home />}  />
      <Route path='/notes' element={<Home />}  />
      <Route path='/places' element={<Home />}  /> */}
    </Routes>
  );
}

export default App;
