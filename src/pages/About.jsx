import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import {Navbar} from '../Components/Navbar'
import {Carousel} from '../Components/Carousel'
import {Footer} from '../Components/Footer'
import {Link} from 'react-router-dom';
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'



export const About=()=>{



    return (
        <>
        <Navbar></Navbar>
        <Link to='/about'></Link>
        <Footer></Footer>
      </> 
    
       )

}
 

 

