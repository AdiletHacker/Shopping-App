import React, { Fragment, useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import { connect } from 'react-redux';
import { setItem } from '../store/item';

const ShoppingList = (props) => {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState("");

    const toggle = () => {
        setModal(!modal);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        props.setItem(name);
        setName("");
        toggle();
    };

    const onChange = (e) => {
        setName(e.target.value);
    };


    return <Fragment>
        <Button color="dark"
            className="mb-3"
            onClick={toggle}
        >Add Item</Button>

        <Modal isOpen={modal}
            toggle={toggle}>
            <ModalHeader toggle={toggle}>Add to Shopping List!</ModalHeader>
            <ModalBody>
                <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <Label for="item">Item:</Label>
                        <Input
                            type="text"
                            name="name"
                            id="item"
                            placeholder="add item"
                            onChange={onChange} />
                        <Button type="submit"
                            color="dark"
                            className="mt-4"
                            block
                        >Add Item!</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
    </Fragment>
};


const mapStateToProps = state => ({
    items: state.item.items
});

export default connect(mapStateToProps, { setItem })(ShoppingList);
