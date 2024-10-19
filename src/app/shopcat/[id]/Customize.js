"use client";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Customize = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="customizebutton">
                <button 
                    onClick={handleShow} 
                    className='btn btn-block btn-warning w-100 mb-3'
                >
                    Customise
                </button>
            </div>

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Customize</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    somthing here
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Customize;
