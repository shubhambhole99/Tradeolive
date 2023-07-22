
import React, { useState } from 'react';
import './Navbar.css'
import hamburger from '../assets/Hamburger.png'
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>


export const Navbar=()=> {
  let id1='ham';
  const [c, setC] = useState(0);
  const [Id, setId] = useState('colmain');
  const [navId,setnavId]=useState('')

  // const [navMenuBackgroundColor, setNavMenuBackgroundColor] = useState('black');

  const dropdown=()=>{
    console.log(1)
    if (c === 0) {
      // setNavMenuBackgroundColor('rgb(101, 101, 101)');
      setId('top');
      setC(1);
    } else {
      // setNavMenuBackgroundColor('black');
      setId('colmain');
      setC(0);
    }
  }


  return (
    <>
  <div id="nav-menu">
    <div>
        <h1 id="name">TradeOlive</h1>
    </div>
    <div id="main">
        <p><a className="custom-link" href="#front">Home</a></p>
        <p><a className="custom-link" href="#aboutss">About Me</a></p>
        <p><a className="custom-link" href="#skillss"> Skills</a></p>
        <p><a className="custom-link" href="#projectss">Projects</a></p>
        <p><a className="custom-link" href="#contactss">Contact Me</a></p>
    </div>
    <div id={Id}>
            <p><a onClick={dropdown} href="#front">Home</a></p>
            <p><a onClick={dropdown} href="#aboutss">About Me</a></p>
            <p><a onClick={dropdown} href="#skillss">Skills</a></p>
            <p><a onClick={dropdown} href="#projectss">Projects</a></p>
            <p><a onClick={dropdown} href="#contactss">Contact Me</a></p>
            {/* <p><a onClick="reload( 'https://drive.google.com/file/d/1yYYAZlUqVoNAhTUfC3xt4-WmE5Nauu5b/view?usp=share_link')" href="Shubham_Bhole_Resume.pdf" download="">Resume</a></p> */}
        </div>
      <img id='ham' onClick={dropdown} style={{}} src={hamburger}></img>
        
    </div>
    </>
  )
}


