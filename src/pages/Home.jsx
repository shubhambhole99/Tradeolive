import { useState } from 'react'

import '../App.css'
import {Navbar} from '../Components/Navbar'


export const Home=()=>{
    return (
        <>
        <Navbar></Navbar>
        <div id='hero-image'>
            <div id='hero-image-text'>
            <p>Trade with</p>
            <p>Risk-Management</p>
            <p>Learn Trading is a manner which you have never learned before<br/>with proper Risk management Techniques</p>
            </div>
        </div>
        <div id='author'>
            <h1>priyanshoo shirsat</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia recusandae, iste, qui commodi sunt a, eaque consequuntur quibusdam perspiciatis odio deleniti dolor. Tempora maxime expedita neque dolor ea iure quod.</p>
        </div>
        <div id='social-media'>
            <h1>Find Us on</h1>
            <p>priyanshoo shirsat has a strong community of 1000+ followers across all social media platforms</p>
        </div>
        </>
       )
}
 

 

