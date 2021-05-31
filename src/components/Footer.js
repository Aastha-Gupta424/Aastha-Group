import React, { Component } from 'react';
import { Link } from 'react-router-dom';
var { SocialIcon } = require('react-social-icons');

function Footer(props) {
    return (
        <div className="footer">
                <div className="row">
                    <div style={{ marginTop: "2%", marginLeft: "6%" }} className="col-4 offset-1 col-sm-4">

                  <h5><Link style={{ color: "#DC143C" }} to="/aboutus">About Us</Link></h5> 
                                                    <p>blah blah</p>
                            <SocialIcon style={{ marginRight:"1%", height: 45, width: 45 }} url="https://google.com" fgColor="white"/>
                            <SocialIcon style={{ margin:"auto 1%",height: 45, width: 45 }} url="https://facebook.com"  fgColor="white"/>
                            <SocialIcon style={{ margin:"auto 1%",height: 45, width: 45 }} url="https://instagram.com/adorable_gupta"  fgColor="white"/>
                            <SocialIcon style={{ margin:"auto 1%",height: 45, width: 45 }} url="https://twitter.com"  fgColor="white"/>
                            <SocialIcon style={{ margin:"auto 1%",height: 45, width: 45 }} url="https://linkedin.com/in/aastha-gupta-90a8461a4"  fgColor="white"/>
                            <SocialIcon style={{ margin:"auto 1%",height: 45, width: 45 }} url="mailto:Aasthagroup1996@gmail.com" bgColor="black" fgColor="white" />
                            </div>
                    
                    <div className="col-12 col-sm-4 align-self-center">
                    <ul className="list-unstyled">

                    <h6>  <li><Link style={{ color: "#DC143C" }} to="/home">Home</Link></li></h6> 
                    <h6>   <li><Link style={{ color: "#DC143C" }} to="/contactus">Contact Us</Link></li></h6> 
                    <h6>    <li><Link style={{ color: "#DC143C" }} to="/home">Log In</Link></li></h6> 
                        </ul>
                    </div>
                    <div style={{ marginTop: "2%" }} className="col-7 col-sm-3">
                        <h5>Any Query?</h5>
                        <address>
                        <li><span class="icon icon-map-marker"></span><span class="text">A-1/14, Harsh Vihar, Delhi-93 <br />
</span></li>
                        <i className="fa fa-phone fa-lg"></i><a style={{ color: "#DC143C" }}> tel: </a>+91 9213464839<br />
                        <i className="fa fa-envelope fa-lg"></i> mail to:  <a style={{ color: "#DC143C" }} href="mailto:Aasthagroup1996@gmail.com">
                        aasthagroup1996@gmail.com</a>               
                           
                        </address>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>© Copyright 2021 Aastha-Group</p>
                    </div>
                </div>
        </div>
    );
}
export default Footer;