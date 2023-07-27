import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import React, { useRef } from 'react';
import {Navbar} from '../Components/Navbar'
import {Carousel} from '../Components/Carousel'
import {Footer} from '../Components/Footer'
import {Link} from 'react-router-dom';
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'
import '../styles/contact.css'


export const Contact=()=>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>
        <Navbar></Navbar>
        {/* hero-image-contact */}
        <div id="hero-image-contact">
        <div id='hero-image-contact-text'>
            <p>Contact Us</p>
        </div>
        <div id="formus">
        <form className="form-container" ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
        </div>
        </div>
        <div id='contact'>
        <div>
            <h1>Follow us on Social Media</h1>
            <p>Level Up Your Trading Game With Our Daily Content</p>
            <br/>
            

<div id='icons-contact'>
    <img onClick={()=>{window.open('https://www.youtube.com/', '_blank')}} id='Youtube' src={youtube}></img>
    <img id='Instagram' src={instagram}></img>

    
    <img id='Twitter' src={twitter}></img>
    <img id='LinkedIn' src={linkedin}></img>
    <img id='Facebook' src={facebook}></img>
    <h2>Youtube</h2>
    <h2>Instagram</h2>
    <h2>Twitter</h2>
    <h2>LinkedIn</h2>
    <h2>Facebook</h2>
</div>
          
            <br/>
        </div>
        </div>
        <Footer></Footer>
      </> 
    
       )

}
 

 

