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
                            fontSize: "85px",
                            fontWeight: "bolder",
                            marginTop: "5%",
                            fontFamily: "KoHo",
                            color:"#2E2E2E",
                            textShadow:"1px 3px 3px #9D9B9D"
                        }}
                        >
                            Aastha-Group
                        </h1>

                        <br />
                        
                        <h3 style={{
                            fontWeight: "bold",
                            fontFamily: "KoHo"
                        }}
                        >
                            Achieve what you dream :
                        </h3>

                        <br />

                        <h5 style={{
                            
                            fontFamily: "KoHo",
                            textAlign:"justify"
                        }}
                        >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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