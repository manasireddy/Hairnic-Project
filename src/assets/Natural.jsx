import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

function Natural() {
  return (
    <div>
        <Container>
           <Row className='gap-4 mt-5'>
            <Col>
                <Card className='text-center'>
                    <Card.Body className='ncard px-3 py-5 border'>
                    <i className="fa-solid fa-leaf fs-1"></i>
                    <h4 className='text-white mt-4 fw-bold'>100% Natural</h4>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className='text-center'>
                    <Card.Body className='ncard px-3 py-5 border'>
                    <i class="fa-solid fa-droplet-slash fs-1"></i>
                    <h4 className='text-white mt-4 fw-bold'>Anti Hair Fall</h4>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className='text-center'>
                    <Card.Body className='ncard px-3 py-5 border'>
                    <i class="fa-solid fa-xmark fs-1"></i>
                    <h4 className='text-white mt-4 fw-bold'>Hypoallergenic</h4>
                    </Card.Body>
                </Card>
            </Col>
           </Row>
        </Container>
    </div>
  )
}

export default Natural
