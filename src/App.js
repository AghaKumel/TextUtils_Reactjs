import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  
  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode=()=>{
    if(mode==='dark')
    {
      document.body.style.backgroundColor='white'
      setMode('light');
      showAlert('Light mode has been Enabled','success');
      // document.title="TextUtils- Light Mode";
    }
    else
    {
      document.body.style.backgroundColor='#124e65'
      setMode('dark');
      showAlert('Dark mode has been Enabled','success');
      // document.title="TextUtils- Dark Mode";
    }
  }
  return (
    <>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About"/>

      {/* <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About"/>
        <Alert alert={alert}></Alert>
        <div className="container">
        <Navigate>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/">
              <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}></TextForm>
              </Route>
        </Navigate>
        </div>
      </Router> */}
      {/* <Router> */}
      {/* <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} about="About"/> */}
      <Alert alert={alert}></Alert>
        {/* <div className="container">
          <Routes>
            <Route exact path="/" element={ */}
            <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode={mode}></TextForm>
            {/* } />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router> */}
    </>
  );
}

export default App;
 
