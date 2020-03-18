import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'

import logo from '../assets/logo2.png'
import camera from '../assets/camera.svg'
export default function Header() {
  return (
  <header id="main-header">
   <div className="header-content">
       <Link to="/">
       <img src={logo} width="170px" height="30" alt="InstaEvil"/>
       </Link>
       <Link to="/new">
       <img src={camera} alt="Enviar publicação"/>
       </Link>
   </div>
   </header>
  );
}
