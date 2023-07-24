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
import '../styles/about.css'


export const About=()=>{

    return (
        <>
        <Navbar></Navbar>
        {/* hero-image-about */}
        <div id='hero-image-about'>
            <div id='hero-image-about-text'>
            <p>Our Story</p>
            </div>
        </div>
        {/* about us */}
        <div id='aboutus'>
            <h1>About Us</h1>
            <p>Trading as we believe, is an art that can be mastered only when the techniques are taught, learnt and applied precisely. It is a science where logic needs to be implied right and the research has to be uptight. Trading is the less discovered and seldom walked road that takes you to the most astounding and golden pinnacles that not most people reach for as they take the simpler paths.</p>
            <br/>
            <p>
              Trade-O-Live is a community by traders and for traders that wish to learn, grow and evolve in the world of stocks and investments. Incorporated in June 2021, we’re an abode of young minds and progressive thinkers that are here to share with like-minds the success formula and knowledge of money-making through stock trading and investments.
            </p>
            <br/>
            <p>
            We bring to you the most comprehensive courses and insider tips into the “money-mine”, share markets from the market expert. Helping you build a deep understanding of the market, we acquaint you with the tried and tested market mantras that will drive you to the route of financial independence and success. 
            </p>
            <img src="https://i0.wp.com/ankurwarikoo.com/wp-content/uploads/2022/05/Logo_Black_Vector.png?fit=300%2C171&ssl=1"></img> 
        </div>
        <div id='vision'>
           
            <h1>Vision</h1>
            <p>We set our foot in the industry with a vision to “Educate Trade” to people that are willing to expand and abide in the stock market in the long run. We envision to explain and make the present and future generations realise the power of the stock market and its ability to help people reach financial independence, stability and achieve growth in a time span that no other platform or field can offer. </p>
            <br/>
            <br/>
          </div>
         
          <div id='mission'>
            <h1>Mission</h1>
            <p>We set our foot in the industry with a vision to “Educate Trade” to people that are willing to expand and abide in the stock market in the long run. We envision to explain and make the present and future generations realise the power of the stock market and its ability to help people reach financial independence, stability and achieve growth in a time span that no other platform or field can offer. </p>
            <br/>
            <br/>
          </div>
        {/* same css as vision section */}
          <div id='vision'>
           
            <h1>About the Founder</h1>
            <p>The leader of our clan, the CEO and founder of Trade-O-Live, Priyanshu Shirshat is a young entrepreneur and trading enthusiast who started his journey in the days of his early teens. His pathway to financial independence through the alley of trade markets was paved by his own self. </p>
            <br/>
            <p>At the tender age of 14, when most people barely think of finances, our young monarch started his journey and set foot in the world of trading and stocks. With limited funds but ever-growing dreams and ambitions, this self-taught achiever embarked on his voyage to chase his dreams. Facing his share of failures, fighting his way through naiveness and discovering the unfathomable success opportunities of the stock market through hit and trial, research and analysis; Priyanshu finally became well acquainted with various corners of the trading world.  </p>

            <br/>
            <p>While on his journey he had another goal to build a community of trading geeks and aspirants like him to whom he could lead and take along through the venturous roads of the stock market and help them achieve triumph as well. And at the age of 18, he accomplished this mission of his too, through the incorporation of ‘Trade-O-Live’ that functions by the motto ‘Dream It Own It’ just as Priyanshu does.   </p>

            <br/>
            <p>Trade-O-Live is his medium to share with people his journey, learnings and knowledge about the share market. It is his first step towards spreading knowledge about the power of the share market. He mentors, walks along and connects with young, escalating minds like his to make the most out of the trading world and helps them know from the basics to the advanced tactics of the trade market.   </p>
            <br/>
          
           
          </div>
          <div id="mission"> <h1>Awards and Recognition</h1>
            <p>For his achievements in the field of trading and investments, the sailor of our ship, our maestro, Priyanshu received the award for the “IFA Youngest Entrepreneur In Stock Market” at the IFA Awards 2021 that was held in the month of November 2021 in Delhi. He was felicitated by the well-known cinema face Mr. Sonu Sood.  </p>
          </div>
          <br/>

    
        <Footer></Footer>
      </> 
    
       )

}
 

 

