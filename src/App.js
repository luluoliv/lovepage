import { Route, Routes } from "react-router-dom";

import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      {/* <Route path='/gallery' element={<Gallery />} />
      <Route path='/games' element={<Games />}  />
      <Route path='/movies' element={<Home />}  />
      <Route path='/notes' element={<Home />}  />
      <Route path='/places' element={<Home />}  /> */}
    </Routes>
  );
}

export default App;
