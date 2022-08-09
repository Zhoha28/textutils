import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const userName = "Zhoha28";
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, typ) => {
    setAlert({
        msg: message,
        typ: typ
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
}
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
       showAlert("Dark mode has been enabled", "success");
  
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
    }

  }



  return (
    <>
      <Router>
        <Navbar companyName="TextUtils" userName={userName} mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert}/>
        <div>
          <Routes>
            {/* exact is used to overcome the partial matching of url by react */}
            <Route exact path="/" element={<TextForm mode={mode}></TextForm>} />
            <Route exact path="/about" element={<About></About>} />

          </Routes>
          
        </div>
      </Router>
 


    </>
  );
}

export default App;


