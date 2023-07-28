
import React, { useState } from 'react';
import '../styles/Navbar.css'
import hamburger from '../assets/Hamburger.png'
import {Link} from 'react-router-dom';

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
        <h1 id="name">Trade-O-Live</h1>
    </div>
    <div id="main">
        <p><Link to='/' className="custom-link">Home</Link></p>
        <p><Link to='/about' className="custom-link">About Us</Link></p>
        <p><Link to='/contact' className="custom-link">Contact Us</Link></p>
        <p><Link to='/courses' className="custom-link">Courses</Link></p>
    </div>
    <div id={Id}>
    <p><Link to='/' className="custom-link">Home</Link></p>
        <p><Link to='/about' className="custom-link">About Us</Link></p>
        <p><Link to='/contact' className="custom-link">Contact Us</Link></p>
        <p><Link to='/courses' className="custom-link">Courses</Link></p>

           {/* <p><a onClick="reload( 'https://drive.google.com/file/d/1yYYAZlUqVoNAhTUfC3xt4-WmE5Nauu5b/view?usp=share_link')" href="Shubham_Bhole_Resume.pdf" download="">Resume</a></p> */}
        </div>
        <div onClick={dropdown} id="ham">
            <i style={{color:'azure',fontSize:'40px'}} className="fa-sharp fa-solid fa-bars"></i> 
        </div>
      {/* <img id='ham' onClick={dropdown} style={{}} src={hamburger}></img> */}
        
    </div>
    </>
  )
}


