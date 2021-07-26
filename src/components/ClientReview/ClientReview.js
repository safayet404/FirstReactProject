import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import Clint1 from '../../asset/image/Clint1.png';
import Clint2 from '../../asset/image/Clint2.jpg';
import Clint3 from '../../asset/image/Clint3.jpg';

class ClientReview extends Component {
    render() {
        var settings = {
            autoplaySpeed:3000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>

                <Container className="text-center">
                    <h1 className="serviceMainTitle">CLIENT SAYS</h1>
                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" alt=" " src={Clint1} />
                                    <h1 className="clintName">Tommy Boseman</h1>
                                    <p className="serviceDescription" >It's a nice experience to work with him.He is a good developer also a good person.</p>
                                </Col>
                            </Row>
                        </div>


                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" alt=" " src={Clint2}/>
                                    <h1 className="clintName">Moises Henrecues</h1>
                                    <p className="serviceDescription">This guy is awesome.He can write codes in a nice format.This is nice to have this guy in my project.</p>
                                </Col>
                            </Row>
                        </div>


                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" alt=" " src={Clint3}/>
                                    <h1 className="clintName">Arina Leo</h1>
                                    <p className="serviceDescription">Highly appreciate him.A good coder with a good soul.</p>
                                </Col>
                            </Row>
                        </div>

                    </Slider>



                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;