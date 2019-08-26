// Include React
import React, { Component } from "react";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Card from "react-bootstrap/Card";
// import ButtonToolbar from "react-bootstrap/ButtonToolbar";
// import Button from "react-bootstrap/Button";
import { Form, Card, ButtonToolbar, Button, Container, Row, Col, } from "react-bootstrap";
import './CSS/style.css';

import menu from '../menu.jpg';
// import Jumbotron from './Jumbotron'


// import nav bar
// import pictures

// Create drinks menu component
export default class Menu extends Component {
    render() {
        return (
            <div>


                <div>
                    <img src={menu} className="menu-img" alt="menu" />

                </div>

                <Container>
                    <div className="container" id="menuItems">
                        <Row>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <h2>
                                            Smoothies
                            </h2>
                                        <p className="soy">
                                            Soymilk and Almond Milk available on request. Orgnaic milk 60¢
                            </p>
                                        <h4>$4.25</h4>
                                        <Form>
                                            {['radio'].map(type => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`default-${type}`}
                                                        label={`Green Apple ${type}`}
                                                    />
                                                </div>
                                            ))}
                                            {['radio'].map(type => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`default-${type}`}
                                                        label={`Mango ${type}`}
                                                    />
                                                </div>
                                            ))}
                                            {['radio'].map(type => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`default-${type}`}
                                                        label={`Passion Fruit ${type}`}
                                                    />
                                                </div>
                                            ))}
                                            {['radio'].map(type => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`default-${type}`}
                                                        label={`Peach ${type}`}
                                                    />
                                                </div>
                                            ))}
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <h2>
                                            Fresh Fruit Juice
                            </h2>
                            
                                        <h4>$4.75</h4>
                                        <Form>
                                            {['radio'].map(type => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`default-${type}`}
                                                        label={`Honey Dew${type}`}
                                                    />
                                                </div>
                                            ))}
                                            {['radio'].map(type => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`default-${type}`}
                                                        label={`Orange ${type}`}
                                                    />
                                                </div>
                                            ))}
                                            {['radio'].map(type => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`default-${type}`}
                                                        label={`Watermelon ${type}`}
                                                    />
                                                </div>
                                            ))}
                                            {['radio'].map(type => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`default-${type}`}
                                                        label={`Lemon Honey ${type}`}
                                                    />
                                                </div>
                                            ))}
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <Card.Body>
                                        <h2>
                                            Coffee
                            </h2>
                                        <h4>$4.75</h4>
                                        <Form>
                                            {['radio'].map(type => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`default-${type}`}
                                                        label={`Americano ${type}`}
                                                    />
                                                </div>
                                            ))}
                                            {['radio'].map(type => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`default-${type}`}
                                                        label={`Hot Chocolate ${type}`}
                                                    />
                                                </div>
                                            ))}
                                            {['radio'].map(type => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`default-${type}`}
                                                        label={`Latte ${type}`}
                                                    />
                                                </div>
                                            ))}
                                            {['radio'].map(type => (
                                                <div key={`default-${type}`} className="mb-3">
                                                    <Form.Check
                                                        type={type}
                                                        id={`default-${type}`}
                                                        label={`Sea Salt Latte ${type}`}
                                                    />
                                                </div>
                                            ))}
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </div>
                </Container>
                <ButtonToolbar>
                    <Button variant="primary">Checkout</Button>
                </ButtonToolbar>

            </div>
        )
    }
}