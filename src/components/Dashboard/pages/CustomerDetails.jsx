import React, { useEffect, } from "react";
import {
  Table,
  Pagination,
  Navbar,
  Container,
  Nav,
  Form,
  ListGroup,
  ListGroupItem,
  Dropdown,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomerDetails.css";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SideBar from "../components/Sidebar/SideBar";
import InputGroup from 'react-bootstrap/InputGroup';
import logo from "../../../assets/Health & Beauty/Natural-Collagen-Booster-3.jpeg"
import logo1 from "../../../assets/delevirert2.png"
// import { useReactToPrint } from "react-to-print";

function CustomerDetails() {


  // const componentRef = useRef();
  // const handlePrint = useReactToPrint({
  //   content:()=> componentRef.current,
  //   documentTitle:"Client Table"
  // })



  // const forDelete = (clientID) => {
  //   navigate("/clients/" + clientID);
  // };z
  return (
    <>
      <SideBar>

        <main className="order" >
          <Container >
            <h1>Order #35213 details  </h1>
            <br />
            <div className="body">
              <div className="body_inner py-1 ">
                <Table responsive>
                  <thead>
                    <tr>

                      <th>General</th>
                      <th>Shipping</th>

                    </tr>
                  </thead>
                  <tbody>

                    <tr>
                      <td>
                        <Form.Label>Date Created:</Form.Label>
                        <div className="form_12 d-flex">

                          <div className="main_form_2">
                            <InputGroup className="mb-3">
                              <Form.Control placeholder="2023-12-05" disabled style={{ background: 'none' }} />
                            </InputGroup>
                          </div>  @

                          <div className="main_form_2">
                            <InputGroup className="mb-3" style={{ width: '25%' }}>
                              <Form.Control placeholder="23" disabled style={{ background: 'none' }} />
                            </InputGroup>
                          </div>

                        </div>
                        <div className="main_form_2">
                          <InputGroup className="mb-3" style={{ width: '25%' }}>
                            <Form.Control placeholder="48" disabled style={{ background: 'none' }} />
                          </InputGroup>
                        </div>
                        <div className="main_form_1 w-100">
                          <Form.Label>Status:</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Search By Payment</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>

                        </div>
                      </td>
                      <td>
                        <p>
                          Muhammad Imran <br />
                          Urdu Bazar <br />
                          Chyel arched Floor 5 flat 505 -C <br />
                          NAZIMABAD <br />
                          Sindh <br />
                          74600
                        </p>
                        <br />
                        <br />
                        <Form.Label>Email address:</Form.Label>
                        <p style={{ color: "blue" }}>muhammadimran@gmail.com</p>
                        <br />
                        <br />
                        <Form.Label>Phone:</Form.Label>
                        <p style={{ color: "blue" }}>0345 6080412</p>
                      </td>

                    </tr>

                  </tbody>
                </Table>
              </div>
            </div>



          </Container>
        </main>
        <main className="order" >
          <Container >


            <main className="main_clientTable w-100">


              <div className="cennt mt-5">
                <div className="clienttable_feild  w-100 mx-4 p-2">
                  <div className="sec des">
                    <div className="head d-flex align-items-center justify-content-between">


                    </div>
                    <div className="body">
                      <div className="body_inner py-1 ">
                        <Table responsive>
                          <thead>
                            <tr>
                              <th>Item</th>
                              <th>Cost</th>
                              <th>Qty</th>
                              <th>Total</th>

                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="image_2 d-flex" style={{ alignItems: "center", gap: "20px" }}>
                                  <img src={logo} alt="" style={{ width: 'auto', height: "50px" }} />
                                  <p style={{ color: 'blue' }}>Natural-Collagen-Booster <br /> SKU:GR035HB</p>
                                </div>
                              </td>
                              <td>Rs 800.00</td>
                              <td>* 1</td>
                              <td>Rs 800.00</td>
                            </tr>

                          </tbody>
                        </Table>

                        <Table responsive>
                          <tbody>
                            <tr>
                              <td>
                                <div className="image_2 d-flex" style={{ alignItems: "center", gap: "20px" }}>
                                  <img src={logo1} alt="" style={{ width: 'auto', height: "50px" }} />
                                  <p style={{ color: 'blue' }}>D/C </p>
                                </div>
                              </td>
                              <td>Rs 450.00</td>

                            </tr>

                          </tbody>
                        </Table>

                        <div className="container">
                          <div className="row">
                            <div className="col-8"></div>
                            <div className="col-2"><ul>
                              <li style={{fontWeight:'bold'}}> Items Subtotal:</li>
                              <li style={{fontWeight:'bold'}}> Shipping:</li>
                              <li style={{fontWeight:'bold'}}> Order Total:</li>

                            </ul></div>
                            <div className="col-2">
                              <ul>
                                <li style={{fontWeight:'bold'}}>Rs 1,400.00</li>
                                <li style={{fontWeight:'bold'}}>Rs 450.00</li>
                                <li style={{fontWeight:'bold'}}>Rs 1,850.00</li>
                              </ul>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </Container>
        </main>


      </SideBar>
    </>
  );
}





export default CustomerDetails;
