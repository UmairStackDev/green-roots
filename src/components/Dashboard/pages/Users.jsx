import React, { useEffect,  } from "react";
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

// import { useReactToPrint } from "react-to-print";

function Users() {


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
       
      
      
      
    <main className="main_clientTable">
     

      <div className="cennt mt-5">
        <div className="clienttable_feild  w-100 mx-4 p-2">
          <div className="sec des">
            <div className="head d-flex align-items-center justify-content-between">
              <div>
                <label> All Clients </label>
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
                      <th className="text-center px-2">ID</th>
                      <th>NAT</th>
                      <th>Status</th>
                      <th>Branch</th>
                      <th>Client #</th>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Billing Group</th>
                      <th>City</th>
                      <th>State</th>
                      <th>Account Manager</th>
                      <th>Payor</th>
                      <th>Balance</th>
                      <th>Open Credit</th>
                      <th>Rating</th>
                      <th>Actions</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    
                            <td>
                              <Form.Check type="checkbox" />
                            </td>
                            <td className="text-center">-</td>
                            <td>Active</td>
                            <td>
                              <div className="div__registryTable">
                                <Dropdown>
                                  <Dropdown.Toggle
                                    variant="white"
                                    id="dropdown-basic"
                                    className=" py-0"
                                  >
                                    Modules
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu className="p-0">
                                    <div className="d-flex dropdownmenuu ">
                                      <div className="">
                                        <Dropdown.Item href="#/action-1">
                                          Client Contacts
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                          Address Information
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                          CLient Note
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                          Instructions
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                          Balance/Credit
                                        </Dropdown.Item>
                                      </div>
                                      <div className="bg-light">
                                        {/* <Dropdown.Item> */}
                                        <Link
                                          to="/client/attachmentTable"
                                          className="link"
                                        >
                                          Attachment
                                        </Link>
                                        {/* </Dropdown.Item> */}
                                        {/* <Dropdown.Item> */}
                                        <Link
                                          to="/client/clientCalenderTable"
                                          className="link"
                                        >
                                          Client Calendar
                                        </Link>
                                        {/* </Dropdown.Item> */}
                                        {/* <Dropdown.Item> */}
                                        <Link
                                          to="/client/clientCredentialTable"
                                          className="link"
                                        >
                                          Client Credential
                                        </Link>
                                        {/* </Dropdown.Item> */}
                                        {/* <Dropdown.Item> */}
                                        <Link
                                          to="/client/contractTable"
                                          className="link"
                                        >
                                          Contacts
                                        </Link>
                                        {/* </Dropdown.Item> */}
                                        {/* <Dropdown.Item> */}
                                        <Link
                                          to="/client/departmentTable"
                                          className="link"
                                        >
                                          Department
                                        </Link>
                                        {/* </Dropdown.Item> */}
                                        {/* <Dropdown.Item> */}
                                        <Link
                                          to="/client/doNotScheduleTable"
                                          className="link"
                                        >
                                          Do Not Schedule
                                        </Link>
                                        {/* </Dropdown.Item> */}
                                        {/* <Dropdown.Item> */}
                                        <Link
                                          to="/client/invoiceAttachmentTable"
                                          className="link"
                                        >
                                          Invoice Attachment
                                        </Link>
                                        {/* </Dropdown.Item> */}
                                        {/* <Dropdown.Item> */}
                                        <Link
                                          to="/client/purshaseOrdersTable"
                                          className="link"
                                        >
                                          Purshase Orders
                                        </Link>
                                        {/* </Dropdown.Item> */}
                                        {/* <Dropdown.Item> */}
                                        <Link
                                          to="/client/ratesTable"
                                          className="link"
                                        >
                                          Rates
                                        </Link>
                                        {/* </Dropdown.Item> */}
                                        {/* <Dropdown.Item> */}
                                        <Link
                                          to="/client/workHistoryTable"
                                          className="link"
                                        >
                                          Work History
                                        </Link>
                                        {/* </Dropdown.Item> */}
                                      </div>
                                    </div>
                                  </Dropdown.Menu>
                                </Dropdown>
                                <Link to="/intouchTable">
                                  <i
                                    className="fa-solid fa-address-card"
                                    style={{ color: "green", padding: "3px" }}
                                  ></i>
                                </Link>
                                <i
                                  className="fa-solid fa-envelope"
                                  style={{
                                    color: "red",
                                    padding: "3px",
                                    cursor: "pointer",
                                  }}
                                ></i>
                                {/* <i
                className="fa-solid fa-database"
                style={{ color: "purple", padding: "3px" }}
              ></i> */}
                              
                              </div>
                            </td>
                            <td>
                            
                            </td>
                         
                  
                 
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
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

function Navv() {
  return (
    <Navbar expand="lg" className="navbar navv">
      <Container fluid className="mx-3">
        <Nav className=" my-2 my-lg-0">
          <ListGroup as="ul">
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/clients">
                <i className="fa-solid fa-square-plus"></i> New
              </Link>
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/clientTable">
                <i className="fa-solid fa-square-plus"></i> Edit View
              </Link>
              <div className="divOne">
                <div className="divOne_">
                  <div className="list d-flex flex-row">
                    <ListGroup as="ul" className="listOne">
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i className="fa-solid fa-pencil"></i>Edit Advanced
                          View
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i class="fa-solid fa-magnifying-glass"></i>
                          Current View
                          {/* <i className="fa-solid fa-arrow-right"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <NavLink to="">
                          <i class="fa-solid fa-floppy-disk"></i>
                          Saved View
                          {/* <i className="fa-solid fa-arrow-right ar"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <span className="pe-4"></span> All Statuses
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        {/* <NavLink to="#"> */}
                        {/* <i className="fa-solid fa-square-plus pe-1"></i> */}
                        <div className="d-flex gap-2">
                          <input type="checkbox" />
                          Active Clients
                        </div>
                        {/* </NavLink>/ */}
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        {/* <NavLink to="#"> */}
                        {/* <i className="fa-solid fa-square-plus pe-1"></i> */}
                        <div className="d-flex gap-2">
                          <input type="checkbox" />
                          InActive Clients
                        </div>
                        {/* </NavLink> */}
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        {/* <NavLink to="#"> */}
                        {/* <i className="fa-solid fa-square-plus pe-1"></i> */}
                        <div className="d-flex gap-2">
                          <input type="checkbox" />
                          Prospect Clients
                        </div>
                        {/* </NavLink> */}
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <span className="pe-4"></span>
                          Export Data
                        </NavLink>
                        <div>
                          <ListGroup as="ul" className="listOne ">
                            <ListGroupItem as="li">
                              
                            </ListGroupItem>
                            <ListGroupItem as="li">
                              <div>
                                {/* <NavLink to="/clientTable"> */}
                                <i className="fa-solid fa-square-plus pe-3"></i>
                                XML Language
                                {/* </NavLink> */}
                              </div>
                            </ListGroupItem>
                            <ListGroupItem as="li">
                             
                            </ListGroupItem>
                            <ListGroupItem as="li">
                           
                            </ListGroupItem>
                            <ListGroupItem as="li">
                             
                            </ListGroupItem>
                            {/* <ListGroupItem as="li">
                              <Modall
                                data={{
                                  name: "CSV Client Contacts (Comma Separated Values)",
                                  icon: "fa-solid fa-square-plus",
                                }}
                              />
                            </ListGroupItem> */}
                          </ListGroup>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i className="fa-solid fa-square-plus pe-1"></i>
                          Module Transactions
                        </NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </div>
                <div className="divOne_ listtt">
                  <div className="list  d-flex flex-row">
                    <ListGroup as="ul" className="listTwo">
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i className="fa-solid fa-pencil"></i>Edit Advanced
                          View
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i class="fa-solid fa-magnifying-glass"></i>
                          Current View
                          {/* <i className="fa-solid fa-arrow-right"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <NavLink to="">
                          <i class="fa-solid fa-floppy-disk"></i>
                          Saved View
                          {/* <i className="fa-solid fa-arrow-right ar"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i className="pe-3"></i> All Statuses
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i className="fa-solid fa-square-plus pe-1"></i>
                          Edit Advance View
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li">
                        <NavLink to="#">
                          <i className="fa-solid fa-square-plus pe-1"></i>
                          Edit Advance View
                        </NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/clientTable">
                <i className="fa-solid fa-square-plus"></i> Current View
              </Link>
              <div className="divOne">
                <div className="divOne_ list-inline">
                  <div className="list d-flex flex-row">
                    <ListGroup as="ul" className="listOne">
                      <ListGroup.Item as="li" className="border">
                        <NavLink to="#">
                          <i className="fa-solid fa-pencil"></i>Edit
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border">
                        <NavLink to="#">
                          <i class="fa-solid fa-magnifying-glass"></i>
                          Save
                          {/* <i className="fa-solid fa-arrow-right"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border">
                        <NavLink to="">
                          <i class="fa-solid fa-floppy-disk"></i>
                          Open
                          {/* <i className="fa-solid fa-arrow-right ar"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border">
                        <NavLink to="">
                          <i class="fa-solid fa-floppy-disk"></i>
                          Reset
                          {/* <i className="fa-solid fa-arrow-right ar"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border">
                        <NavLink to="">
                          <i class="fa-solid fa-floppy-disk"></i>
                          Apply Default
                          {/* <i className="fa-solid fa-arrow-right ar"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border">
                        <NavLink to="">
                          <i class="fa-solid fa-floppy-disk"></i>
                          Save Default
                          {/* <i className="fa-solid fa-arrow-right ar"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border">
                        <NavLink to="">
                          <i class="fa-solid fa-floppy-disk"></i>
                          Close
                          {/* <i className="fa-solid fa-arrow-right ar"></i> */}
                        </NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  <div className="px-1 border-bottom w-100">
                    <p>No View Set</p>
                  </div>
                  <div className="d-flex gap-2 p-1">
                    <div className="d-flex gap-2">
                      <input type="checkbox" />
                      <p>View items</p>
                    </div>
                    <div className="d-flex gap-2">
                      <input type="checkbox" />
                      <p>Custom items (click items to remove)</p>
                    </div>
                  </div>
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/clientTable">
                <i className="fa-solid fa-square-plus"></i> Email
              </Link>
              <div className="divOne ">
                <div className="divOne_">
                  <div className="list d-flex flex-row">
                    <ListGroup as="ul" className="w-100">
                      <ListGroup.Item as="li" className="border-bottom">
                        <NavLink to="#">All CLients in Current View</NavLink>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-0">
                        <NavLink to="#">Only Selected CLients</NavLink>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  {/* <div className="p-1 border-bottom w-100">
                    <Link to='/clientTable'>No View Set</Link>
                  </div>
                  <div className="p-1 border-bottom w-100">
                    <Link to='/clientTable'>No View Set</Link>
                  </div>   */}
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem as="li" className="py-1 px-3">
              <Link to="/clientTable">
                <i className="fa-solid fa-square-plus"></i> Reports
              </Link>
              <div className="divOne ">
                <div className="divOne_ hello">
                  <div className="list d-flex flex-row">
                    <ListGroup as="ul" className="w-100">
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Manage Reports..</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-plus"></i>
                            <NavLink to="#">New</NavLink>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Only Selected CLients</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Manage Reports..</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Only Selected CLients</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Manage Reports..</NavLink>

                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Only Selected CLients</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Manage Reports..</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Only Selected CLients</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Manage Reports..</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Only Selected CLients</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Manage Reports..</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Only Selected CLients</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Manage Reports..</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Only Selected CLients</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Manage Reports..</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                      <ListGroup.Item as="li" className="border-bottom">
                        <div className="reports_1">
                          <NavLink to="#">Only Selected CLients</NavLink>
                          <div className="reoprts__sub">
                            <i class="fa-solid fa-file-pdf"></i>
                            <i class="fa-solid fa-file-excel"></i>
                            <i class="fa-solid fa-file-word"></i>
                            <i class="fa-sharp fa-solid fa-note"></i>
                            <i class="fa-light fa-file-lines"></i>
                            <i class="fa-solid fa-pen-to-square"></i>
                          </div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  {/* <div className="p-1 border-bottom w-100">
                    <Link to='/clientTable'>No View Set</Link>
                  </div>
                  <div className="p-1 border-bottom w-100">
                    <Link to='/clientTable'>No View Set</Link>
                  </div>   */}
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Users;
