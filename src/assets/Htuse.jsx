import React from 'react'
import { Container } from 'react-bootstrap'
import Natural from './Natural'
import Use from './Use'

function Htuse() {
  return (
    <div>
        <Container fluid>
        <div className='bgimg text-center text-white p-5 mb-4'>
        <h1>How to Use</h1>
        <div className='d-flex align-items-center justify-content-center'>
          <a href='#' className='text-white'>Home </a>/ 
          <a href='#' className='text-white ms-2'>Pages </a>/ 
          <a href='#' className='text-white ms-2'>How to Use</a> 
        </div>
        </div>
        </Container>
        <Natural/>
        <Use/>
    </div>
  )
}

export default Htuse
