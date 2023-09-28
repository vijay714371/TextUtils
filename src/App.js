
import React,{useState} from 'react';
import ReactDOM from "react-dom/client";
import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [mode ,setMode]=useState('light');//whether dark mode is enbled or not
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
    setAlert(null)
    },2000)

  }
  const toogleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode has neen enabled ","success")
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has neen enabled ","success")
    }
  }
  return (
    <>
    
<Navbar title="TextUtils" mode={mode} toogleMode={toogleMode}/>
<Alert alert={alert}/>
<div className="container">
<BrowserRouter>
      <Routes>
      
         
          <Route path="/" element={<TextForm heading="Entre text to analyze :" mode={mode} showAlert={showAlert}/>} />
          <Route path="/about" element={<About />} />
          
       
      </Routes>
    </BrowserRouter>

    
{/* <About /> */}
</div>

    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
