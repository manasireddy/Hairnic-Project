import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Office from './Office'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div>
       <Container fluid>
        <div className='bgimg text-center text-white p-5 mb-4'>
        <h1>Contact</h1>
        <div className='d-flex align-items-center justify-content-center'>
          <a href='#' className='text-white'>Home </a>/ 
          <a href='#' className='text-white ms-2'>Pages </a>/ 
          <a href='#' className='text-white ms-2'>Contact</a> 
        </div>
        </div>
        </Container>
        <Office/>
        <Container fluid className='mt-5'>
        <h1 className='fw-light text-center'>If You Have Any Query,<span className=' fw-bold' style={{color:"#90bc79"}}> Please </span></h1>
        <h1 className='fw-bold text-center' style={{color:"#90bc79"}}>Contact Us</h1>
          <Row className='mt-5 cnt'> 
            <Col md={7}>
              <p>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.<Link to='#'>Download Now.</Link></p>
              <Row className='mt-4 mb-4'>
                <Col><input type='text' placeholder='Your Name' className='form-control'></input></Col>
                <Col><input type='email' placeholder='Your Email' className='form-control'></input></Col>
              </Row>
              <input type='text' placeholder='Subject' className='form-control mb-3'></input>
              <textarea rows={7} className='form-control mb-4' placeholder='Message'></textarea>
              <Button className='px-4 fs-5 w-100 mb-3' style={{backgroundColor:"#90bc79", border:"2px solid #90bc79"}}>Send Message</Button>
            </Col>
            <Col md={5}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3805468.258965761!2d76.989359!3d21.339543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1725280299690!5m2!1sen!2sbd" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Contact
