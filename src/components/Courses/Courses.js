import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import Course from '../../asset/image/C2.jpg'

class Courses extends Component {
    render() {
        return (

            <Fragment>
                    <Container className="text-center">
                        <h1 className="serviceMainTitle">OUR COURSES</h1>
                        <Row>
                            <Col lg={6} md={12} sm={12} className="p-2">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="courseImg" alt=" " src={Course} />
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="text-justify courseTitle">Web Development</h5>
                                        <p className="text-justify courseDes">I build native and cross platfrom mobile app for your business app for your business</p>
                                        <Link  className="courseDetails float-left" to="/Update">Details</Link>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} md={12} sm={12} className="p-2">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="courseImg" alt=" " src={Course} />
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="text-justify courseTitle">App Development</h5>
                                        <p className="text-justify courseDes" >I build native and cross platfrom mobile app for your business app for your business</p>
                                        <Link  className="courseDetails float-left" to="/Update">Details</Link>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} md={12} sm={12} className="p-2">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="courseImg" alt=" " src={Course} />
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="text-justify courseTitle">Rest API Development</h5>
                                        <p className="text-justify courseDes" >I build native and cross platfrom mobile app for your business app for your business</p>
                                        <Link  className="courseDetails float-left" to="/Update">Details</Link>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} md={12} sm={12} className="p-2">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <img className="courseImg" alt=" " src={Course} />
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                        <h5 className="text-justify courseTitle">E-Commerce-Site Development</h5>
                                        <p className="text-justify courseDes" >I build native and cross platfrom mobile app for your business app for your business</p>
                                        <Link  className="courseDetails float-left" to="/Update">Details</Link>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
            </Fragment>
        );
    }
}
export default Courses;