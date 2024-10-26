import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Healthyhair() {
  return (
    <div className='mt-5 mb-4'>
        <Container>
        <Row className='mt-5 align-items-center'>
            <Col>
                <img src='./img/shampoo-1.png' className='img-fluid mx-auto d-block w-100 image' alt=''/>
            </Col>
            <Col>
                <h1 className='display-6'><span className=' fw-bold' style={{color:"#90bc79"}}>Healthy Hair</span> Is A Symbol Of Our Beauty</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est.</p>
                <p>Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor.</p>
                <Button className='px-4 fs-5 mt-3' style={{backgroundColor:"#90bc79", border:"2px solid #90bc79"}}>Shop Now</Button>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Healthyhair