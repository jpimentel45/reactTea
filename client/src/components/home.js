import React, { Component } from 'react'
import { Container, Row, Col, } from "react-bootstrap";

import home from '../home.jpg';

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        return (
            <div>
                <div>
                    <img src={home} className="home-img" alt="home" />
                </div>

                <Container className="home-info">
                    <Row>
                        <Col>
                            <Row>
                                <Col>
                                    <h2>LOCATIONS</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>West Covina</h4>
                                    <p>2540 S. Azusa Ave</p>
                                    <p>West Covina, CA 91792</p>
                                    <p>(626)541-7020</p>
                                </Col>
                                <Col>
                                    <h4>Pasedena</h4>
                                    <p>1443 E. Colorado Blvd</p>
                                    <p>Pasadena, CA 91107</p>
                                    <p>(626)396-0886</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col>
                            <Row>
                                <Col>
                                    <h2>BUSINESS HOURS</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h4>Monday — Friday</h4>
                                    <p>10:00 am — Midnight</p>
                                </Col>
                                <Col>
                                    <h4>Saturday — Sunday</h4>
                                    <p>11:00 am — Midnight</p>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>

            </div>


        )

    }
}

export default Home
