import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import '../styles/home.css';
import {Navbar} from '../Components/Navbar'
import {Carousel} from '../Components/Carousel'
import {Footer} from '../Components/Footer'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'



export const Home=()=>{



    return (
        <>
        <Navbar></Navbar>
        <div id='hero-image'>
            <div id='hero-image-text'>
            <p>Trade with</p>
            <p>Risk Management</p>
            <p>Learn Trading is a manner which you have never learned before with proper Risk management Techniques</p>
            </div>
        </div>
        <div id='author'>
            <h1>priyanshoo shirsat</h1>
          
            <p>Trade-O-Live is a community by traders and for traders that wish to learn, grow and evolve in the world of stocks and investments. Incorporated in June 2021, we’re an abode of young minds and progressive thinkers that are here to share with like-minds the success formula and knowledge of money-making through stock trading and investments.</p>
            <img src="https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/05/Logo_Black_Vector.png?fit=300%2C171&ssl=1"></img> 

        </div>
        <div id='social-media'>
            <h1 style={{paddingTop:'2%'}}>Find Us On</h1>
            <p>Trade-O-Live has a strong community of 1000+ followers across all social media platforms</p>
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
            <p>Get started with your trading journey with our knowledged packed courses</p>
            <Carousel></Carousel> 
        </div>
        <Footer></Footer>
      </> 
    
       )

}
 

 

