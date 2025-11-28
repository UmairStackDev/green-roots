import React from 'react'
import './Story.css'
import Header from '../components/Header/Header'
import Headertwo from "../header/Headertwo";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Story() {
    return (

        <div className="story">
            <Header />
            <Headertwo />
            <div class="inner_banner">
                <div class="text">
                    <h1>OUR STORY </h1>

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>OUR STORY</li>
                    </ul>
                </div>
            </div>
            <section class="about py-5">

                <div class="container">

                    <div class="row">



                        <div class="col-md-12">

                            <div class="heading ">



                                <h2 class="text-bold">OUR STORY</h2>

                                <div class="bar"></div>

                            </div>

                            <div class="parah">

                                <p> We strive to provide everything under one roof. We welcome everyone with open arms to the world of herbs and naturopathy.
                                    Pioneering the Future of Beauty we have 100% organic/herbal products for body, skin and hair. Our brand embodies the promise of keeping it all-natural, respecting both the environment and the welfare of animals. </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            <Footer />
        </div>
    )
}

export default Story
