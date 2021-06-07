import React, { Component } from 'react';
import {
    Button, Row, Col, Label
} from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';
import Srwer from './srwer.jpg';

class Contact extends Component {
    constructor(props) {
        super(props);


    
        this.handleSubmit = this.handleSubmit.bind(this);
     
        
    }



    handleSubmit(values) {
        this.props.postFeedback(values.firstname, values.lastname, values.telnum, values.email, values.agree, values.contactType, values.message);
        this.props.resetFeedbackForm();
    }

    render() {
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        const isNumber = (val) => !isNaN(Number(val));
        const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

        const mapStyles = {
            width: '60%',
            height: '100%'
        };
        return (
            <div style={{textAlign:"center"}}>
            <div className="container align-self-center">
                <div className="row" style={{backgroundColor:"#E0FFFF", paddingTop:"1%", marginTop:"1%"}}>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                    </div>
                </div>
                <div className="row row-content" style={{backgroundColor:"#E0FFFF", paddingTop:"1%"}}>
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-md-6 col-12"
                        style={{textAlign:"start",
                                margin:"auto 0px",
                                paddingLeft:"15%"
                    }}
                        >
                        <h5>Our Address</h5>
                        <address>
                            A-1/14,<br />
                        Harsh Vihar,<br />
                        Delhi-93<br />
                            <i className="fa fa-phone"></i>: +91 9213464839<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:Aasthagroup1996@gmail.com">aasthagroup1996@gmail.com</a>
                        </address>
                    </div>
                
                    <div className="col-md-6 col-12" style={{padding:"5%", alignItems:"end"}}>
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+919213464839"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:Aasthagroup1996@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content" style={{margin:"0px", 
                    padding:"0px"
                    }}>
                <div className="col-md-5" style={{width:"100%", padding:"3%"}} >
                        <img
                            src={Srwer}
                            width="100%"
                            height="90%"
                            alt="img"
                        />
                    </div>
                <div className="col-md-6" style={{textAlign:"end", width:"100%", padding:"0px"}}>
                <div className="row row-content">
                    <div className="col-12" style={{textAlign:"center", width:"100%", padding:"0px"}}>
                        <br />
                        <h3>Send us your Feedback</h3>
                    </div>
                    
                    <div className="col-12" style={{textAlign:"end", width:"100%", padding:"0px", color:"white", marginTop:"-5%", textAlign:"end"}}>
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)} >
                            <Row className="form-group" >
                                <Label htmlFor="firstname" md={3}  style={{width:"100%",margin:"0px", padding:"1% 4%"}}>First Name:</Label>
                                <Col md={9} >
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
                                <Label htmlFor="lastname" md={3}  style={{width:"100%",margin:"0px", padding:"1% 4%"}}>Last Name:</Label>
                                <Col md={9}>
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
                            <Row className="form-group" >
                                <Label htmlFor="telnum" md={3}  style={{width:"100%",margin:"0px", padding:"1% 4%"}}>Contact Tel.:</Label>
                                <Col md={9}>
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
                            <Row className="form-group" >
                                <Label htmlFor="email" md={3}  style={{width:"100%",margin:"0px", padding:"1% 4%"}}>Email:</Label>
                                <Col md={9}>
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
                            <Row className="form-group" >
                                <Label htmlFor="message" md={3}  style={{width:"100%",margin:"0px", padding:"1% 4%"}}>Your Feedback:</Label>
                                <Col md={9}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="5"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={3} style={{width:"100%",margin:"0px", padding:"1% 2%", textAlign:"start"}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input"
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={9} >
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option style={{ color: "lightgrey" }}>Choose One</option>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12} style={{ width:"100%", padding:"0px"}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>    
        );
    }
}

export default Contact;