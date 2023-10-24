import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
} from "reactstrap"
import { FcOvertime, FcHome } from "react-icons/fc"
import { Button } from 'react-bootstrap';
import Iframe from "react-iframe";
import { GrInstagram } from 'react-icons/gr';
import { BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs';
import Footer from './Footer';
import "../App.css"

const About = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <div style={{
        display: 'block', width: '100%', maxWidth: '100%', marginBottom: '3%'
      }}>
        <Navbar fixed='top' style={{ backgroundColor: '#F2F3F4' }} expand="lg">
          <div className="nav-logo">
            <p style={{ fontSize: '18px', fontFamily: "Playfair Display", color: '#626567', letterSpacing: '4px', margin: '5px' }}><span style={{ color: '#E74C3C' }}>ABOUT</span> INDIA</p>
          </div>
          <div>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <Collapse isOpen={isOpen} navbar >
              <Nav className="nav" navbar>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about"><div className="active">About</div></Link>
                </li>
                <li>
                  <Link to="/destination">Destination</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <Link to="/packages"><Button>Book tickets!</Button></Link>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div><br></br>

      <Container fluid>
        <p style={{ textAlign: 'left' }}>
          India is a diverse and culturally rich country located in South Asia. It is the seventh-largest country in the world by land area and the second-most populous country, with over 1.3 billion people (in September 2021).
        </p>
        <Card id='cards'>
          <Card.Body>
            <Row className='d-flex justify-content-center align-items-center'>
              <Col lg={5}>
                <img className='img1' src={require('../assets/bharaThanaTyam.jpg')} />
              </Col>
              <Col lg={7}>
                <h5 style={{ textAlign: 'left', lineHeight: '185%' }}>
                  India is renowned for its cultural diversity. It is home to a multitude of languages, religions, and traditions. Major religions in India include Hinduism, Islam, Christianity, Sikhism, Buddhism, and Jainism. It has a rich heritage of art, music, dance, and literature.
                </h5>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card id='cards'>
          <Card.Body>
            <Row className='d-flex justify-content-center align-items-center'>
              <Col lg={7}>
                <h5 style={{ textAlign: 'left', lineHeight: '185%' }}>
                  India has a rich history that dates back thousands of years. It was the birthplace of major religions like Hinduism, Buddhism, Jainism, and Sikhism. The country was under British colonial rule for nearly two centuries before gaining independence in 1947.
                </h5>
              </Col>
              <Col lg={5}>
                <img className='img1' src={require('../assets/rajforT.jpg')} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card id='cards'>
          <Card.Body>
            <Row className='d-flex justify-content-center align-items-center'>
              <Col lg={5}>
                <img className='img1' src={require('../assets/indiamap.png')} />
              </Col>
              <Col lg={7}>
                <h5 style={{ textAlign: 'left', lineHeight: '185%' }}>
                  India is a linguistically diverse country with hundreds of languages spoken. Hindi and English are the official languages, but various states have their own official languages, like Bengali, Telugu, Marathi, and Tamil.
                </h5>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card id='cards'>
          <Card.Body>
            <Row className='d-flex justify-content-center align-items-center'>
              <Col lg={7}>
                <h5 style={{ textAlign: 'left', lineHeight: '185%' }}>
                  Yoga has been practiced in India for thousands of years. Its history is closely linked to ancient Indian philosophy and spirituality. The earliest records of yoga date back to the Vedas, ancient Indian sacred texts.
                </h5>
              </Col>
              <Col lg={5}>
                <img className='img1' src={require('../assets/yoGa.jpg')} />
              </Col>
            </Row>
          </Card.Body>
        </Card>

       <Footer />
      </Container>
    </div>
  )
}

export default About