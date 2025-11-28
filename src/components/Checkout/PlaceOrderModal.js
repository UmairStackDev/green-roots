// PlaceOrderModal.js

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function PlaceOrderModal({ isOpen, onClose, onConfirm }) {
  return (
    <Modal show={isOpen} onHide={onClose}>
      {/* Modal content goes here */}
      <Modal.Header closeButton>
        <Modal.Title>Place Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add your modal content here */}
        Your order has been succesfully confirmed. <br /> Our representative will call you shortly. <br /> Thank you for your order.
      </Modal.Body>
      <Modal.Footer>
     <Link to="/home"> <button onClick={onClose} style={{padding:'3px 15px'}}>OK</button></Link>
      </Modal.Footer>
    </Modal>
  );
}

export default PlaceOrderModal;
