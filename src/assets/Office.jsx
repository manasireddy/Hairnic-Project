import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

function Office() {
  return (
    <div>
        <Container>
           <Row className='gap-4 mt-5 mb-5'>
            <Col>
                <Card className='text-center'>
                    <Card.Body className='ncard px-3 py-5 border'>
                    <i class="fa-solid fa-location-dot fs-1"></i>
                    <h4 className='text-white mt-4 fw-bold'>Office Address</h4>
                    <h4 className='text-white fw-light'>123 Street, New York, USA</h4>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className='text-center'>
                    <Card.Body className='ncard px-3 py-5 border'>
                    <i class="fa-solid fa-phone fs-1"></i>
                    <h4 className='text-white mt-4 fw-bold'>Call Us</h4>
                    <h4 className='text-white fw-light'>+012 345 67890</h4>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className='text-center'>
                    <Card.Body className='ncard px-3 py-5 border'>
                    <i class="fa-solid fa-envelope fs-1"></i>
                    <h4 className='text-white mt-4 fw-bold'>Mail Us</h4>
                    <h4 className='text-white fw-light'>info@example.com</h4>
                    </Card.Body>
                </Card>
            </Col>
           </Row>
        </Container>
    </div>
  )
}

export default Office