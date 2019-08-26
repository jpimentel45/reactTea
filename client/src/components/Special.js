import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux'
import { getItems} from '../actions/itemActions'
import PropTypes from 'prop-types'

class ShoppingList extends Component {
    componentDidMount() {
        this.props.getItems();
    }

 
    render() {
        //using destructuring instead of this.state.items
        const { items } = this.props.item;

        return (

            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name, date }) => (
                            <CSSTransition key={_id} >
                                <ListGroupItem>
                                    {name}
                                    {date}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>

        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, { getItems})(ShoppingList);