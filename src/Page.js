import React from 'react';
import { Card, Row, Button, Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Carousel } from 'react-bootstrap'

const number = Math.floor(Math.random() * 1000)
const cardStyle = { width: "18rem", height: "20rem" }

function Heading() {
    return (
        <Navbar bg="dark" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#" className='text-white'>Cluck Cluck Fries!</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" className='bg-secondary'/>
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel" >Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">About</Nav.Link>
                            <NavDropdown title="Other" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="#action3">Mission statement</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Join our Team</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Contact
                            </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

function MyCarousel() {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="ReactRest1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className='text-white'>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="ReactRest2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="ReactRest3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className='text-white'>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
/*Older version before react bootstrap*/

    // <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    //     <div class="carousel-indicators">
    //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    //         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    //     </div>
    //     <div class="carousel-inner">
    //         <div class="carousel-item active">
    //             <img src="Rest.jpg" class="d-block w-100" alt="..." />
    //             <div class="carousel-caption d-none d-md-block">
    //                 <h5>First slide label</h5>
    //                 <p>Some representative placeholder content for the first slide.</p>
    //             </div>
    //         </div>
    //         <div class="carousel-item">
    //             <img src="Rest2.jpg" class="d-block w-100" alt="..." />
    //             <div class="carousel-caption d-none d-md-block">
    //                 <h5>Second slide label</h5>
    //                 <p>Some representative placeholder content for the second slide.</p>
    //             </div>
    //         </div>
    //         <div class="carousel-item">
    //             <img src="Rest3.jpg" class="d-block w-100" alt="..." />
    //             <div class="carousel-caption d-none d-md-block">
    //                 <h5>Third slide label</h5>
    //                 <p>Some representative placeholder content for the third slide.</p>
    //             </div>

    //         </div>
    //     </div>
    //     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //         <span class="visually-hidden">Previous</span>
    //     </button>
    //     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //         <span class="visually-hidden">Next</span>
    //     </button>
    // </div>
}

function ThreeCards(props) {
    return (
        <Row style={{ display: 'flex', justifyContent: 'center' }} className='text-center '>
            <Card border="light" style={cardStyle} className='bg-secondary m-5 me-5 ms-5'>
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className='text-light'>{props.arr.length > 0 && props.arr[1].name}</Card.Title>
                    <Card.Text className='mt-auto'>
                        {props.arr.length > 0 && props.arr[1].description}
                    </Card.Text>
                    <Card.Subtitle className="mt-auto text-dark">{'$' + Math.floor(Math.random() * number)}</Card.Subtitle>
                    <Button className='mt-auto' href="#">Add to Cart</Button>
                </Card.Body>
            </Card>

            <Card border="light" style={cardStyle} className='bg-secondary m-5 me-5 ms-5'>
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className='text-light'>{props.arr.length > 0 && props.arr[2].name}</Card.Title>
                    <Card.Text className='mt-auto'>
                        {props.arr.length > 0 && props.arr[2].description}
                    </Card.Text>
                    <Card.Subtitle className="mt-auto text-dark">{'$' + Math.floor(Math.random() * number)}</Card.Subtitle>
                    <Button className='mt-auto' href="#">Add to Cart</Button>
                </Card.Body>
            </Card>
            <Card border="light" style={cardStyle} className='bg-secondary m-5 me-5 ms-5'>
                <Card.Body className='d-flex flex-column'>
                    <Card.Title className='text-light'>{props.arr.length > 0 && props.arr[3].name}</Card.Title>
                    <Card.Text className='mt-auto'>
                        {props.arr.length > 0 && props.arr[3].description}
                    </Card.Text>
                    <Card.Subtitle className="mt-auto text-dark">{'$' + Math.floor(Math.random() * number)}</Card.Subtitle>
                    <Button className='mt-auto' href="#">Add to Cart</Button>
                </Card.Body>
            </Card>
        </Row>
    )
/*Older version before react bootstrap*/

    // <div className='row m-5 me-5' >
    //     <div className='col-4 mt-4'>
    //         <div className="card" style={cardStyle}>
    //             <div className="card-body bg-warning">
    //                 <h5 className="card-title">{props.arr.length > 0 && props.arr[1].name}</h5>
    //                 <p className="card-text">{'$' + Math.floor(Math.random() * number)}</p>
    //                 <p href="#" className="card-link">{props.arr.length > 0 && props.arr[1].description}</p>
    //                 <button href="#" className="card-link">Add to cart!</button>
    //             </div>
    //         </div>
    //     </div>
    //     <div className='col-4 mt-4'>
    //         <div className="card" style={cardStyle}>
    //             <div className="card-body bg-warning">
    //                 <h5 className="card-title">{props.arr.length > 0 && props.arr[2].name}</h5>
    //                 <p className="card-text">{'$' + Math.floor(Math.random() * number)}</p>
    //                 <p href="#" className="card-link">{props.arr.length > 0 && props.arr[2].description}</p>
    //                 <button href="#" className="card-link">Add to cart!</button>
    //             </div>
    //         </div>
    //     </div>
    //     <div className='col-4 mt-4'>
    //         <div className="card" style={cardStyle}>
    //             <div className="card-body bg-warning">
    //                 <h5 className="card-title">{props.arr.length > 0 && props.arr[3].name}</h5>
    //                 <p className="card-text">{'$' + Math.floor(Math.random() * number)}</p>
    //                 <p href="#" className="card-link">{props.arr.length > 0 && props.arr[3].description}</p>
    //                 <button href="#" className="card-link">Add to cart!</button>
    //             </div>
    //         </div>
    //     </div>
    // </div>
}


export default function Page(props) {
    return (
        <div className='container text-center bg-dark' >
            <Heading />
            <MyCarousel />
            <ThreeCards arr={props.arr1} />
            <ThreeCards arr={props.arr2} />
            <ThreeCards arr={props.arr3} />
            <ThreeCards arr={props.arr4} />
            <ThreeCards arr={props.arr5} />
        </div>
    )
}