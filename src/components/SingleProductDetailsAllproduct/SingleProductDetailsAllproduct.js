import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import "./SingleProductDetailsAllproduct.css";
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../../features/cartSlice";

function SingleProductDetailsAllproduct() {
    const { id } = useParams();
    const AllproductsmanageItems = useSelector((state) => state.allCart.AllproductsmanageItems);
    const item = AllproductsmanageItems.find((p) => p.id === parseInt(id, 10));

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
                    {item.BenefitsofPigmentationNightCream && (
    <>
        <h2 className='benifits'>{item.BenefitsofPigmentationNightCream}</h2>
        <ul className='ul_benifits'>
            {[...Array(12).keys()].map((index) => {
                const benefitKey = `BenefitsofPigmentationNightCream${index + 1}`;
                const benefitValue = item[benefitKey];

                if (benefitValue && benefitValue.trim() !== "") {
                    return <li key={benefitKey}>{benefitValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}


{item.BenefitsofPigmentationSunBlock && (
    <>
        <h2 className='benifits'>{item.BenefitsofPigmentationSunBlock}</h2>
        <ul className='ul_benifits'>
            {[...Array(4).keys()].map((index) => {
                const benefitKey = `BenefitsofPigmentationSunBlock${index + 1}`;
                const benefitValue = item[benefitKey];

                if (benefitValue && benefitValue.trim() !== "") {
                    return <li key={benefitKey}>{benefitValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}


{item.BenefitsofPigmentationSerum && (
    <>
        <h2 className='benifits'>{item.BenefitsofPigmentationSerum}</h2>
        <ul className='ul_benifits'>
            {[...Array(5).keys()].map((index) => {
                const benefitKey = `BenefitsofPigmentationSerum${index + 1}`;
                const benefitValue = item[benefitKey];

                if (benefitValue && benefitValue.trim() !== "") {
                    return <li key={benefitKey}>{benefitValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}


{item.BenefitsofPigmentationOrangeFacewash && (
    <>
        <h2 className='benifits'>{item.BenefitsofPigmentationOrangeFacewash}</h2>
        <ul className='ul_benifits'>
            {[...Array(5).keys()].map((index) => {
                const benefitKey = `BenefitsofPigmentationOrangeFacewash${index + 1}`;
                const benefitValue = item[benefitKey];

                if (benefitValue && benefitValue.trim() !== "") {
                    return <li key={benefitKey}>{benefitValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}

{item.Benefits && (
    <>
        <h2 className='benifits'>{item.Benefits}</h2>
        <ul className='ul_benifits'>
            {[...Array(35).keys()].map((index) => {
                const benefitKey = `Benefits${index + 1}`;
                const benefitValue = item[benefitKey];

                if (benefitValue && benefitValue.trim() !== "") {
                    return <li key={benefitKey}>{benefitValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}

{item.Howtouse && item.Howtouse1 && item.Howtouse.trim() !== '' && item.Howtouse1.trim() !== '' && (
    <div className="use my-3">
        <h2 className='Usage'>{item.Howtouse}</h2>
        <ul className='ul_benifits'>
            <li>{item.Howtouse1}</li>
        </ul>
    </div>
)}


   {item.UsesofBlackPepperoil && (
    <>
        <h2 className='benifits'>{item.UsesofBlackPepperoil}</h2>
        <ul className='ul_benifits'>
            {[...Array(35).keys()].map((index) => {
                const benefitKey = `UsesofBlackPepperoil${index + 1}`;
                const benefitValue = item[benefitKey];

                if (benefitValue && benefitValue.trim() !== "") {
                    return <li key={benefitKey}>{benefitValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}           
                        

{item.Usage && (
    <div className="use my-3">
        <h2 className='Usage'>{item.Usage}</h2>
        <ul className='ul_benifits'>
            {[...Array(28).keys()].map((index) => {
                const key = `Usage${index + 1}`;
                const value = item[key];
                return value && <li key={key}>{value}</li>;
            })}
        </ul>
    </div>
)}

{item.UsageofPiloxMB && (
    <div className="use my-3">
        <h2 className='Usage'>{item.UsageofPiloxMB}</h2>
        <ul className='ul_benifits'>
            {[...Array(28).keys()].map((index) => {
                const key = `UsageofPiloxMB${index + 1}`;
                const value = item[key];
                return value && <li key={key}>{value}</li>;
            })}
        </ul>
    </div>
)}


{item.UsageofAcneClear && (
    <div className="use my-3">
        <h2 className='Usage'>{item.UsageofAcneClear}</h2>
        <ul className='ul_benifits'>
            {[...Array(2).keys()].map((index) => {
                const key = `UsageofAcneClear${index + 1}`;
                const value = item[key];
                return value && <li key={key}>{value}</li>;
            })}
        </ul>
    </div>
)}

{item.UsageofAcneDiffuser && (
    <div className="use my-3">
        <h2 className='Usage'>{item.UsageofAcneDiffuser}</h2>
        <ul className='ul_benifits'>
            {[...Array(2).keys()].map((index) => {
                const key = `UsageofAcneDiffuser${index + 1}`;
                const value = item[key];
                return value && <li key={key}>{value}</li>;
            })}
        </ul>
    </div>
)}

{item.UsageofAntiAcne && (
    <div className="use my-3">
        <h2 className='Ingredients'>{item.UsageofAntiAcne}</h2>
        <ul className='ul_benifits'>
            {[...Array(2).keys()].map((index) => {
                const key = `UsageofAntiAcne${index + 1}`;
                const value = item[key];
                return value && <li key={key}>{value}</li>;
            })}
        </ul>
    </div>
)}



{item.NightCreamIngredient && (
    <div className="use my-3">
        <h2 className='Ingredients'>{item.NightCreamIngredient}</h2>
        <ul className='ul_benifits'>
            {[...Array(11).keys()].map((index) => {
                const key = `NightCreamIngredient${index + 1}`;
                const value = item[key];
                return value && <li key={key}>{value}</li>;
            })}
        </ul>
    </div>
)}

{item.SunBlockIngredients && (
    <div className="use my-3">
        <h2 className='Ingredients'>{item.SunBlockIngredients}</h2>
        <ul className='ul_benifits'>
            {[...Array(10).keys()].map((index) => {
                const ingredientKey = `SunBlockIngredients${index + 1}`;
                const ingredientValue = item[ingredientKey];

                if (ingredientValue) {
                    return <li key={ingredientKey}>{ingredientValue}</li>;
                }

                return null;
            })}
        </ul>
    </div>
)}

{item.SerumIngredients && (
    <div className="use my-3">
        <h2 className='Ingredients'>{item.SerumIngredients}</h2>
        <ul className='ul_benifits'>
            {[...Array(9).keys()].map((index) => {
                const ingredientKey = `SerumIngredients${index + 1}`;
                const ingredientValue = item[ingredientKey];

                if (ingredientValue) {
                    return <li key={ingredientKey}>{ingredientValue}</li>;
                }

                return null;
            })}
        </ul>
    </div>
)}

{item.FaceWashIngredients && (
    <div className="use my-3">
        <h2 className='Ingredients'>{item.FaceWashIngredients}</h2>
        <ul className='ul_benifits'>
            {[...Array(8).keys()].map((index) => {
                const ingredientKey = `FaceWashIngredients${index + 1}`;
                const ingredientValue = item[ingredientKey];

                if (ingredientValue) {
                    return <li key={ingredientKey}>{ingredientValue}</li>;
                }

                return null;
            })}
        </ul>
    </div>
)}


{item.Ingredients && (
    <div className="use my-3">
        <h2 className='Ingredients'>{item.Ingredients}</h2>
        <ul className='ul_benifits'>
            {[...Array(42).keys()].map((index) => {
                const ingredientKey = `Ingredients${index + 1}`;
                const ingredientValue = item[ingredientKey];

                if (ingredientValue) {
                    return <li key={ingredientKey}>{ingredientValue}</li>;
                }

                return null;
            })}
        </ul>
    </div>
)}


{item.SpecialInstructions && (
    <div className="use my-3">
        <h2 className='Ingredients'>{item.SpecialInstructions}</h2>
        <ul className='ul_benifits'>
            {[...Array(36).keys()].map((index) => {
                const instructionKey = `SpecialInstructions${index + 1}`;
                const instructionValue = item[instructionKey];

                if (instructionValue) {
                    return <li key={instructionKey}>{instructionValue}</li>;
                }

                return null;
            })}
        </ul>
    </div>
)}


{item.PilexCapsulesBenefits && (
    <>
        <h2 className='benifits'>{item.PilexCapsules}</h2>
        <h2 className='benifits'>{item.PilexCapsulesBenefits}</h2>
        <ul className='ul_benifits'>
            {[...Array(12).keys()].map((index) => {
                const PilexKey = `PilexCapsulesBenefits${index + 1}`;
                const PilexValue = item[PilexKey];

                if (PilexValue && PilexValue.trim() !== "") {
                    return <li key={PilexKey}>{PilexValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}
                     
   {item.PilexCapsulesIngredients && (
    <>
        
        <h2 className='benifits'>{item.PilexCapsulesIngredients}</h2>
        <ul className='ul_benifits'>
            {[...Array(12).keys()].map((index) => {
                const PilexCapsulesKey = `PilexCapsulesIngredients${index + 1}`;
                const PilexCapsulesValue = item[PilexCapsulesKey];

                if (PilexCapsulesValue && PilexCapsulesValue.trim() !== "") {
                    return <li key={PilexCapsulesKey}>{PilexCapsulesValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}

{item.PilexCapsulesUsage && (
    <>
        
        <h2 className='benifits'>{item.PilexCapsulesUsage}</h2>
        <ul className='ul_benifits'>
            {[...Array(12).keys()].map((index) => {
                const PilexCapsulesUsageKey = `PilexCapsulesUsage${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}
                       {item.HemorrhoidsOilHemorrhoidsOilBenefits && (
    <>
        <h2 className='benifits'>{item.HemorrhoidsOil}</h2>
        <h2 className='benifits'>{item.HemorrhoidsOilHemorrhoidsOilBenefits}</h2>
        <ul className='ul_benifits'>
            {[...Array(12).keys()].map((index) => {
                const PilexCapsulesUsageKey = `HemorrhoidsOilHemorrhoidsOilBenefits${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}


{item.HemorrhoidsOilHemorrhoidsOilIngredients && (
    <>
       
        <h2 className='benifits'>{item.HemorrhoidsOilHemorrhoidsOilIngredients}</h2>
        <ul className='ul_benifits'>
            {[...Array(12).keys()].map((index) => {
                const PilexCapsulesUsageKey = `HemorrhoidsOilHemorrhoidsOilIngredients${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}
                       


                       {item.HemorrhoidsOilUsage && (
    <>
       
        <h2 className='benifits'>{item.HemorrhoidsOilUsage}</h2>
        <ul className='ul_benifits'>
            {[...Array(12).keys()].map((index) => {
                const PilexCapsulesUsageKey = `HemorrhoidsOilUsage${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}


          
{item.PsoriasisCapsulesBenefits && (
    <>
         <h2 className='benifits'>{item.PsoriasisCapsules}</h2>
        <h2 className='benifits'>{item.PsoriasisCapsulesBenefits}</h2>
        <ul className='ul_benifits'>
            {[...Array(12).keys()].map((index) => {
                const PilexCapsulesUsageKey = `PsoriasisCapsulesBenefits${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}
           


           {item.PsoriasisCapsulesIngredients && (
    <>
         
        <h2 className='benifits'>{item.PsoriasisCapsulesIngredients}</h2>
        <ul className='ul_benifits'>
            {[...Array(12).keys()].map((index) => {
                const PilexCapsulesUsageKey = `PsoriasisCapsulesIngredients${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}   
    {item.PsoriasisCapsulesDosage && (
    <>
         
        <h2 className='benifits'>{item.PsoriasisCapsulesDosage}</h2>
        <ul className='ul_benifits'>
            {[...Array(12).keys()].map((index) => {
                const PilexCapsulesUsageKey = `PsoriasisCapsulesDosage${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}   

                      
{item.EczemaCapsulesBenefits && (
    <>
          <h2 className='benifits'>{item.EczemaCapsules}</h2>
        <h2 className='benifits'>{item.EczemaCapsulesBenefits}</h2>
        <ul className='ul_benifits'>
            {[...Array(12).keys()].map((index) => {
                const PilexCapsulesUsageKey = `EczemaCapsulesBenefits${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}          

                               
{item.EczemaCapsulesIngredients && (
    <>

        <h2 className='benifits'>{item.EczemaCapsulesIngredients}</h2>
        <ul className='ul_benifits'>
            {[...Array(12).keys()].map((index) => {
                const PilexCapsulesUsageKey = `EczemaCapsulesIngredients${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}                        

                      
{item.Dosage && (
    <>

        <h2 className='benifits'>{item.Dosage}</h2>
        <ul className='ul_benifits'>
            {[...Array(12).keys()].map((index) => {
                const PilexCapsulesUsageKey = `Dosage${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}                        


                       

{item.EczemaVaselineBenefits && (
    <>
 <h2 className='benifits'>{item.EczemaVaseline}</h2>
        <h2 className='benifits'>{item.EczemaVaselineBenefits}</h2>
        <ul className='ul_benifits'>
            {[...Array(12).keys()].map((index) => {
                const PilexCapsulesUsageKey = `EczemaVaselineBenefits${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}        


                      
{item.EczemaVaselineIngredients && (
    <>

        <h2 className='benifits'>{item.EczemaVaselineIngredients}</h2>
        <ul className='ul_benifits'>
            {[...Array(12).keys()].map((index) => {
                const PilexCapsulesUsageKey = `EczemaVaselineIngredients${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}        

                       
{item.EczemaVaselineUsage && (
    <>

        <h2 className='benifits'>{item.EczemaVaselineUsage}</h2>
        <ul className='ul_benifits'>
            {[...Array(12).keys()].map((index) => {
                const PilexCapsulesUsageKey = `EczemaVaselineUsage${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}        

                        
{item.UsageofPiloxN && (
    <>

        <h2 className='benifits'>{item.UsageofPiloxN}</h2>
        <ul className='ul_benifits'>
            {[...Array(28).keys()].map((index) => {
                const PilexCapsulesUsageKey = `UsageofPiloxN${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}      
      
      {item.PiloxMBIngredients && (
    <>

        <h2 className='benifits'>{item.PiloxMBIngredients}</h2>
        <ul className='ul_benifits'>
            {[...Array(28).keys()].map((index) => {
                const PilexCapsulesUsageKey = `PiloxMBIngredients${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}      


{item.PiloxNIngredients && (
    <>

        <h2 className='benifits'>{item.PiloxNIngredients}</h2>
        <ul className='ul_benifits'>
            {[...Array(28).keys()].map((index) => {
                const PilexCapsulesUsageKey = `PiloxNIngredients${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}      
               
                      
             
               {item.UsageofVIRILITYDSCapsules && (
    <>

        <h2 className='benifits'>{item.UsageofVIRILITYDSCapsules}</h2>
        <ul className='ul_benifits'>
            {[...Array(28).keys()].map((index) => {
                const PilexCapsulesUsageKey = `UsageofVIRILITYDSCapsules${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}      
                       
  
                       {item.UsageofVIGROLXL && (
    <>

        <h2 className='benifits'>{item.UsageofVIGROLXL}</h2>
        <ul className='ul_benifits'>
            {[...Array(28).keys()].map((index) => {
                const PilexCapsulesUsageKey = `UsageofVIGROLXL${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}      
                      {item.VIRILITYDSIngredients && (
    <>

        <h2 className='benifits'>{item.VIRILITYDSIngredients}</h2>
        <ul className='ul_benifits'>
            {[...Array(28).keys()].map((index) => {
                const PilexCapsulesUsageKey = `VIRILITYDSIngredients${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}      
                       

                       

                       {item.VIGROLXLIngredients && (
    <>

        <h2 className='benifits'>{item.VIGROLXLIngredients}</h2>
        <ul className='ul_benifits'>
            {[...Array(28).keys()].map((index) => {
                const PilexCapsulesUsageKey = `VIGROLXLIngredients${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}                     


{item.Special && (
    <>

        <h2 className='benifits'>{item.Special}</h2>
        <ul className='ul_benifits'>
            {[...Array(28).keys()].map((index) => {
                const PilexCapsulesUsageKey = `Special${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}     


{item.Instructions && (
    <>

        <h2 className='benifits'>{item.Instructions}</h2>
        <ul className='ul_benifits'>
            {[...Array(28).keys()].map((index) => {
                const PilexCapsulesUsageKey = `Instructions${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}         

{item.HowtoConsume && (
    <>

        <h2 className='benifits'>{item.HowtoConsume}</h2>
        <ul className='ul_benifits'>
            {[...Array(28).keys()].map((index) => {
                const PilexCapsulesUsageKey = `HowtoConsume${index + 1}`;
                const PilexCapsulesUsageValue = item[PilexCapsulesUsageKey];

                if (PilexCapsulesUsageValue && PilexCapsulesUsageValue.trim() !== "") {
                    return <li key={PilexCapsulesUsageKey}>{PilexCapsulesUsageValue}</li>;
                }

                return null;
            })}
        </ul>
    </>
)}             
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

export default SingleProductDetailsAllproduct
