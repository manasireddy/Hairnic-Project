import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

function Customer() {
  return (
    <div>
        <Container fluid className='bgimg mt-5 p-5 text-center text-white'>
            <div className='w-50 mx-auto d-block'>
                <h1 className='fw-bold'>Our Customer Said <span className='fw-light text-dark'>About Our Natural Shampoo</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
            </div>
            <Carousel>
            <Carousel.Item>
                <img src='./img/testimonial-1.jpg' alt='' className='img-fluid mx-auto d-block rounded-circle border p-2'/>
                <p className='fs-4 fw-light w-75 mt-4 mx-auto d-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</p>
                <h5 className='text-dark fw-bold'>Client Name</h5>
                <p><em>Profession</em></p>
            </Carousel.Item>
            <Carousel.Item>
                <img src='./img/testimonial-2.jpg' alt='' className='img-fluid mx-auto d-block rounded-circle border p-2'/>
                <p className='fs-4 fw-light w-75 mt-4 mx-auto d-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</p>
                <h5 className='text-dark fw-bold'>Client Name</h5>
                <p><em>Profession</em></p>
            </Carousel.Item>
            <Carousel.Item>
                <img src='./img/testimonial-3.jpg' alt='' className='img-fluid mx-auto d-block rounded-circle border p-2'/>
                <p className='fs-4 fw-light w-75 mt-4 mx-auto d-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est. Nullam scelerisque libero nunc, vitae ullamcorper elit volutpat ut.</p>
                <h5 className='text-dark fw-bold'>Client Name</h5>
                <p><em>Profession</em></p>
            </Carousel.Item>
            </Carousel>
        </Container>
    </div>
  )
}

export default Customer