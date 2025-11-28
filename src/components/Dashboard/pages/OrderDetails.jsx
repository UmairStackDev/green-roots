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
import "./OrderDetails.css";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SideBar from "../components/Sidebar/SideBar";
import InputGroup from 'react-bootstrap/InputGroup';

// import { useReactToPrint } from "react-to-print";
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function OrderDetails() {
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
            <h1>Oder Details  </h1>
            <div>
      <label>From Date:</label>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

      <label>To Date:</label>
      <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
    </div>
            <main className="main_clientTable w-100">
     

     <div className="cennt mt-5">
       <div className="clienttable_feild  w-100 mx-4 p-2">
         <div className="sec des">
           <div className="head d-flex align-items-center justify-content-between">
             <div>
               <label> All Orders Details </label>
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
                     <th>Date</th>
                     <th>Order Number</th>
                     <th>Order Item Count</th>
                     <th>Order Items</th>
                     <th>Order Total</th>
                     <th>Order Shipping Total</th>
                     <th>Order Payment Method</th>
                     <th>Billing First Name</th>
                     <th>Billing Last Name</th>
                     <th>Billing Adresss 1</th>
                     <th>Billing Phone</th>
                     <th>Shippin City</th>
                     <th>Order Status</th>
                     <th>Total Tax</th>
                   </tr>
                 </thead>
                 <tbody>
               <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
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



export default OrderDetails;
