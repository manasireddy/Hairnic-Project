import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Use() {
  return (
    <div>
        <Container fluid className='bgimg mt-5 text-center'>
            <Container className='p-5'>
                <h1 className='fw-light w-50 mx-auto d-block'>How To Use Our<span className='fw-bold text-white'> Natural & Organic</span> Hair Shampoo</h1>
                <p className='mt-3 text-white mx-auto d-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non <p>malesuada consequat, nibh erat tempus risus.</p></p>
            </Container>
            <Row>
              <Col>
                  <i className="fa-solid fa-house-chimney text-dark rounded-circle border p-4 fs-1"></i>
                  <div className='text-white ps-3'>
                    <h4>Wash<span className='border-bottom border-3 pb-2'> Hair With </span>Water</h4>
                    <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                  </div>
              </Col>
              <Col>
                  <i className="fa-solid fa-house-chimney text-dark rounded-circle border p-4 fs-1"></i>
                  <div className='text-white ps-3'>
                    <h4>Apply<span className='border-bottom border-3 pb-2'> Shampoo </span> On Hair</h4>
                    <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                  </div>
              </Col>
              <Col>
                  <i className="fa-solid fa-house-chimney text-dark rounded-circle border p-4 fs-1"></i>
                  <div className='text-white ps-3'>
                    <h4>Wait 5<span className='border-bottom border-3 pb-2'> Mins And </span>Wash</h4>
                    <p className='p-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                  </div>
            </Col>  
          </Row>
      
        </Container>
    </div>
  )
}

export default Use
