import React from 'react'
import './About.css'
import Header from '../components/Header/Header'
import Headertwo from "../header/Headertwo";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function About() {
  return (
    
    <div>
       <Header />
          <Headertwo/>
          <div class="inner_banner">
            <div class="text">
                <h1>ABOUT US</h1>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>ABOUT US</li>
                </ul>
            </div>
        </div>
      <section class="about py-5">

<div class="container">

    <div class="row">
   
   

        <div class="col-md-12">

            <div class="heading ">



                <h2 class="text-bold">ABOUT US</h2>

                <div class="bar"></div>

            </div>

            <div class="parah">

                <p> In all these years <b> Green Roots </b> has formulated a vast range of over 200 products & treatments for almost every known disease to mankind. We are also proud to be one of the very few global distributors of herbs & spices, essential oils under one roof, with an immaculate track record & guaranteed quality.</p>

            </div>

        </div>

    </div>

</div>

</section>
<Footer/>
    </div>
  )
}

export default About
