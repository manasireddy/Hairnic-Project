import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Benefits() {
  return (
    <div className='text-center mt-5'>
        <Container fluid>
            <h1 className='fw-light'>Best Benefits Of Our<span className=' fw-bold' style={{color:"#90bc79"}}> Natural </span></h1>
            <h1 className='fw-bold' style={{color:"#90bc79"}}>Hair Shampoo</h1>
            <p className='fs-5 mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non <p>malesuada consequat, nibh erat tempus risus.</p></p>
            <Row className='mt-4 m-0'>
            <Col>
            {/* natural & organic */}
            <div className='d-flex'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                <div className='ps-3 text-start'>
                    <h4><span className='border-bottom border-3 pb-2'>Natural</span> & Organic</h4>
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                </div>
            </div>
            {/* anti hair fall*/}
            <div className='d-flex mt-4'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                <div className='ps-3 text-start '>
                    <h4><span className='border-bottom border-3 pb-2'>Anti Hai</span>r Fall</h4>
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                </div>
            </div>
            {/* anti dandruff */}
            <div className='d-flex mt-4'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                <div className='ps-3 text-start '>
                    <h4><span className='border-bottom border-3 pb-2'>Anti-da</span>ndruff</h4>
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                </div>
            </div>
            </Col>
            <Col>
                <img src='./img/shampoo.png' className='img-fluid mx-auto d-block w-100 image' alt=''/>
            </Col>
            <Col>
            {/* side effect */}
            <div className='d-flex'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                <div className='ps-3 text-start '>
                    <h4><span className='border-bottom border-3 pb-2'>No Inter</span>nal Side Effect</h4>
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                </div>
            </div>
            {/* skin irritation */}
            <div className='d-flex mt-4'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                <div className='ps-3 text-start '>
                    <h4><span className='border-bottom border-3 pb-2'>No Skin</span> Irratation</h4>
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                </div>
            </div>
            {/* artifical smell */}
            <div className='d-flex mt-4'>
                <div className='h-25 w-25 rounded-circle p-3 fs-1 border' style={{color:"#90bc79"}}><i className="fa-solid fa-check"></i></div>
                <div className='ps-3 text-start '>
                    <h4><span className='border-bottom border-3 pb-2'>No Artificial</span> Smell</h4>
                    <p className='mt-4'>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                </div>
            </div>
            </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Benefits
