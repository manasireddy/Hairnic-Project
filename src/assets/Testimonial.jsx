import React from 'react'
import { Container } from 'react-bootstrap'
import Natural from './Natural'
import Customer from './Customer'

function Testimonial() {
  return (
    <div>
        <Container fluid>
        <div className='bgimg text-center text-white p-5 mb-4'>
        <h1>Testimonial</h1>
        <div className='d-flex align-items-center justify-content-center'>
          <a href='#' className='text-white'>Home </a>/ 
          <a href='#' className='text-white ms-2'>Pages </a>/ 
          <a href='#' className='text-white ms-2'>Testimonial</a> 
        </div>
        </div>
        </Container>
        <Natural/>
        <Customer/>
    </div>
  )
}

export default Testimonial