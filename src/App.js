import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './components/Home';

import Navbar from './components/Navbar';
import Catalog from './components/Catalog';
import Signup from './components/Signup';
import data from './data';
import Details from './components/Details';
import AddGame from './components/AddGame';
import Reduirements from './Reduirements';
function App() {
  const [Data, setData] = useState(data)
  return (
    <div className="App">
      <Router>
        <Navbar Data={Data} setData={setData} />
        <Routes>
          <Route path="/" element={<Home data={Data} />} />
          <Route path="/addgame" element={<AddGame />} />
          <Route path="/catalog" element={<Catalog data={Data} setdata={ setData} />} />
          <Route path="/catalog/:details" element={<Details data={Data} />} />
          <Route
            path="/requirements/:requirements"
            element={<Reduirements data={Data} />}
          />
          {/* <Route path="/catalog/:requirements" element={<Catalog />} /> */}
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
