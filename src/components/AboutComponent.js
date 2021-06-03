import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import Logo from './logo.png';

class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="jumbotron about" width="100%">
                    <h1 style={{
                            textTransform:"uppercase",
                            letterSpacing:"1px" ,
                            fontSize:"70px",
                            fontWeight: "bolder",
                            fontFamily: "KoHo",
                            color:"rgb(94, 0, 37)",
                            textShadow:"2px 3px 4px black"
                        }}>
                        About Us
                    </h1>
                </div>
                <div>
                    <Row>
                        <Col xs={6} style={{paddingLeft:"3%"}}>
                            <img src={Logo} height="90%" width="50%" alt="img" />
                        </Col>
                        <Col>
                        <h2 style={{ color:"rgb(94, 0, 37)",
                            textShadow:"1px 3px 3px white",
                            fontFamily: "KoHo",
                            fontWeight: "bolder"
                        }}>
                            About Company
                        </h2>
                        <p style={{textAlign:"justify",                            fontFamily: "KoHo",
color:"rgb(59, 0, 24)",padding:"2% 10% 2% 0%"}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        </Col>
                    </Row>
                    <Row>
                    <Col style={{paddingLeft:"5%"}}>
                        <h2 style={{fontFamily: "KoHo",                             fontWeight: "bolder",
color:"rgb(59, 0, 24)",
                            textShadow:"1px 3px 3px white"}}>
                            Co-Founder
                        </h2>
                        <p style={{textAlign:"justify",                            fontFamily: "KoHo",
color:"rgb(59, 0, 24)", padding:"2% 10% 2% 0%"}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        </Col>
                        <Col xs={6}>
                            <img src={Logo} height="90%" width="50%" alt="img" />
                        </Col>
                       
                    </Row>
                </div>

            </>

        )
    }
}
export default About;