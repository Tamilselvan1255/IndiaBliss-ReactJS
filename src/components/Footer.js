import React from "react";
import { Container, Row, Col } from "reactstrap";
import { BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import "../App.css";

const Footer = () => {
    return (
        <div>
            <Row style={{ backgroundColor: '#F2F3F4' }}>
                <Col md={4} style={{ display: 'grid', placeItems: 'center', marginTop: '2%' }}>
                    <img style={{ width: '250px' }} src={require('../assets/logo1 1.png')} />
                </Col>
                <Col md={4} style={{ display: 'grid', placeItems: 'center', marginTop: '2%' }}>
                    <ul>
                        <h5 style={{ color: '#333' }}><b>Contact Us,</b></h5>
                        <li style={{ display: 'grid', marginBottom: '3%' }}>43, Gotham city, India</li>
                        <li style={{ display: 'grid', marginBottom: '3%' }}>you@awesome.com</li>
                    </ul>
                </Col>
                <Col md={4} style={{ display: 'grid', placeItems: 'center', marginTop: '2%' }}>
                    <div>
                        <h5 style={{ color: '#333' }}><b>Follow us on,</b></h5>
                        <center className="nope"> <span style={{ fontSize: '20px' }}><a href="https://instagram.com/"><img className="icon" src={require("../assets/insTaGram.png")} /></a></span>
                            <span style={{ paddingLeft: '25px', fontSize: '20px' }}><a href="https://facebook.com/"><img className="icon" src={require("../assets/facebook.png")} /></a></span>
                            <span style={{ paddingLeft: '25px', fontSize: '20px' }}><a href="https://twitter.com/"><img className="icon" src={require("../assets/TwiTTer.png")} /></a></span>
                            <span style={{ paddingLeft: '25px', fontSize: '20px' }}><a href="https://www.whatsapp.com/" ><BsWhatsapp /></a></span></center>
                    </div>
                </Col>
                <p style={{ fontSize: '15px', textAlign: 'center', marginTop: '20px'}}> © 2023-2025 All Rights Reserved.</p>

            </Row>
        </div>
    )
}

export default Footer;