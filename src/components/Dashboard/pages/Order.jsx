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
import "./Order.css";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SideBar from "../components/Sidebar/SideBar";
import InputGroup from 'react-bootstrap/InputGroup';

// import { useReactToPrint } from "react-to-print";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function Order() {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
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
            <h1>Incoming Order  </h1>
            <div className="main_form d-flex">
              
              <div className="main_form_2">
                <InputGroup className="mb-3">
                  <Form.Control  placeholder="Search by Rel #" />
                </InputGroup>
              </div>
              <div className="main_form_2">
                <InputGroup className="mb-3">
                  <Form.Control  placeholder="Search by Customer Ref" />
                </InputGroup>
              </div>
              <div className="main_form_2">
                <InputGroup className="mb-3">
                  <Form.Control  placeholder="Search by Phone Number" />
                </InputGroup>
              </div>
              <div className="main_form_2">
                <InputGroup className="mb-3">
                  <Form.Control  placeholder="Search by Name" />
                </InputGroup>
              </div>
            </div>
            <div className="main_form_1 w-25">
                <Form.Select aria-label="Default select example">
                  <option>Search By Payment</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
              <div>
      <label>From Date:</label>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

      <label>To Date:</label>
      <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
    </div>
            <div className="main_button">
            <div className="main_form_2">
                <InputGroup className="mb-3">
                  <Form.Control  placeholder="Search by Voucher" />
                </InputGroup>
              </div>
              <div className="main_form_2">
               <button>Reload Orders</button>
              </div>
              <div className="main_form_2">
                <Link to="/OrderDetails">
                
               <button>Export Details</button>
               </Link>
              </div>
            </div>
            <div className="main_button_order">
               <ul>
                <li><a href="">New Orders <div className="count">2</div></a></li>
                <li><a href="">Processing <div className="count">127</div></a></li>
                <li><a href="">Completed <div className="count">42</div></a></li>
                <li><a href="">Scheduled <div className="count">0</div></a></li>
                <li><a href="">All Orders</a></li>
               </ul>
            </div>
            <main className="main_clientTable w-100">
     

     <div className="cennt mt-5">
       <div className="clienttable_feild  w-100 mx-4 p-2">
         <div className="sec des">
           <div className="head d-flex align-items-center justify-content-between">
             <div>
               <label> All Orders </label>
               {/* <button
                 onClick={handlePrint}
                 style={{
                   borderRadius: "15px",
                   marginLeft: "10px",
                   backgroundColor: "black",
                   color: "white",
                   padding: "5px",
                   fontSize: "10px",
                 }}
               >
                 Export to PDF
               </button> */}
             </div>
             <div>
               <AdvancedExample />
             </div>
           </div>
           <div className="body">
             <div className="body_inner py-1 ">
               <Table responsive>
                 <thead>
                   <tr>
                     <th>
                       <input type="checkbox" />
                     </th>
                     <th>Order</th>
                     <th>Date</th>
                     <th>Satus</th>
                     <th>Shipping City</th>
                     <th>Total</th>
                   </tr>
                 </thead>
                 <tbody>
                  <tr>
                  <td>
                  <input type="checkbox" />
                  </td>
                  <td>
                    <Link to="/CustomerDetails">
                      #35213 Muhammad Imran
                    </Link>
                  </td>
                  <td>
                    15 hours ago
                  </td>
                  <td>
                    <button style={{padding:'5px 20px ',backgroundColor:"#BDE2C8",color:"#517D48",border:"none"}}>Processing</button>
                  </td>
                  <td>NAZIMABAD</td>
                  <td>Rs 1,850.00</td>
                  </tr>
                  <tr>
                  <td>
                  <input type="checkbox" />
                  </td>
                  <td>
                    <Link to="/CustomerDetails">
                      #35213 Muhammad Imran
                    </Link>
                  </td>
                  <td>
                    15 hours ago
                  </td>
                  <td>
                    <button style={{padding:'5px 20px ',backgroundColor:"#FEDCA6",color:"#9B7848",border:"none"}}>On Hold</button>
                  </td>
                  <td>NAZIMABAD</td>
                  <td>Rs 1,850.00</td>
                  </tr>
                 </tbody>
               </Table>
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

function AdvancedExample() {
  return (
    <Pagination>
      <Pagination.Item active>{1}</Pagination.Item>
      {/* <Pagination.Ellipsis /> */}

      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      {/* <Pagination.Item disabled>{14}</Pagination.Item> */}
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}



export default Order;
