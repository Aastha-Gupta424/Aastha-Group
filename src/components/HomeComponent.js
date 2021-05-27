import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Money from './money.png';

class Home extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container" style={{
                padding: "0%",
                margin: "4%"
            }}
            >
                <Row>
                    <Col md="6" sm="12">
                        <h1 style={{
                            fontSize: "92px",
                            fontWeight: "bolder",
                            marginTop: "25%",
                            fontFamily: "KoHo",
                            color:"#2E2E2E",
                            textShadow:"1px 3px 3px #9D9B9D"
                        }}
                        >
                            Aastha-Group
                        </h1>

                        <h3 style={{
                            fontWeight: "bold",
                            fontFamily: "KoHo"
                        }}
                        >
                            Tag Line
                        </h3>

                        <h5 style={{
                            fontWeight: "bold",
                            fontFamily: "KoHo"
                        }}
                        >
                            Description
                        </h5>
                        
                    </Col>
                    <Col md="6" sm="12">
                        <img className="hello" src={Money}></img>
                    </Col>
                </Row>
            </ div>
        )
    }
}

export default Home;