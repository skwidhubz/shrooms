import React from 'react';
import { Route, Routes } from "react-router-dom";
import Nav from './Components/Nav';
import Home from './Pages/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foraging from './Pages/Foraging';

function App() {
  return (
    <>
    <Nav />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foraging" element={<Foraging />} />
          {/* <Route path="/canvas/:id?" element={<Canvas />} />
          <Route path="/library" element={<Library />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
