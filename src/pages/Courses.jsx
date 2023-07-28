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
import '../styles/courses.css'

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

export const Courses=()=>{
    return (<>
    <Navbar></Navbar>
    {/* hero-image-about */}
    <div id='hero-image-courses'>
        <div id='hero-image-courses-text'>
        <p>Courses</p>
        </div>
        <div id="test"> 
        <Container data={data1} ></Container>
   </div>
    
    </div>
    <div id='free-courses'>
            <h1>Courses At Zero Cost</h1>
            <p>Kick start your trading journey with our free courses</p>
            <Carousel></Carousel>
    </div>
    <div id='premium-courses'>
            <h1>Premium Courses</h1>
            <p>Kick start your trading journey with our free courses</p>
            <Carousel></Carousel>
    </div>
   
    

   

    <Footer></Footer>
  </> 
    )


}
 

 

