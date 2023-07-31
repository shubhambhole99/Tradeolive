import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import React, { useRef } from 'react';
import {Navbar} from '../Components/Navbar'
import {Carousel} from '../Components/Carousel'
import {Footer} from '../Components/Footer'
import { Container } from "../Components/Container";
import {Link} from 'react-router-dom';
import students from '../assets/students.png'
import pt from '../assets/personal-trainer.png'
import complete from '../assets/completed-task.png'
import courses from '../assets/courses.png'
import '../styles/booknow.css'

const data1=[
    {   id:1,
        name:"10K+",
        description:"Online Learners",
        img:students
    },
    {   id:2,
        name:"25K+",
        description:"Satisfied Students",
        img:complete
    },
    {
        id:4,
        name:"20+",
        description:"Instructors",
        img:pt
    },
    {
        id:5,
        name:"10+",
        description:"Courses",
        img:courses
    }
   
   
]

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
    <div id='contact'>
        <div>
            <h1>Contact Us</h1>
            {/* Call us */}
            {/* Email us */}
            {/* Book and Appointment */}
            <p>Level Up Your Trading Game With Our Daily Content</p>
            <br/>
            

{/* <div id='icons-contact'>
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
</div> */}
          
            <br/>
        </div>
    </div>
    <Footer></Footer>
  </> 
    )


}
 

 

