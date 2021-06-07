import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var { SocialIcon } = require('react-social-icons');

function Footer(props) {
    return (
        <div className="footer">
            <div className="row" style={{margin:"0px", padding:"0px"}}>
                <div style={{ margin: "2%", padding:"0px"}} className="col-4 offset-1 col-sm-4">

                    <h5><Link style={{ color: "rgb(94, 0, 37)",fontWeight:"bolder"}} to="/aboutus">About Us</Link></h5>

                    <p style={{ textAlign: "justify", padding:"0px" }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    <SocialIcon style={{ marginRight: "1%", height: 45, width: 45 }} url="https://google.com" fgColor="white" />
                    <SocialIcon style={{ margin: "auto 1%", height: 45, width: 45 }} url="https://facebook.com" fgColor="white" />
                    <SocialIcon style={{ margin: "auto 1%", height: 45, width: 45 }} url="https://instagram.com/adorable_gupta" fgColor="white" />
                    <SocialIcon style={{ margin: "auto 1%", height: 45, width: 45 }} url="https://twitter.com" fgColor="white" />
                    <SocialIcon style={{ margin: "auto 1%", height: 45, width: 45 }} url="https://linkedin.com/in/aastha-gupta-90a8461a4" fgColor="white" />
                    <SocialIcon style={{ margin: "auto 1%", height: 45, width: 45 }} url="mailto:Aasthagroup1996@gmail.com" bgColor="black" fgColor="white" />
                </div>

                <div className="col-4 align-self-center" style={{ textAlign: "center", padding:"0px" }}>
                    <ul className="list-unstyled" >
                        <h6>  <li><Link style={{ color: "rgb(94, 0, 37)", fontWeight:"bolder" }} to="/home">Home</Link></li></h6>
                        <h6>    <li><Link style={{ color: "rgb(94, 0, 37)", fontWeight:"bolder"  }} to="/home">Log In</Link></li></h6>
                        <h6>   <li><Link style={{ color: "rgb(94, 0, 37)", fontWeight:"bolder"  }} to="/contactus">Contact Us</Link></li></h6>
                    </ul>
                </div>
                <div style={{ margin: "2% 0%", padding:"0px"}} className="col-4 col-md-3">
                    <h5 style={{fontWeight:"bolder" }}>Any Query?</h5>
                    <address>
                        <li><span class="icon icon-map-marker"></span><span class="text">A-1/14, Harsh Vihar, Delhi-93 <br />
                        </span></li>
                        <i className="fa fa-phone fa-lg"></i><a style={{ color: "rgb(94, 0, 37)" }}> tel: </a>+91 9213464839<br />
                        <i className="fa fa-envelope fa-lg"></i> mail to:  <a style={{ color: "rgb(94, 0, 37)" }} href="mailto:Aasthagroup1996@gmail.com">
                            aasthagroup1996@gmail.com</a>

                    </address>
                </div>
            </div>
            <div className="row justify-content-center" style={{margin:"0px", padding:"0px"}}>
                <div className="col-auto">
                    <p>© Copyright 2021 Aastha-Group</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;