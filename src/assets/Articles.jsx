import React from 'react'
import { Container } from 'react-bootstrap'
import Blogarticle from './Blogarticle'

function Articles() {
  return (
    <div>
        <Container fluid>
        <div className='bgimg text-center text-white p-5 mb-4'>
        <h1>Blog Articles</h1>
        <div className='d-flex align-items-center justify-content-center'>
          <a href='#' className='text-white'>Home </a>/ 
          <a href='#' className='text-white ms-2'>Pages </a>/ 
          <a href='#' className='text-white ms-2'>Blog Articles</a> 
        </div>
        </div>
        </Container>
        <Blogarticle/>
    </div>
  )
}

export default Articles