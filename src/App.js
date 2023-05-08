import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Gallery from "./pages/Gallery";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* <Route path='/games' element={<Games />}  />
      <Route path='/movies' element={<Home />}  />
      <Route path='/places' element={<Home />}  /> */}
        </Routes>
    );
}

export default App;
