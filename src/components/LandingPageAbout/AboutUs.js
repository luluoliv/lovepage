import React from 'react';
import './AboutUs.css' 
import { Form, Button, Modal, Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";

function AboutUsText(){

  const [openModal, setOpenModal] = useState(false);

  const handleClick = () =>{
    setOpenModal(!openModal)
  }

  
  return (
    <>
      <div className='bottom-items'>
        <span className='item'
        onClick={handleClick}
        >
          Entenda sobre o LovingDevs
        </span>
      </div>
    
      <Modal show={openModal} onHide={!openModal} centered>
        <Modal.Header closeButton onClick={handleClick}>
          <Modal.Title>O que é LovingDevs?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Carousel
          controls={false}
          >
            <Carousel.Item>
              <span>
                Motivação
              </span>
            </Carousel.Item>

            <Carousel.Item>
              <span>
                Motivação
              </span>
            </Carousel.Item>

            <Carousel.Item>
              <span>
                Motivação
              </span>
            </Carousel.Item>

          </Carousel>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default AboutUsText;
