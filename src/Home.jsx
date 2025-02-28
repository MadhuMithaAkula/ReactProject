import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Import Link for navigation
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/Home.png"
                        alt="First slide"
                        style={{ width: '200%', height: '100vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Your Shopping, Delivered</h3>
                        <p>Experience the convenience of shopping from home, with fast, reliable delivery right to your door.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/veggie.png"
                        alt="Second slide"
                        style={{ width: '200%', height: '100vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Vegetables</h3>
                        <p>Fresh, healthy vegetables straight from the farm.</p>
                        {/* Redirect button to vegetable page */}
                        <Link to="/Veg" className="btn btn-primary">
                            Explore Vegetables
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/Nv.png"
                        alt="Third slide"
                        style={{ width: '200%', height: '100vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Non-Veggies</h3>
                        <p>Packed with nutrients for your daily diet.</p>
                        <Link to="/Nonveg" className="btn btn-primary">
                            Explore non-veg
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/Milks.png"
                        alt="Fourth slide"
                        style={{ width: '200%', height: '100vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Fresh Milk</h3>
                        <p>Pure, fresh milk directly from the farm.</p>
                        <Link to="/Milk" className="btn btn-primary">
                            Explore Milks
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/Chocoies.png"
                        alt="Fifth slide"
                        style={{ width: '200%', height: '100vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Delicious Chocolates</h3>
                        <p>Indulge in the finest, creamy chocolates.</p>
                        <Link to="/Chocolates" className="btn btn-primary">
                            Explore Chocoies
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/cakes.png"
                        alt="Sixth slide"
                        style={{ width: '200%', height: '100vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Yummy Cakes</h3>
                        <p>Freshly baked cakes to satisfy your sweet cravings.</p>
                        <Link to="/Cakes" className="btn btn-primary">
                            Explore Cakes
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/fruits.png"
                        alt="Seventh slide"
                        style={{ width: '200%', height: '100vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Fresh Fruits</h3>
                        <p>A variety of seasonal and exotic fruits for you.</p>
                        <Link to="/Fruits" className="btn btn-primary">
                            Explore Fruits
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/snacks.png"
                        alt="Eighth slide"
                        style={{ width: '200%', height: '100vh', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>Scrumptious Snacks</h3>
                        <p>Enjoy a variety of tasty and crunchy snacks.</p>
                        <Link to="/Snacks" className="btn btn-primary">
                            Explore Snacks
                        </Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Home;


