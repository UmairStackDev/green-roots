import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import "./SingleProductDetailsfour.css";
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../../features/cartSlice";

function SingleProductDetailsfour() {
    const { id } = useParams();
    const medicineProductMainItems = useSelector((state) => state.allCart.medicineProductMainItems);
    const item = medicineProductMainItems.find((p) => p.id === parseInt(id, 10));

    const dispatch = useDispatch();
    const [cartCount, setCartCount] = useState(1);

    if (!item) {
        return <div>Product not found!</div>;
    }


    const handleIncrease = () => {
        setCartCount(cartCount + 1);
    };

    const handleDecrease = () => {
        if (cartCount > 0) {
            setCartCount(cartCount - 1);
        }
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ ...item, quantity: cartCount }));
    };

    return (
        <div className='singleproduct'>
            <Navbar />
            <Container>
                <Row>
                    <Col md={12} >
                        <Link to="" className='home_pro'>Home</Link> &nbsp; / &nbsp;
                        <span>Health & Beauty </span>

                    </Col>

                    <div className="main_product my-5">
                        <div className="heading_product my-5">
                            <h1>{item.title}</h1>
                            <div className="rating_product">
                                <ul>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li>0 Customer Reviews</li>
                                </ul>
                            </div>
                        </div>

                        <div className="main_images_producy">

                            <div className="image ">
                                <img src={item.img} alt="" style={{ width: "auto", height: "300px", }} />
                            </div>

                            <div className="contents ">
                                <div className="content_prices ">
                                    <h2 className='price ' style={{ color: "red", }}>₨ {item.price}</h2>
                                    <p className='discription '>{item.dis}</p>
                                    <h2 className='availablitiy'>{item.Availability} <span>{item.Availability1}</span>  </h2>
                                    {/* <div className="whishlist my-3">
            <i class="fa-regular fa-heart" style={{ fontSize: "16px" }}></i> <span>Add to wishlist</span>
        </div> */}

                                </div>
                                <div className="cotogory my-3">
                                    <h3 className='my-2'>{item.SKU}<span>{item.SKU1}</span></h3>
                                    <h3 className='my-2'>Category:<span>{item.Category}</span></h3>
                                    <h3 className='my-2'>{item.Tags}<span style={{ fontSize: "12px" }}>{item.Tags1}</span></h3>
                                    <div>

                                        <div className="main_button_add d-flex gap-4 my-3">
                                            <div className="main_button_ d-flex gap-3 align-items-center">
                                                <button style={{ padding: '0px', background: 'none' }} onClick={handleIncrease}><i class="fa-solid fa-arrow-up" style={{ color: "#000" }}></i></button>
                                                <p> {cartCount}</p>
                                                <button onClick={handleDecrease} style={{ padding: '0px', background: 'none' }}  ><i class="fa-solid fa-arrow-down" style={{ color: "#000" }}></i></button>

                                            </div>

                                            <button onClick={handleAddToCart}>Add to Cart</button>

                                            {/* <button onClick={() => dispatch(addToCart({ ...item, quantity: cartCount }))}>
Add to Cart
</button> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="main_product main_product_1">
                        <h2 className='benifits'>{item.PilexCapsules}</h2>
                        <h2 className='benifits'>{item.PilexCapsulesBenefits}</h2>
                        <ul className='ul_benifits'>
                            <li>{item.PilexCapsulesBenefits1}</li>
                            <li>{item.PilexCapsulesBenefits2}</li>
                            <li>{item.PilexCapsulesBenefits3}</li>
                            <li>{item.PilexCapsulesBenefits4}</li>
                            <li>{item.PilexCapsulesBenefits5}</li>
                            <li>{item.PilexCapsulesBenefits6}</li>
                            <li>{item.PilexCapsulesBenefits7}</li>
                            <li>{item.PilexCapsulesBenefits8}</li>
                            <li>{item.PilexCapsulesBenefits9}</li>
                            <li>{item.PilexCapsulesBenefits10}</li>
                            <li>{item.PilexCapsulesBenefits11}</li>
                            <li>{item.PilexCapsulesBenefits12}</li>
                        </ul>

                        <h2 className='benifits'>{item.PilexCapsulesIngredients}</h2>

                        <ul className='ul_benifits'>
                            <li>{item.PilexCapsulesIngredients1}</li>
                            <li>{item.PilexCapsulesIngredients2}</li>
                            <li>{item.PilexCapsulesIngredients3}</li>
                            <li>{item.PilexCapsulesIngredients4}</li>
                            <li>{item.PilexCapsulesIngredients5}</li>
                            <li>{item.PilexCapsulesIngredients6}</li>
                            <li>{item.PilexCapsulesIngredients7}</li>
                            <li>{item.PilexCapsulesIngredients8}</li>
                            <li>{item.PilexCapsulesIngredients9}</li>
                            <li>{item.PilexCapsulesIngredients10}</li>
                            <li>{item.PilexCapsulesIngredients11}</li>
                            <li>{item.PilexCapsulesIngredients12}</li>
                        </ul>

                        <h2 className='benifits'>{item.PilexCapsulesUsage}</h2>

                        <ul className='ul_benifits'>
                            <li>{item.PilexCapsulesUsage1}</li>
                            <li>{item.PilexCapsulesUsage2}</li>
                            <li>{item.PilexCapsulesUsage3}</li>
                            <li>{item.PilexCapsulesUsage4}</li>
                            <li>{item.PilexCapsulesUsage5}</li>
                            <li>{item.PilexCapsulesUsage6}</li>
                            <li>{item.PilexCapsulesUsage7}</li>
                            <li>{item.PilexCapsulesUsage8}</li>
                            <li>{item.PilexCapsulesUsage9}</li>
                            <li>{item.PilexCapsulesUsage10}</li>
                            <li>{item.PilexCapsulesUsage11}</li>
                            <li>{item.PilexCapsulesUsage12}</li>
                        </ul>


                        <h2 className='benifits'>{item.HemorrhoidsOil}</h2>
                        <h2 className='benifits'>{item.HemorrhoidsOilHemorrhoidsOilHemorrhoidsOilBenefits}</h2>

                        <ul className='ul_benifits'>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilBenefits1}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilBenefits2}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilBenefits3}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilBenefits4}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilBenefits5}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilBenefits6}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilBenefits7}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilBenefits8}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilBenefits9}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilBenefits10}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilBenefits11}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilBenefits12}</li>
                        </ul>

                        <h2 className='benifits'>{item.HemorrhoidsOilHemorrhoidsOilIngredients}</h2>

                        <ul className='ul_benifits'>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilIngredients1}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilIngredients2}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilIngredients3}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilIngredients4}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilIngredients5}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilIngredients6}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilIngredients7}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilIngredients8}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilIngredients9}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilIngredients10}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilIngredients11}</li>
                            <li>{item.HemorrhoidsOilHemorrhoidsOilIngredients12}</li>
                        </ul>

                        <h2 className='benifits'>{item.HemorrhoidsOilUsage}</h2>

                        <ul className='ul_benifits'>
                            <li>{item.HemorrhoidsOilUsage1}</li>
                            <li>{item.HemorrhoidsOilUsage2}</li>
                            <li>{item.HemorrhoidsOilUsage3}</li>
                            <li>{item.HemorrhoidsOilUsage4}</li>
                            <li>{item.HemorrhoidsOilUsage5}</li>
                            <li>{item.HemorrhoidsOilUsage6}</li>
                            <li>{item.HemorrhoidsOilUsage7}</li>
                            <li>{item.HemorrhoidsOilUsage8}</li>
                            <li>{item.HemorrhoidsOilUsage9}</li>
                            <li>{item.HemorrhoidsOilUsage10}</li>
                            <li>{item.HemorrhoidsOilUsage11}</li>
                            <li>{item.HemorrhoidsOilUsage12}</li>
                        </ul>

                        <h2 className='benifits'>{item.PsoriasisCapsules}</h2>
                        <h2 className='benifits'>{item.PsoriasisCapsulesBenefits}</h2>
                        <ul className='ul_benifits'>
                            <li>{item.PsoriasisCapsulesBenefits1}</li>
                            <li>{item.PsoriasisCapsulesBenefits2}</li>
                            <li>{item.PsoriasisCapsulesBenefits3}</li>
                            <li>{item.PsoriasisCapsulesBenefits4}</li>
                            <li>{item.PsoriasisCapsulesBenefits5}</li>
                            <li>{item.PsoriasisCapsulesBenefits6}</li>
                            <li>{item.PsoriasisCapsulesBenefits7}</li>
                            <li>{item.PsoriasisCapsulesBenefits8}</li>
                            <li>{item.PsoriasisCapsulesBenefits9}</li>
                            <li>{item.PsoriasisCapsulesBenefits10}</li>
                            <li>{item.PsoriasisCapsulesBenefits11}</li>
                            <li>{item.PsoriasisCapsulesBenefits12}</li>
                        </ul>

                        <h2 className='benifits'>{item.PsoriasisCapsulesIngredients}</h2>

                        <ul className='ul_benifits'>
                            <li>{item.PsoriasisCapsulesIngredients1}</li>
                            <li>{item.PsoriasisCapsulesIngredients2}</li>
                            <li>{item.PsoriasisCapsulesIngredients3}</li>
                            <li>{item.PsoriasisCapsulesIngredients4}</li>
                            <li>{item.PsoriasisCapsulesIngredients5}</li>
                            <li>{item.PsoriasisCapsulesIngredients6}</li>
                            <li>{item.PsoriasisCapsulesIngredients7}</li>
                            <li>{item.PsoriasisCapsulesIngredients8}</li>
                            <li>{item.PsoriasisCapsulesIngredients9}</li>
                            <li>{item.PsoriasisCapsulesIngredients10}</li>
                            <li>{item.PsoriasisCapsulesIngredients11}</li>
                            <li>{item.PsoriasisCapsulesIngredients12}</li>
                        </ul>

                        <h2 className='benifits'>{item.PsoriasisCapsulesDosage}</h2>

                        <ul className='ul_benifits'>
                            <li>{item.PsoriasisCapsulesDosage1}</li>
                            <li>{item.PsoriasisCapsulesDosage2}</li>
                            <li>{item.PsoriasisCapsulesDosage3}</li>
                            <li>{item.PsoriasisCapsulesDosage4}</li>
                            <li>{item.PsoriasisCapsulesDosage5}</li>
                            <li>{item.PsoriasisCapsulesDosage6}</li>
                            <li>{item.PsoriasisCapsulesDosage7}</li>
                            <li>{item.PsoriasisCapsulesDosage8}</li>
                            <li>{item.PsoriasisCapsulesDosage9}</li>
                            <li>{item.PsoriasisCapsulesDosage10}</li>
                            <li>{item.PsoriasisCapsulesDosage11}</li>
                            <li>{item.PsoriasisCapsulesDosage12}</li>
                        </ul>
                        <h2 className='benifits'>{item.EczemaCapsules}</h2>
                        <h2 className='benifits'>{item.EczemaCapsulesBenefits}</h2>
                        <ul className='ul_benifits'>
                            <li>{item.EczemaCapsulesBenefits1}</li>
                            <li>{item.EczemaCapsulesBenefits2}</li>
                            <li>{item.EczemaCapsulesBenefits3}</li>
                            <li>{item.EczemaCapsulesBenefits4}</li>
                            <li>{item.EczemaCapsulesBenefits5}</li>
                            <li>{item.EczemaCapsulesBenefits6}</li>
                            <li>{item.EczemaCapsulesBenefits7}</li>
                            <li>{item.EczemaCapsulesBenefits8}</li>
                            <li>{item.EczemaCapsulesBenefits9}</li>
                            <li>{item.EczemaCapsulesBenefits10}</li>
                            <li>{item.EczemaCapsulesBenefits11}</li>
                            <li>{item.EczemaCapsulesBenefits12}</li>
                        </ul>
                        <h2 className='benifits'>{item.EczemaCapsulesIngredients}</h2>
                        <ul className='ul_benifits'>
                            <li>{item.EczemaCapsulesIngredients1}</li>
                            <li>{item.EczemaCapsulesIngredients2}</li>
                            <li>{item.EczemaCapsulesIngredients3}</li>
                            <li>{item.EczemaCapsulesIngredients4}</li>
                            <li>{item.EczemaCapsulesIngredients5}</li>
                            <li>{item.EczemaCapsulesIngredients6}</li>
                            <li>{item.EczemaCapsulesIngredients7}</li>
                            <li>{item.EczemaCapsulesIngredients8}</li>
                            <li>{item.EczemaCapsulesIngredients9}</li>
                            <li>{item.EczemaCapsulesIngredients10}</li>
                            <li>{item.EczemaCapsulesIngredients11}</li>
                            <li>{item.EczemaCapsulesIngredients12}</li>
                        </ul>

                        <h2 className='benifits'>{item.Dosage}</h2>
                        <ul className='ul_benifits'>
                            <li>{item.Dosage1}</li>
                            <li>{item.Dosage2}</li>
                            <li>{item.Dosage3}</li>
                            <li>{item.Dosage4}</li>
                            <li>{item.Dosage5}</li>
                            <li>{item.Dosage6}</li>
                            <li>{item.Dosage7}</li>
                            <li>{item.Dosage8}</li>
                            <li>{item.Dosage9}</li>
                            <li>{item.Dosage10}</li>
                            <li>{item.Dosage11}</li>
                            <li>{item.Dosage12}</li>
                        </ul>



                        <h2 className='benifits'>{item.EczemaVaseline}</h2>
                        <h2 className='benifits'>{item.EczemaVaselineBenefits}</h2>
                        <ul className='ul_benifits'>
                            <li>{item.EczemaVaselineBenefits1}</li>
                            <li>{item.EczemaVaselineBenefits2}</li>
                            <li>{item.EczemaVaselineBenefits3}</li>
                            <li>{item.EczemaVaselineBenefits4}</li>
                            <li>{item.EczemaVaselineBenefits5}</li>
                            <li>{item.EczemaVaselineBenefits6}</li>
                            {/* <li>{item.EczemaVaselineBenefits7}</li>
<li>{item.EczemaVaselineBenefits8}</li>
<li>{item.EczemaVaselineBenefits9}</li>
<li>{item.EczemaVaselineBenefits10}</li>
<li>{item.EczemaVaselineBenefits11}</li>
<li>{item.EczemaVaselineBenefits12}</li> */}
                        </ul>

                        <h2 className='benifits'>{item.EczemaVaselineIngredients}</h2>
                        <ul className='ul_benifits'>
                            <li>{item.EczemaVaselineIngredients1}</li>
                            <li>{item.EczemaVaselineIngredients2}</li>
                            <li>{item.EczemaVaselineIngredients3}</li>
                            <li>{item.EczemaVaselineIngredients4}</li>
                            {/* <li>{item.EczemaVaselineIngredients5}</li>
<li>{item.EczemaVaselineIngredients6}</li>
<li>{item.EczemaVaselineIngredients7}</li>
<li>{item.EczemaVaselineIngredients8}</li>
<li>{item.EczemaVaselineIngredients9}</li>
<li>{item.EczemaVaselineIngredients10}</li>
<li>{item.EczemaVaselineIngredients11}</li>
<li>{item.EczemaVaselineIngredients12}</li> */}
                        </ul>

                        <h2 className='benifits'>{item.EczemaVaselineUsage}</h2>
                        <ul className='ul_benifits'>
                            <li>{item.EczemaVaselineUsage1}</li>
                            <li>{item.EczemaVaselineUsage2}</li>
                            {/* <li>{item.EczemaVaselineUsage3}</li>
<li>{item.EczemaVaselineUsage4}</li>
<li>{item.EczemaVaselineUsage5}</li>
<li>{item.EczemaVaselineUsage6}</li>
<li>{item.EczemaVaselineUsage7}</li>
<li>{item.EczemaVaselineUsage8}</li>
<li>{item.EczemaVaselineUsage9}</li>
<li>{item.EczemaVaselineUsage10}</li>
<li>{item.EczemaVaselineUsage11}</li>
<li>{item.EczemaVaselineUsage12}</li> */}
                        </ul>
                        <h2 className='benifits'>{item.Benefits}</h2>
                        <ul className='ul_benifits'>
                            <li>{item.Benefits1}</li>
                            <li>{item.Benefits2}</li>
                            <li>{item.Benefits3}</li>
                            <li>{item.Benefits4}</li>
                            <li>{item.Benefits5}</li>
                            <li>{item.Benefits6}</li>
                            <li>{item.Benefits7}</li>
                            <li>{item.Benefits8}</li>
                            <li>{item.Benefits9}</li>
                            <li>{item.Benefits10}</li>
                            <li>{item.Benefits11}</li>
                            <li>{item.Benefits12}</li>
                            <li>{item.Benefits13}</li>
                            <li>{item.Benefits14}</li>
                            <li>{item.Benefits15}</li>
                            <li>{item.Benefits16}</li>
                            <li>{item.Benefits17}</li>
                            <li>{item.Benefits18}</li>
                            <li>{item.Benefits19}</li>
                            <li>{item.Benefits20}</li>
                            <li>{item.Benefits21}</li>
                            <li>{item.Benefits22}</li>
                            <li>{item.Benefits23}</li>
                            <li>{item.Benefits24}</li>
                            <li>{item.Benefits25}</li>
                            <li>{item.Benefits26}</li>

                            <li>{item.Benefits27}</li>
                            <li>{item.Benefits28}</li>
                            <li>{item.Benefits29}</li>
                            <li>{item.Benefits30}</li>
                            <li>{item.Benefits31}</li>
                            <li>{item.Benefits32}</li>
                            <li>{item.Benefits33}</li>
                            <li>{item.Benefits34}</li>

                            <li>{item.Benefits35}</li>
                        </ul>
                        <div className="use my-3">
                            <h2 className='Usage'>{item.Usage}</h2>
                            <ul className='ul_benifits'>
                                <li>{item.Usage1}</li>
                                <li>{item.Usage2}</li>
                                <li>{item.Usage3}</li>
                                <li>{item.Usage4}</li>
                                <li>{item.Usage5}</li>
                                <li>{item.Usage6}</li>
                                <li>{item.Usage7}</li>
                                <li>{item.Usage8}</li>
                                <li>{item.Usage9}</li>
                                <li>{item.Usage10}</li>
                                <li>{item.Usage11}</li>
                                <li>{item.Usage12}</li>
                                <li>{item.Usage13}</li>
                                <li>{item.Usage14}</li>
                                <li>{item.Usage15}</li>
                                <li>{item.Usage16}</li>
                                <li>{item.Usage17}</li>
                                <li>{item.Usage18}</li>
                                <li>{item.Usage19}</li>
                                <li>{item.Usage20}</li>
                                <li>{item.Usage21}</li>
                                <li>{item.Usage22}</li>
                                <li>{item.Usage23}</li>
                                <li>{item.Usage24}</li>
                                <li>{item.Usage25}</li>
                                <li>{item.Usage26}</li>
                                <li>{item.Usage27}</li>
                                <li>{item.Usage28}</li>


                            </ul>
                        </div>
                        <div className="use my-3">
                            <h2 className='Usage'>{item.UsageofPiloxMB}</h2>
                            <ul className='ul_benifits'>
                                <li>{item.UsageofPiloxMB1}</li>
                                <li>{item.UsageofPiloxMB2}</li>
                                <li>{item.UsageofPiloxMB3}</li>
                                <li>{item.UsageofPiloxMB4}</li>
                                <li>{item.UsageofPiloxMB5}</li>
                                <li>{item.UsageofPiloxMB6}</li>
                                <li>{item.UsageofPiloxMB7}</li>
                                <li>{item.UsageofPiloxMB8}</li>
                                <li>{item.UsageofPiloxMB9}</li>
                                <li>{item.UsageofPiloxMB10}</li>
                                <li>{item.UsageofPiloxMB11}</li>
                                <li>{item.UsageofPiloxMB12}</li>
                                <li>{item.UsageofPiloxMB13}</li>
                                <li>{item.UsageofPiloxMB14}</li>
                                <li>{item.UsageofPiloxMB15}</li>
                                <li>{item.UsageofPiloxMB16}</li>
                                <li>{item.UsageofPiloxMB17}</li>
                                <li>{item.UsageofPiloxMB18}</li>
                                <li>{item.UsageofPiloxMB19}</li>
                                <li>{item.UsageofPiloxMB20}</li>
                                <li>{item.UsageofPiloxMB21}</li>
                                <li>{item.UsageofPiloxMB22}</li>
                                <li>{item.UsageofPiloxMB23}</li>
                                <li>{item.UsageofPiloxMB24}</li>
                                <li>{item.UsageofPiloxMB25}</li>
                                <li>{item.UsageofPiloxMB26}</li>
                                <li>{item.UsageofPiloxMB27}</li>
                                <li>{item.UsageofPiloxMB28}</li>


                            </ul>
                        </div>
                        <div className="use my-3">
                            <h2 className='Usage'>{item.UsageofPiloxN}</h2>
                            <ul className='ul_benifits'>
                                <li>{item.UsageofPiloxN1}</li>
                                <li>{item.UsageofPiloxN2}</li>
                                <li>{item.UsageofPiloxN3}</li>
                                <li>{item.UsageofPiloxN4}</li>
                                <li>{item.UsageofPiloxN5}</li>
                                <li>{item.UsageofPiloxN6}</li>
                                <li>{item.UsageofPiloxN7}</li>
                                <li>{item.UsageofPiloxN8}</li>
                                <li>{item.UsageofPiloxN9}</li>
                                <li>{item.UsageofPiloxN10}</li>
                                <li>{item.UsageofPiloxN11}</li>
                                <li>{item.UsageofPiloxN12}</li>
                                <li>{item.UsageofPiloxN13}</li>
                                <li>{item.UsageofPiloxN14}</li>
                                <li>{item.UsageofPiloxN15}</li>
                                <li>{item.UsageofPiloxN16}</li>
                                <li>{item.UsageofPiloxN17}</li>
                                <li>{item.UsageofPiloxN18}</li>
                                <li>{item.UsageofPiloxN19}</li>
                                <li>{item.UsageofPiloxN20}</li>
                                <li>{item.UsageofPiloxN21}</li>
                                <li>{item.UsageofPiloxN22}</li>
                                <li>{item.UsageofPiloxN23}</li>
                                <li>{item.UsageofPiloxN24}</li>
                                <li>{item.UsageofPiloxN25}</li>
                                <li>{item.UsageofPiloxN26}</li>
                                <li>{item.UsageofPiloxN27}</li>
                                <li>{item.UsageofPiloxN28}</li>


                            </ul>
                        </div>
                        <div className="use my-3">
                            <h2 className='Usage'>{item.PiloxMBIngredients}</h2>
                            <ul className='ul_benifits'>
                                <li>{item.PiloxMBIngredients1}</li>
                                <li>{item.PiloxMBIngredients2}</li>
                                <li>{item.PiloxMBIngredients3}</li>
                                <li>{item.PiloxMBIngredients4}</li>
                                <li>{item.PiloxMBIngredients5}</li>
                                <li>{item.PiloxMBIngredients6}</li>
                                <li>{item.PiloxMBIngredients7}</li>
                                <li>{item.PiloxMBIngredients8}</li>
                                <li>{item.PiloxMBIngredients9}</li>
                                <li>{item.PiloxMBIngredients10}</li>
                                <li>{item.PiloxMBIngredients11}</li>
                                <li>{item.PiloxMBIngredients12}</li>
                                <li>{item.PiloxMBIngredients13}</li>
                                <li>{item.PiloxMBIngredients14}</li>
                                <li>{item.PiloxMBIngredients15}</li>
                                <li>{item.PiloxMBIngredients16}</li>
                                <li>{item.PiloxMBIngredients17}</li>
                                <li>{item.PiloxMBIngredients18}</li>
                                <li>{item.PiloxMBIngredients19}</li>
                                <li>{item.PiloxMBIngredients20}</li>
                                <li>{item.PiloxMBIngredients21}</li>
                                <li>{item.PiloxMBIngredients22}</li>
                                <li>{item.PiloxMBIngredients23}</li>
                                <li>{item.PiloxMBIngredients24}</li>
                                <li>{item.PiloxMBIngredients25}</li>
                                <li>{item.PiloxMBIngredients26}</li>
                                <li>{item.PiloxMBIngredients27}</li>
                                <li>{item.PiloxMBIngredients28}</li>


                            </ul>
                        </div>
                        <div className="use my-3">
                            <h2 className='Usage'>{item.PiloxNIngredients}</h2>
                            <ul className='ul_benifits'>
                                <li>{item.PiloxNIngredients1}</li>
                                <li>{item.PiloxNIngredients2}</li>
                                <li>{item.PiloxNIngredients3}</li>
                                <li>{item.PiloxNIngredients4}</li>
                                <li>{item.PiloxNIngredients5}</li>
                                <li>{item.PiloxNIngredients6}</li>
                                <li>{item.PiloxNIngredients7}</li>
                                <li>{item.PiloxNIngredients8}</li>
                                <li>{item.PiloxNIngredients9}</li>
                                <li>{item.PiloxNIngredients10}</li>
                                <li>{item.PiloxNIngredients11}</li>
                                <li>{item.PiloxNIngredients12}</li>
                                <li>{item.PiloxNIngredients13}</li>
                                <li>{item.PiloxNIngredients14}</li>
                                <li>{item.PiloxNIngredients15}</li>
                                <li>{item.PiloxNIngredients16}</li>
                                <li>{item.PiloxNIngredients17}</li>
                                <li>{item.PiloxNIngredients18}</li>
                                <li>{item.PiloxNIngredients19}</li>
                                <li>{item.PiloxNIngredients20}</li>
                                <li>{item.PiloxNIngredients21}</li>
                                <li>{item.PiloxNIngredients22}</li>
                                <li>{item.PiloxNIngredients23}</li>
                                <li>{item.PiloxNIngredients24}</li>
                                <li>{item.PiloxNIngredients25}</li>
                                <li>{item.PiloxNIngredients26}</li>
                                <li>{item.PiloxNIngredients27}</li>
                                <li>{item.PiloxNIngredients28}</li>


                            </ul>
                        </div>
                        <div className="use my-3">
                            <h2 className='Ingredients'>{item.UsageofVIRILITYDSCapsules}</h2>
                            <ul className='ul_benifits'>
                                <li>{item.UsageofVIRILITYDSCapsules1}</li>
                                <li>{item.UsageofVIRILITYDSCapsules2}</li>
                                <li>{item.UsageofVIRILITYDSCapsules3}</li>
                                <li>{item.UsageofVIRILITYDSCapsules4}</li>
                                <li>{item.UsageofVIRILITYDSCapsules5}</li>
                                <li>{item.UsageofVIRILITYDSCapsules6}</li>
                                <li>{item.UsageofVIRILITYDSCapsules7}</li>
                                <li>{item.UsageofVIRILITYDSCapsules8}</li>
                                <li>{item.UsageofVIRILITYDSCapsules9}</li>
                                <li>{item.UsageofVIRILITYDSCapsules10}</li>
                            </ul>
                        </div>
                        <div className="use my-3">
                            <h2 className='Ingredients'>{item.UsageofVIGROLXL}</h2>
                            <ul className='ul_benifits'>
                                <li>{item.UsageofVIGROLXL1}</li>
                                <li>{item.UsageofVIGROLXL2}</li>
                                <li>{item.UsageofVIGROLXL3}</li>
                                <li>{item.UsageofVIGROLXL4}</li>
                                <li>{item.UsageofVIGROLXL5}</li>
                                <li>{item.UsageofVIGROLXL6}</li>
                                <li>{item.UsageofVIGROLXL7}</li>
                                <li>{item.UsageofVIGROLXL8}</li>
                                <li>{item.UsageofVIGROLXL9}</li>
                                <li>{item.UsageofVIGROLXL10}</li>
                            </ul>
                        </div>
                        <div className="use my-3">
                            <h2 className='Ingredients'>{item.VIRILITYDSIngredients}</h2>
                            <ul className='ul_benifits'>
                                <li>{item.VIRILITYDSIngredients1}</li>
                                <li>{item.VIRILITYDSIngredients2}</li>
                                <li>{item.VIRILITYDSIngredients3}</li>
                                <li>{item.VIRILITYDSIngredients4}</li>
                                <li>{item.VIRILITYDSIngredients5}</li>
                                <li>{item.VIRILITYDSIngredients6}</li>
                                <li>{item.VIRILITYDSIngredients7}</li>
                                <li>{item.VIRILITYDSIngredients8}</li>
                                <li>{item.VIRILITYDSIngredients9}</li>
                                <li>{item.VIRILITYDSIngredients10}</li>
                            </ul>
                        </div>
                        <div className="use my-3">
                            <h2 className='Ingredients'>{item.VIGROLXLIngredients}</h2>
                            <ul className='ul_benifits'>
                                <li>{item.VIGROLXLIngredients1}</li>
                                <li>{item.VIGROLXLIngredients2}</li>
                                <li>{item.VIGROLXLIngredients3}</li>
                                <li>{item.VIGROLXLIngredients4}</li>
                                <li>{item.VIGROLXLIngredients5}</li>
                                <li>{item.VIGROLXLIngredients6}</li>
                                <li>{item.VIGROLXLIngredients7}</li>
                                <li>{item.VIGROLXLIngredients8}</li>
                                <li>{item.VIGROLXLIngredients9}</li>
                                <li>{item.VIGROLXLIngredients10}</li>
                                <li>{item.VIGROLXLIngredients11}</li>
                                <li>{item.VIGROLXLIngredients12}</li>
                                <li>{item.VIGROLXLIngredients13}</li>
                                <li>{item.VIGROLXLIngredients14}</li>
                                <li>{item.VIGROLXLIngredients15}</li>
                                <li>{item.VIGROLXLIngredients16}</li>
                            </ul>
                        </div>

                        <div className="use my-3">
                            <h2 className='Ingredients'>{item.Ingredients}</h2>
                            <ul className='ul_benifits'>
                                <li>{item.Ingredients1}</li>
                                <li>{item.Ingredients2}</li>
                                <li>{item.Ingredients3}</li>
                                <li>{item.Ingredients4}</li>
                                <li>{item.Ingredients5}</li>
                                <li>{item.Ingredients6}</li>
                                <li>{item.Ingredients7}</li>
                                <li>{item.Ingredients8}</li>
                                <li>{item.Ingredients9}</li>
                                <li>{item.Ingredients10}</li>
                                <li>{item.Ingredients11}</li>
                                <li>{item.Ingredients12}</li>
                                <li>{item.Ingredients13}</li>
                                <li>{item.Ingredients14}</li>
                                <li>{item.Ingredients15}</li>
                                <li>{item.Ingredients16}</li>
                                <li>{item.Ingredients17}</li>
                                <li>{item.Ingredients18}</li>
                                <li>{item.Ingredients19}</li>
                                <li>{item.Ingredients20}</li>
                                <li>{item.Ingredients21}</li>
                                <li>{item.Ingredients22}</li>
                                <li>{item.Ingredients23}</li>
                                <li>{item.Ingredients24}</li>
                                <li>{item.Ingredients25}</li>
                                <li>{item.Ingredients26}</li>
                                <li>{item.Ingredients27}</li>
                                <li>{item.Ingredients28}</li>
                                <li>{item.Ingredients29}</li>
                                <li>{item.Ingredients30}</li>
                                <li>{item.Ingredients31}</li>
                                <li>{item.Ingredients32}</li>
                                <li>{item.Ingredients33}</li>
                                <li>{item.Ingredients34}</li>
                                <li>{item.Ingredients35}</li>
                                <li>{item.Ingredients36}</li>
                                <li>{item.Ingredients37}</li>
                                <li>{item.Ingredients38}</li>
                                <li>{item.Ingredients39}</li>
                                <li>{item.Ingredients40}</li>
                                <li>{item.Ingredients41}</li>
                                <li>{item.Ingredients42}</li>

                            </ul>
                        </div>
                        <div className="use my-3">
                            <h2 className='Ingredients'>{item.Special}</h2>
                            <ul className='ul_benifits'>
                                <li>{item.Special1}</li>
                                <li>{item.Special2}</li>
                                <li>{item.Special3}</li>
                                <li>{item.Special4}</li>
                                <li>{item.Special5}</li>
                            </ul>
                        </div>
                        <div className="use my-3">
                            <h2 className='Ingredients'>{item.SpecialInstructions}</h2>
                            <ul className='ul_benifits'>
                                <li>{item.SpecialInstructions1}</li>
                                <li>{item.SpecialInstructions2}</li>
                                <li>{item.SpecialInstructions3}</li>
                                <li>{item.SpecialInstructions4}</li>
                                <li>{item.SpecialInstructions5}</li>
                                <li>{item.SpecialInstructions7}</li>
                                <li>{item.SpecialInstructions8}</li>
                                <li>{item.SpecialInstructions9}</li>
                                <li>{item.SpecialInstructions10}</li>
                                <li>{item.SpecialInstructions11}</li>
                                <li>{item.SpecialInstructions12}</li>
                                <li>{item.SpecialInstructions13}</li>
                                <li>{item.SpecialInstructions14}</li>
                                <li>{item.SpecialInstructions15}</li>
                                <li>{item.SpecialInstructions16}</li>
                                <li>{item.SpecialInstructions17}</li>
                                <li>{item.SpecialInstructions18}</li>
                                <li>{item.SpecialInstructions19}</li>
                                <li>{item.SpecialInstructions20}</li>
                                <li>{item.SpecialInstructions21}</li>
                                <li>{item.SpecialInstructions22}</li>
                                <li>{item.SpecialInstructions23}</li>
                                <li>{item.SpecialInstructions24}</li>
                                <li>{item.SpecialInstructions25}</li>
                                <li>{item.SpecialInstructions26}</li>
                                <li>{item.SpecialInstructions27}</li>
                                <li>{item.SpecialInstructions28}</li>
                                <li>{item.SpecialInstructions29}</li>
                                <li>{item.SpecialInstructions30}</li>
                                <li>{item.SpecialInstructions31}</li>
                                <li>{item.SpecialInstructions32}</li>
                                <li>{item.SpecialInstructions33}</li>
                                <li>{item.SpecialInstructions34}</li>
                                <li>{item.SpecialInstructions35}</li>
                                <li>{item.SpecialInstructions36}</li>

                            </ul>
                        </div>
                        <div className="use my-3">
                            <h2 className='Ingredients'>{item.Instructions}</h2>
                            <ul className='ul_benifits'>
                                <li>{item.Instructions1}</li>
                                <li>{item.Instructions2}</li>
                                <li>{item.Instructions3}</li>
                                <li>{item.Instructions4}</li>
                                <li>{item.Instructions5}</li>
                                <li>{item.Instructions7}</li>
                                <li>{item.Instructions8}</li>
                                <li>{item.Instructions9}</li>
                                <li>{item.Instructions10}</li>
                                <li>{item.Instructions11}</li>
                                <li>{item.Instructions12}</li>
                                <li>{item.Instructions13}</li>
                                <li>{item.Instructions14}</li>
                                <li>{item.Instructions15}</li>
                                <li>{item.Instructions16}</li>
                                <li>{item.Instructions17}</li>
                                <li>{item.Instructions18}</li>
                            </ul>
                        </div>
                        <div className="use my-3">
                            <h2 className='Ingredients'>{item.HowtoConsume}</h2>
                            <ul className='ul_benifits'>
                                <li>{item.HowtoConsume1}</li>
                                <li>{item.HowtoConsume2}</li>
                                <li>{item.HowtoConsume3}</li>
                                <li>{item.HowtoConsume4}</li>
                                <li>{item.HowtoConsume5}</  li>
                                <li>{item.HowtoConsume6}</li>
                                <li>{item.HowtoConsume7}</li>
                                <li>{item.HowtoConsume8}</li>
                                <li>{item.HowtoConsume9}</li>
                                <li>{item.HowtoConsume10}</li>
                                <li>{item.HowtoConsume11}</li>
                                <li>{item.HowtoConsume12}</li>
                                <li>{item.HowtoConsume13}</li>
                                <li>{item.HowtoConsume14}</li>
                                <li>{item.HowtoConsume15}</li>
                                <li>{item.HowtoConsume16}</li>
                            </ul>
                        </div>
                        <div className="table_" style={{ paddingBottom: '50px' }}>
                            <table>
                                <tr>
                                    <th>{item.Weight}</th>
                                    <td style={{ background: '#DDDDDD' }}>{item.Weight1}</td>

                                </tr>
                                <tr>
                                    <th>{item.dicQuantity}</th>
                                    <td>{item.dicQuantity1}</td>

                                </tr>
                            </table>
                        </div>


                        <div className="main_reviews">
                            <h2 >Reviews</h2>
                            <p className='my-3'>There are no reviews yet.</p>
                            <h2>Be The First To Review “{item.title}”</h2>
                            <p className='my-3'>Your email address will not be published. Required fields are marked *</p>
                            <div className="rating_product">
                                <ul>
                                    <li> Your rating <span style={{ color: 'red' }}> * </span> </li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                    <li><i class="fa-solid fa-star"></i></li>
                                </ul>
                            </div>
                            <div className="form my-3">
                                <Form.Label htmlFor="inputPassword5" style={{ display: 'block', marginBottom: '8px', fontSize: '15px' }}>Your review <span style={{ color: 'red' }}> * </span></Form.Label>
                                <textarea
                                    name=""
                                    id="inputPassword5"
                                    cols="30"
                                    rows="10"
                                    style={{
                                        width: '50%',
                                        padding: '8px',
                                        boxSizing: 'border-box',
                                        borderRadius: '4px',
                                        border: '1px solid #ccc',
                                        fontSize: '16px',
                                        marginBottom: '16px',
                                    }}
                                ></textarea>
                                <Form.Label htmlFor="inputPassword5">Name <span style={{ color: 'red' }}> * </span></Form.Label>
                                <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    style={{ width: "30%", outline: 'none', boxShadow: 'none' }}
                                />
                                <Form.Label htmlFor="inputPassword5">Email  <span style={{ color: 'red' }}> * </span></Form.Label>
                                <Form.Control
                                    type="text"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    style={{ width: "30%", outline: 'none', boxShadow: 'none' }}
                                />
                                <input type="checkbox" /> <span>Save my name, email, and website in this browser for the next time I comment.</span><br></br>
                                <button className='my-3'>Submit</button>
                            </div>
                        </div>

                    </div>

                </Row>
            </Container>

            <Footer />
        </div>
    )
}

export default SingleProductDetailsfour
