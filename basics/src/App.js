import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  const userName = "Zhoha28";
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }

  }
  return (
    <>
      <Router>
        <Navbar companyName="TextUtils" userName={userName} mode={mode} toggleMode={toggleMode}></Navbar>
        <div>


          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<TextForm mode={mode}></TextForm>} />
            <Route path="/about" element={<About></About>} />

          </Routes>
        </div>
      </Router>


    </>
  );
}

export default App;


