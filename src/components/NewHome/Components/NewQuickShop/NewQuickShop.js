import React from 'react'
import "./NewQuickShop.css"
import { Container } from 'react-bootstrap'
import patt from "../../../../assets/HOME/partern.webp"
import { Link } from 'react-router-dom'
import health from "../../../../assets/Health & Beauty/acne-clear-face-wash-greenrootspk.com_.png"
import medicine from "../../../../assets/Medicine/Asthma-capsule.jpeg"
import Herbs from "../../../../assets/Herbs & Spices/Husne-Yousuf-100-greenrootspk.com_.png"
import essentail from "../../../../assets/Essential Oil/black-pepper-oil-greenrootspk.com_.png"
import natural from "../../../../assets/Natural Oil/almond-oil-greenrootspk.com_.png"
function NewQuickShop() {
    return (
        <div>
            <Container>
                <main className='new-quickshop my-5'>
                    <h3>Quick Shop
                        <span>
                            <img src={patt} alt="" />
                        </span>
                    </h3>
                    <div className="main_cards_image my-5   ">
                        <div className="image_cards_1">
                            <div className="image_div">
                                <Link to="https://shop.greenrootspk.com/product-category/health-beauty/">
                                    <img className="zoomable-image" src={health} alt="Health & Beauty" />
                                </Link>
                            </div>
                            <p className='my-2'>Health & Beauty</p>
                        </div>
                        <div className="image_cards_1">
                            <div className="image_div" style={{backgroundColor:'#1A5DAB'}}>
                                <Link to="https://shop.greenrootspk.com/product-category/medicines/">
                                    <img className="zoomable-image" src={medicine} alt="Health & Beauty" />
                                </Link>
                            </div>
                            <p className='my-2'>Medicines</p>
                        </div>
                        <div className="image_cards_1">
                            <div className="image_div" style={{backgroundColor:'#C6B7BB'}}>
                                <Link to="https://shop.greenrootspk.com/product-category/herbs-spices/">
                                    <img className="zoomable-image" src={Herbs} alt="Health & Beauty" />
                                </Link>
                            </div>
                            <p className='my-2'>Herbs & Spices
</p>
                        </div>
                        <div className="image_cards_1">
                            <div className="image_div" style={{backgroundColor:'#F2D46D'}}>
                                <Link to="https://shop.greenrootspk.com/product-category/essential-oils/">
                                    <img className="zoomable-image" src={essentail} alt="Health & Beauty" />
                                </Link>
                            </div>
                            <p className='my-2'>Essential Oils</p>
                        </div>
                        <div className="image_cards_1">
                            <div className="image_div" style={{backgroundColor:'#884628'}}>
                                <Link to="https://shop.greenrootspk.com/product-category/natural-oils/">
                                    <img className="zoomable-image" src={natural} alt="Health & Beauty" />
                                </Link>
                            </div>
                            <p className='my-2'>Natural Oils</p>
                        </div>
                    </div>

                </main>
            </Container>
        </div>
    )
}

export default NewQuickShop
