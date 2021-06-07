import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import Money from './money.png';

class Home extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container" style={{padding:"1%"}}
            >
                <Row>
                <Col md="4" sm="12" style={{ backgroundColor: "black" }}>
                        <img className="hello" src={Money}></img>
                    </Col>
                    <Col md="8" sm="12" style={{ backgroundColor: "white" }}>
                        <h1 style={{
                            fontSize: "85px",
                            fontWeight: "bolder",
                            fontFamily: "KoHo",
                            color: "#2cccc4",
                            textShadow: "1px 3px 3px #2cccc4"
                        }}
                        >
                            Aastha-Group
                        </h1>

                        <h3 style={{
                            fontWeight: "bold",
                            fontFamily: "KoHo"
                        }}
                        >
                            Achieve what you dream :
                        </h3>

                        <h5 style={{

                            fontFamily: "KoHo",
                            textAlign: "justify"
                        }}
                        >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </h5>
                        <br />
                        <Button type="submit" style={{color:"white", backgroundColor:"#2cccc4", padding:"1% 3%",borderColor:"#2cccc4"}}  >
                            Start
                </Button>
                    </Col>

                   
                   
                </Row>
            </ div>
        )
    }
}

export default Home;