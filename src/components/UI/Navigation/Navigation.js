import React, {Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand tag={RouterNavLink} to='/'>My Blog</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to='/home'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to='/posts/add'>Add</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to='/about'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to='/contacts'>Contacts</NavLink>
                    </NavItem>

                </Nav>
            </Navbar>
        );
    }
}

export default Navigation;