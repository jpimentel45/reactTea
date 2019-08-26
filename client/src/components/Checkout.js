import React from "react"
// import Navbar
// import Jumbotron(header)

// require styling
import './CSS/style.css';

import { ButtonToolbar, Button, Container, Row, Col, } from "react-bootstrap";

import order from '../order.jpg';

class Checkout extends Component {
    render() {
        return (
            <div>

                <div>
                    <img src={order} className="order-img" alt="order" />
                </div>


                <Container>
                    <Row>
                        <h3>Your Order</h3>
                    </Row>


                    <Row>
                        <Col>
                            <p>Green Apple 青蘋果 </p>
                            <p>Tax</p>
                            <p>Total</p>
                        </Col>
                        <Col>
                            <p>$4.25</p>
                            <p>$0.12</p>
                            <p>$4.37</p>
                        </Col>
                    </Row>

                    <Row>
                        <ButtonToolbar>
                            <Button variant="primary">Place Order</Button>
                        </ButtonToolbar>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Checkout;