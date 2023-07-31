import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import React, { useRef } from 'react';
import {Navbar} from '../Components/Navbar'
import {Footer} from '../Components/Footer'
import call from '../assets/call.png'
import bookus from '../assets/appointment.png'
import email from '../assets/email.png'

import '../styles/booknow.css'



export const BookNow=()=>{
    return (<>
    <Navbar></Navbar>
    {/* hero-image-about */}
    <div id='hero-image-book'>
        <div id='hero-image-courses-text'>
        <p>Book Now</p>
        </div>
        <div id="test"> 
        {/* <Container data={data1} ></Container> */}
   </div>
    
    </div>
    <div id='contact-book'>
        <div>
            <h1>Contact Us</h1>
            {/* Call us */}
            {/* Email us */}
            {/* Book and Appointment */}
            {/* <p>Level Up Your Trading Game With Our Daily Content</p> */}
            <br/>
            

<div id='icons-book'>
    <img onClick={()=>{window.open('https://www.youtube.com/', '_blank')}} id='Youtube' src={call}></img>
    <img id='Instagram' src={email}></img>    
    <img id='Twitter' src={bookus}></img>
    <h2>Call Us</h2>
    <h2>Email</h2>
    <h2>Book an Appointment</h2>
    
</div>
          
            <br/>
        </div>
    </div>
    <Footer></Footer>
  </> 
    )


}
 

 

