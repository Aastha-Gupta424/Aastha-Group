import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import Logo from './logo2.png';

class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ backgroundColor: "white" }} >

                <div className="container" 
                style={{
                    backgroundColor: "#eafdfc",
                    paddingTop: "0"
                    }}
                >

                    <Row>
                        <img
                            style={{
                                padding: "2%"
                            }}
                            src={Logo}
                            height="35%"
                            width="35%"
                            alt="img"
                        />
                    </Row>
                    <div
                        style={{
                            backgroundColor: "white "
                        }}
                    >
                    <div
                        style={{
                                backgroundColor: "#2cccc4 ",
                                margin: "0px"
                            }}
                    >
                    <div>
                        <Row
                            style={{
                                    marginTop: "-6%"
                                }}
                        >
                        <Col>
                            <h1
                                style={{
                                        paddingTop: "20%",
                                        textAlign: "center",
                                        fontWeight: "bolder",
                                        fontSize: "70px"
                                    }}
                            >
                                ABOUT
                            </h1>
                            </Col>

                            <Col>
                                <p
                                    style={{
                                        backgroundColor: "white",
                                        color: "black",
                                        padding: "5%",
                                        margin: "0px"
                                    }}
                                >
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    .Pharetra magna ac placerat vestibulum lectus mauris ultrices. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Sollicitudin ac orci phasellus egestas tellus rutrum. Venenatis cras sed felis eget. Amet risus nullam eget felis eget nunc. Lacus vestibulum sed arcu non odio euismod. Consectetur adipiscing elit duis tristique.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
}
export default About;