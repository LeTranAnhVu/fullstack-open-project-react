import React, {useState} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from 'reactstrap';

const NavbarApp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="dark" dark expand="sm">
            <Container>
                <NavbarBrand href="/">Wolt</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/shops">Restaurants</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about-us">About us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/jobs">Jobs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
};

export default NavbarApp;