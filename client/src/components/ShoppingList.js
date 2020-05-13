import React, { Fragment, useEffect } from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button
} from "reactstrap";
import { connect } from 'react-redux';
import ItemModal from './ItemModal';
import { getItems, deleteItem } from '../store/item';

const ShoppingList = (props) => {
    useEffect(() => {
        props.getItems();
    }, []);

    return <Fragment>
        <Container>
            <ItemModal />
            <ListGroup>
                {props.items.map(item => (
                    <ListGroupItem key={item._id}>
                        <Button className="remove-btn mr-2"
                            color="danger" size="sm"
                            onClick={() => {
                                props.deleteItem(item._id);
                            }}>
                            &times;</Button>
                        {item.name}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </Container>
    </Fragment>
};


const mapStateToProps = state => ({
    items: state.item.items
});

export default connect(mapStateToProps, { deleteItem, getItems })(ShoppingList);
