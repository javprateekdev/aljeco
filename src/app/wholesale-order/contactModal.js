import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'; // Import Button

const ContactModal = ({ show, handleClose }) => {  // Receive show prop
  return (
    <Modal centered size='lg' show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Summer Dress</Modal.Title>
      </Modal.Header>
      <Modal.Body>
            <div className="row align-items-center">
                <div className="col-md-4">
                    <img src="https://m.media-amazon.com/images/I/61bM2uv0ylL._SY741_.jpg" className='img-fluid' alt="Shirt"/>
                </div>
                <div className="col-md-8">
                    <h4><strong>Contact Seller</strong> and get details on your mobile quickly</h4>
                    <p>Mobile Number</p>
                    <input type="tel" className='form-control' placeholder='Enter your number'/>
                    <button className='btn btn-primary mt-3'>Submit</button>
                </div>
            </div>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
