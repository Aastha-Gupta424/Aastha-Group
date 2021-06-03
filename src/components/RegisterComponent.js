import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';
var { SocialIcon } = require('react-social-icons');

class Reg extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        const isNumber = (val) => !isNaN(Number(val));
        const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
        return (
           
            <div className="container reg">
                <Form model="Sign up" onSubmit={(values) => this.handleSubmit(values)}>
                <h1 style={{
                            marginBottom:"1%",
                            marginLeft:"-12%",
                            marginTop:"-5%",
                            textTransform:"uppercase",
                            letterSpacing:"2px" ,
                            alignItems:"center",
                            fontWeight: "bolder",
                            fontFamily: "KoHo",
                            color:"rgb(94, 0, 37)",
                            textShadow:"1px 3px 3px #9D9B9D"
                        }}
                        >
                            Sign Up
                        </h1>   
                        <h6 
                        style={{
                            marginBottom:"3%",
                            textTransform:"uppercase",
                            letterSpacing:"2px" ,
                            marginLeft:"-12%",
                            alignItems:"center",
                            fontWeight: "bolder",
                            fontFamily: "KoHo",
                            color:"rgb(94, 0, 37)",
                            textShadow:"1px 3px 3px #9D9B9D"
                        }}
                        >
                            <b>Already have an account ? </b>
                    <a href="/login" 
                     className="sins"
                    >
                        <strong>Sign In</strong> </a></h6>
                    <Row className="form-group" >
                        <Label htmlFor="firstname" xs={2} >First Name</Label>
                        <Col md={4} style={{marginLeft:"8.2%"}}>
                            <Control.text model=".firstname" id="firstname" name="firstname"
                                placeholder="First Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".firstname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="lastname" xs={3} >Last Name</Label>
                        <Col md={4}>
                            <Control.text model=".lastname" id="lastname" name="lastname"
                                placeholder="Last Name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".lastname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="telnum" xs={3}  >Contact Tel.</Label>
                        <Col md={4}>
                            <Control.text model=".telnum" id="telnum" name="telnum"
                                placeholder="Tel. Number"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".telnum"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 numbers',
                                    maxLength: 'Must be 15 numbers or less',
                                    isNumber: 'Must be a number'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="email" xs={3} >Email</Label>
                        <Col md={4}>
                            <Control.text model=".email" id="email" name="email"
                                placeholder="Email"
                                className="form-control"
                                validators={{
                                    required, validEmail
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".email"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    validEmail: 'Invalid Email Address'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="password" xs={3}>Password</Label>
                        <Col xs={4}>
                            <Control.text model=".password" id="password" name="password"
                                placeholder="Password"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(8)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".password"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 7 characters',
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="password" xs={3}>Confirm Password</Label>
                        <Col xs={4}>
                            <Control.text model=".password" id="password" name="password"
                                placeholder="Confirm Password"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(8)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".password"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 7 characters',
                                }}
                            />
                        </Col>
                    </Row>
                    
                    <Row className="form-group">
                        <Col md={{ size: 9, offset: 3 }} style={{paddingBottom:"2%", marginLeft:"52%"}}>
                            <Button className="sin" type="submit" >
                                Sign up
                </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default Reg;