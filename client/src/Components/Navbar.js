// import { Outlet, Link } from "react-router-dom";
// import Event from "./Event";

// export default function Navbar(props) {

//   return (
// <>
// <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.check}`}>
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/">LandingPage</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item" >
//         <Link className="nav-link"  to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//         <Link className="nav-link" to="/about">Events</Link>
//         </li> 
//         <li className="nav-item">
//         <Link className="nav-link" to="/about">Pages</Link>
//         </li> 
//         <li className="nav-item">
//         <Link className="nav-link" to="/about">LogIn/Register</Link>
//         </li> 
//         <li className="nav-item">
//         <Link className="nav-link" to="/about">Profile <i className="ri-notification-3-line"></i></Link>
//         </li> 
//       </ul>
//       <div className="form-check form-switch" >
//   <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
//   <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:props.check==='dark'?'white':'black'} }>Enable Darkmode</label>
// </div>
//     </div>
//   </div>
// </nav>
//  <Event checked={props.check}/>
// <Outlet/>

// </>
//   )
// }
import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import {styles} from '../styles'
import { navLinks } from '../constants';
import {logo,menu,close} from '../assets'
const Navbar = () => {
  const [active,setActive]=useState('');
  const [toggle,setToggle]=useState(false);
  
  return (
  <nav 
  className={`
  ${styles.paddingX} w-full flex items-center py-5 fixed top-0 bg-primary z-20 `}>
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
<Link to="/" className='flex items-center gap-2' onClick={()=>{setActive(""); window.scrollTo(0,0);}}> 
<img src={logo} alt="logo" className='w-7 h-7 object-contain'></img>
<p className='text-white text-[18px] flex font-bold cursor-pointer'>JAINAM |<span className='sm:block hidden'>SANGHAVI</span></p>
</Link>
<ul className="list-none sm:flex hidden flex-row gap-10">
  {navLinks.map((link)=>(
    <li key={link.id}
      className={`${active===link.title?"text-white":"text-secondary" } hover:text-white text-[18px] font-medium` }
    onClick={()=>{
      setActive(link.title);
    }}>
      
      <a href={`#${link.id}`} >
      {link.title}
      </a>
      </li>
  ))}
</ul>
<div className='sm:hidden flex flex-1 justify-end items-center'>
  <img 
  src={toggle ?close:menu}
  alt="menu"
  className='w-[28px] h-[28px] object-contain cursor-pointer'
  onClick={()=>{
    setToggle(!toggle);
  }}/>
  <div
  className={`${toggle?'flex':'hidden'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
  >
<ul className="list-none  flex flex-col justify-end items-start gap-4">
  {navLinks.map((link)=>(
    <li key={link.id}
      className={`${active===link.title?"text-white":"text-secondary" } font-poppins font-medium cursor-pointer text-[16px]` }
    onClick={()=>{
      setActive(link.title);
      setToggle(!toggle)
    }}>
      
      <a href={`#${link.id}`} >
      {link.title}
      </a>
      </li>
  ))}
</ul>


  </div>

</div>
    </div>

  </nav>
  )
}

export default Navbar