import React, {useState} from "react";
import {Link} from "react-router-dom";
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
import CartButton from "./common/CartButton";
import './NavbarApp.scss';

const NavbarApp = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="dark" dark expand="sm">
            <Container>
                <NavbarBrand tag={Link} to="/">Foode</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto custom" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/restaurants">
                                Restaurants
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <CartButton/>
                            </NavLink>
                        </NavItem>
                        {/*<NavItem>*/}
                        {/*    <NavLink disabled tag={Link} to="/about-us">*/}
                        {/*        About us*/}
                        {/*    </NavLink>*/}
                        {/*</NavItem>*/}
                        {/*<NavItem>*/}
                        {/*    <NavLink disabled tag={Link} to="/jobs">*/}
                        {/*        Jobs*/}
                        {/*    </NavLink>*/}
                        {/*</NavItem>*/}
                        {/*<NavItem>*/}
                        {/*    <NavLink disabled tag={Link} to="/contact">*/}
                        {/*        Contact*/}
                        {/*    </NavLink>*/}
                        {/*</NavItem>*/}
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
};

export default NavbarApp;