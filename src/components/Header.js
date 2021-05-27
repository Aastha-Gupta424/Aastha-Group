import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Logo from './logo.png';


class Header extends Component {

    constructor(props) {
        super(props);

    }




    render() {
        return (
            <>

                <Navbar style={{
                    display: "contents"
                }}
                >
                    
                    <Nav>

                        <NavbarBrand className="mr-auto" href="/" style={{
                            margin: "0px 2%"
                        }}
                        >

                            <img src={Logo} height="60" width="70"
                                alt="Ristorante con Fusion" />

                        </NavbarBrand>

                        <NavLink className="nav-link" to="/home">
                            <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>

                        <NavLink className="nav-link" to="/aboutus">
                            <span className="fa fa-info fa-lg"></span> About Us
                                </NavLink>

                        <NavLink className="nav-link" to="/menu">
                            <span className="fa fa-list fa-lg"></span> Scheme
                                </NavLink>

                        <NavLink className="nav-link" to="/contactus">
                            <span className="fa fa-address-card fa-lg"></span> Contact Us
                               </NavLink>

                        <NavLink className="nav-link" to="/Login">
                            <span className="fa fa-sign-in fa-lg"></span> Login
                               </NavLink>

                    </Nav>

                </Navbar>

            </>

        )
    }
}
export default Header;