// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Compotent/Navbar";
import MyForm from "./Compotent/MyForm";
import About from "./Compotent/About";
import React, { useState } from "react";
import Alert from "./Compotent/Alert";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
// import { Switch, Route, Link, Router,Link} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if (mode ==="light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      show("Dark mode Enable", "success");
      document.title = "dark Mode";
      setInterval(() => {
        document.title = "this is amazin web";
      }, 2000);
      setInterval(() => {
        document.title = "Install amazin web";
      }, 1500);
    } else {
      setMode("light");
      document.body.style.background = "white";
      show("Light mode Enable", "success");
      document.title = "Light Mode";
    }
  };
  const [alert, setAlert] = useState(null);

  const show = (massage, type) => {
    setAlert({
      msg: massage,
      ty: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      
        {/* <Navbar />    */}
        <Navbar title="Ayan" home="Text" mode={mode} change={changeMode} />
        <Alert arror={alert} />
        <div className="container mt-5">
          <Router>
            <Routes>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/myform" element={<MyForm heading="Text Faiyaz" arror={show}/>}/>
             
            </Routes>
          </Router>


        </div>

        {/* <About /> */}
      {/* <MyForm heading="Text Content " arror={show} /> */}
    </>
  );
}

export default App;
