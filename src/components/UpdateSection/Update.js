import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Update extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="updateBanner p-0" >
                    <div className="updateBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">

                                    <h1 className="updateText">IT WILL BE UPDATED VERY SOON</h1>
                                    <h3 className="updateSubText">THANK YOU</h3>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>


            </Fragment>
        );
    }
}

export default Update;