import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Blogarticle() {
  return (
    <div>
        <Container fluid>
            <div className='mx-auto d-block mt-5 w-50'>
                <h1 className='fw-light text-center'>From Our<span className=' fw-bold' style={{color:"#90bc79"}}> Blog Articles </span></h1>
                <p className='text-center mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non <p>malesuada consequat, nibh erat tempus risus.</p></p>
            </div>
            <Row className='pcard'>
                <Col>
                <Card className='border mt-3 h-100'>
                    <Card.Body>
                        <img src='./img/blog-1.jpg' className='img-fluid mx-auto d-block mb-3' alt=''/>
                        <h5 className='fw-bold'>Foods that are good for your hair growing</h5>
                        <i className="fa-solid fa-eye me-1 text-secondary md-1 ms-0"></i>  9999 View
                        <i className="fa-solid fa-comments me-1 text-secondary"></i>  9999 Comments
                        <p className='fs-5 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                        <Button className='btn1'>Add To Cart</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='border mt-3 h-100'>
                    <Card.Body>
                        <img src='./img/blog-1.jpg' className='img-fluid mx-auto d-block mb-3' alt=''/>
                        <h5 className='fw-bold'>How to take care of hair naturally</h5>
                        <i className="fa-solid fa-eye me-1 text-secondary md-1"></i>  9999 Views
                        <i className="fa-solid fa-comments me-1 text-secondary"></i>  9999 Comments
                        <p className='fs-5 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                        <Button className='btn1'>Add To Cart</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className='border mt-3 h-100'>
                    <Card.Body>
                        <img src='./img/blog-1.jpg' className='img-fluid mx-auto d-block mb-3' alt=''/>
                        <h5 className='fw-bold'>How to use our natural & organic shampoo</h5>
                        <i className="fa-solid fa-eye me-1 text-secondary md-1"></i>  9999 Views
                        <i className="fa-solid fa-comments me-1 text-secondary"></i>  9999 Comments
                        <p className='fs-5 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                        <Button className='btn1'>Add To Cart</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Blogarticle
