import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { Reg } from './RegisterComponent';
var { SocialIcon } = require('react-social-icons');

class Log extends Component {

    constructor(props) {
        super(props);

    }

    render() {
            const required = (val) => val && val.length;
            // const maxLength = (len) => (val) => !(val) || (val.length <= len);
            const minLength = (len) => (val) => val && (val.length >= len);
            // const isNumber = (val) => !isNaN(Number(val));
            const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
        
        return (
            <Form className="form" model="login" onSubmit={(values) => this.handleSubmit(values)}> 
            <h1 style={{
                            marginBottom:"1%",
                            marginTop:"-5%",
                            textTransform:"uppercase",
                            letterSpacing:"2px" ,
                            alignItems:"center",
                            fontWeight: "bolder",
                            fontFamily: "KoHo",
                            color:"#2E2E2E",
                            textShadow:"1px 3px 3px #9D9B9D"
                        }}
                        >
                            Sign In
                        </h1>   
                        <h6 
                        style={{
                            marginBottom:"3%",
                            textTransform:"uppercase",
                            letterSpacing:"2px" ,
                            alignItems:"center",
                            fontWeight: "bolder",
                            fontFamily: "KoHo",
                            color:"#2E2E2E",
                            textShadow:"1px 3px 3px #9D9B9D"
                        }}
                        >
                            <b>Don't have account yet ? </b>
                    <a href="/register" 
                      style={{
                        color:"rgb(13, 158, 255)",
                        textShadow:"1px 3px 3px white"
                    }}
                    >
                        <strong>Sign Up</strong> </a></h6>            
            <Row className="form-group">
                <Label  htmlFor="email" md={1} xs={2} >Email</Label>
                <Col xs={4} style={{padding:"auto 0"}}>
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
                            required: 'Required ',
                            validEmail: 'Invalid Email Address'
                        }}
                     />
                </Col>
                <Col xs={3} style={{alignItems:"end"}}>
                <button  class="btn gs bs"><SocialIcon style={{ margin:"auto 1%",height: 38, width: 38 }} url="https://google.com" fgColor="white"/>
                <span>Google </span></button>
                </Col>
            </Row>

            <Row className="form-group" style={{marginTop:"3%"}}>
                <Label  htmlFor="password"  md={1} xs={2}>Password</Label>
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
                <Col xs={3} style={{alignItems:"end"}}>
                <button  class="btn fs bs"><SocialIcon style={{ margin:"auto 1%",height: 38, width: 38 }} url="https://facebook.com" fgColor="white"/>
                <span>Facebook </span></button>
                </Col>
            </Row>
            
            <Row className="form-group" style={{marginTop:"3%"}}>
                
                <Col lg={4} xs={12} >
                    <Button className="log" type="submit" color="primary">
                    <span>
                        login
                        </span>
                    </Button>
                </Col>
            </Row>
        </Form>         
        )
    }


}
export default Log;