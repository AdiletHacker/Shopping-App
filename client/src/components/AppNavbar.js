import React, { useState, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from "reactstrap";

const AppNavbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return <Fragment>
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">Shopping List</NavbarBrand>
                <NavbarToggler onClick={ toggle } />
                <Collapse isOpen={ isOpen } navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="http://youtube.com">YouTube</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </Fragment>
};

export default AppNavbar;
