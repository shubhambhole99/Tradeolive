import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import {Navbar} from '../Components/Navbar'
import {Carousel} from '../Components/Carousel'
import {Footer} from '../Components/Footer'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'



export const Home=()=>{
  const id='ham'


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
            <img src="https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/05/Logo_Black_Vector.png?fit=300%2C171&ssl=1"></img> 

        </div>
        <div id='social-media'>
            <h1 style={{paddingTop:'2%'}}>Find Us On</h1>
            <p>priyanshoo shirsat has a strong community of 1000+ followers across all social media platforms</p>
            <div id='icons'>
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
        </div>
        <div id='courses'>
            <p>Courses</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, dicta minima provident eveniet sunt sed praesentium voluptatem</p>
            <Carousel></Carousel> 
        </div>
        <Footer></Footer>
      </> 
    
       )

}
 

 

