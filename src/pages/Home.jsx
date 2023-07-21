import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import {Navbar} from '../Components/Navbar'
import {Carousel} from '../Components/Carousel'



export const Home=()=>{
    return (
        <>
        <Navbar></Navbar>
        <div id='hero-image'>
            <div id='hero-image-text'>
            <p>Trade with</p>
            <p>Risk Management</p>
            <p>Learn Trading is a manner which you have never learned before<br/>with proper Risk management Techniques</p>
            </div>
        </div>
        <div id='author'>
            <h1>priyanshoo shirsat</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia recusandae, iste, qui commodi sunt a, eaque consequuntur quibusdam perspiciatis odio deleniti dolor. Tempora maxime expedita neque dolor ea iure quod.</p>
        </div>
        <div id='social-media'>
            <h1 style={{paddingTop:'2%'}}>Find Us On</h1>
            <p>priyanshoo shirsat has a strong community of 1000+ followers across all social media platforms</p>
            <div id='icons'>
                <img id='Youtube' src="src/assets/youtube.png"></img>
                <img id='Instagram' src="src/assets/instagram.png"></img>
                <img id='Twitter' src="src/assets/twitter.png"></img>
                <img id='LinkedIn' src="src/assets/linkedin.png"></img>
                <img id='Facebook' src="src/assets/facebook.png"></img>
                <h2>Youtube</h2>
                <h2>Instagram</h2>
                <h2>Twitter</h2>
                <h2>LinkedIn</h2>
                <h2>Facebook</h2>
            </div>
        </div>
        <div id='courses'>
            <p>Courses</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, dicta minima provident eveniet sunt sed praesentium voluptatem</p>
            {/* Will convert to Map Later */}
          
            <Carousel></Carousel> 
   
      </div>
     
      </> 
    
       )

}
 

 

