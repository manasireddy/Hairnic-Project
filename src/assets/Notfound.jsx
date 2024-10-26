import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Notfound() {
  return (
    <div>
        <Container fluid>
        <div className='bgimg text-center text-white p-5 mb-4'>
        <h1>4O4 Error</h1>
        <div className='d-flex align-items-center justify-content-center'>
          <a href='#' className='text-white'>Home </a>/ 
          <a href='#' className='text-white ms-2'>Pages </a>/ 
          <a href='#' className='text-white ms-2'>4O4 Error</a> 
        </div>
        </div>
        </Container>
        <Container className='mt-5 mb-5 text-center'>
        <i className="fa-solid fa-triangle-exclamation fs-1" style={{color:"#90bc79"}}></i>
            <h1 className='fw-bold'>4O4</h1>
            <h3 className='fw-bold'>Page Not Found</h3>

            <p>We’re sorry, the page you have looked for does not exist in our website! Maybe
                <p>go to our home page or try to use a search?</p></p>
            <Button className='px-4 fs-5 mt-3' style={{ backgroundColor: "#90bc79", border: "2px solid #90bc79" }}>Go Back To Home</Button>
        </Container>

    </div>
  )
}

export default Notfound
