import React from 'react'
import { Container } from 'react-bootstrap'
import Products from './Products'

function Shampoo() {
  return (
    <div>
        <Container fluid>
        <div className='bgimg text-center text-white p-5 mb-4'>
        <h1>Products</h1>
        <div className='d-flex align-items-center justify-content-center'>
          <a href='#' className='text-white'>Home </a>/ 
          <a href='#' className='text-white ms-2'>Pages </a>/ 
          <a href='#' className='text-white ms-2'>Product</a> 
        </div>
        </div>
        </Container>
        <Products/>
    </div>
  )
}

export default Shampoo
