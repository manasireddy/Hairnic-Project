import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Products() {
    const [shamp,setShamp]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        getprods()
        getcart()
    },[])
    function getprods()
    {
        fetch("http://localhost:3000/prods").then((res1)=>{
            res1.json().then((res2)=>{
                console.log(res2)
                setShamp(res2)
            })
        })
    }
    function getcart()
    {
        fetch("http://localhost:3000/cart").then((res1)=>{
            res1.json().then((res2)=>{
                console.log(res2)
                setCart(res2)
            })
        })
    }
    function addtocart(item)
    {
        if(cart.some((c)=>c.id===item.id))
        {
            alert(item.name + "is already added in the cart")
        }
        else
        {
            fetch("http://localhost:3000/cart",{
                method:"post",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(item)
            }).then((res1)=>{
                res1.json().then((res2)=>{
                    console.log(res2)
                    getcart()
                })
            })
        }
    }
  return (
    <div>
         <Container fluid className='text-center mt-5'>
            <h1 className='fw-light'>Our Natural<span className=' fw-bold' style={{color:"#90bc79"}}> Hair Products </span></h1>
            <p className='fs-5 mt-3 text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non <p>malesuada consequat, nibh erat tempus risus.</p></p>
            <Row className='gap-3 mt-5 pcard'>
                {
                    shamp.map((item,index)=>{
                        return (
                            <Col key={index}>
                                <Card className='text-center border'>
                                    <Card.Body>
                                        <img src={item.image} className='img-fluid mx-auto d-block mb-3' alt='' />
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i> (99)
                                        <h6 className='fw-bold'>{item.name}</h6>
                                        <h5 style={{ color: "#90bc79" }} className='fw-bold'>{item.price}</h5>
                                        <Button className='btn1' onClick={()=>addtocart(item)}>Add To Cart</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>      
        </Container>
    </div>
  )
}

export default Products
