import { Route, Routes } from "react-router-dom";
import React from "react";

import "./App.css";
import Home from "./pages/Home/Home";
import Notes from "./pages/Notes/Notes";
import Gallery from "./pages/Gallery/Gallery";
import NoteChat from "./pages/NoteChat.js/NoteChat";
import Games from "./pages/Games/Games";
import AboutUs from "./pages/AboutUs/AboutUs";
import Places from "./pages/Places/Places";
import Movies from "./pages/Movies/Movies";
import InitialPage from "./pages/InitialPage/InitialPage";
import Login from "./pages/Login/Login";


function App() {
    return (
        <Routes>
            <Route path="/" element={<InitialPage />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/notechat" element={<NoteChat />} />
            <Route path="/games" element={<Games />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/places" element={<Places />} />
        </Routes>
    );
}

export default App;