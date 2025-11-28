import React from 'react'
import './Vison.css'
import Header from '../components/Header/Header'
import Headertwo from "../header/Headertwo";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Vison() {
    return (

        <div className="Vison">
            <Header />
            <Headertwo />
            <div class="inner_banner">
                <div class="text">
                    <h1>OUR VISION </h1>

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>OUR VISION</li>
                    </ul>
                </div>
            </div>
            <section class="about py-5">

                <div class="container">

                    <div class="row">



                        <div class="col-md-12">

                            <div class="heading ">



                                <h2 class="text-bold">OUR VISION</h2>

                                <div class="bar"></div>

                            </div>

                            <div class="parah">

                                <p> Quality and safety are at the core of our manufacturing processes. Our manufacturing premises hold certifications ensuring the consistent production of high-quality, safe, and effective beauty products.
                                    We have successfully set a new standard in the Pakistani natural and organic hair and skincare market, along with medical products.
                                    A Journey of Growth and Excellence - We have been recognised across the globe for our successful medical journey and our commitment towards our patients and customers.
                                    Celebrating Achievements - Our journey has been marked by significant milestones, including certifications and global recognition. </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            <Footer />
        </div>
    )
}

export default Vison
