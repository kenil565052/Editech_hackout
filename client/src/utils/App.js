 import React,{useState} from 'react';
import './App.css';
import Navbar from '../Components/Navbar';


import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
 
  let  [check,setcheck]=useState('light');
 
  
function toggle(){
if(check==='light'){
  setcheck('dark');
  document.body.style.backgroundColor='#0A2647'
  showalert('Dark Mode Enabled',"success")
}
else{
  setcheck('light');
  document.body.style.backgroundColor='white'
  showalert('Light Mode Enabled',"success")
}
}
 

  function blur(){
console.log("hello")
showalert("Your theme has been changed","success")
setTimeout(() => {
  setalert(null)
}, 1500);
  }
let [alert,setalert]=useState(null)
function showalert(msg,type){
  setalert({
    msg: msg,
    type: type
  })
  setTimeout(() => {
      setalert(null);
  }, 1500);
  
}

  return (
<>
<BrowserRouter>
    <Navbar  toggle={toggle} blur={blur} check={check}/>
    
    {/* <Navbar/> */}

      <Routes>
        <Route exact path="/" >
       
        </Route>
          <Route  exact path="/about" />
      </Routes>
    </BrowserRouter>

</>
      

  );
}

export default App;