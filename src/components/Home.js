import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { Link } from "react-router-dom";
import "../App.css";
import { Button } from "react-bootstrap";

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      
      <div style={{
        display: 'block', width: '100%', maxWidth: '100%', marginBottom: '3%'
      }}>
        <Navbar fixed='top' style={{ backgroundColor: '#F2F3F4' }} expand="lg">
          <div className="nav-logo">
            <p style={{ fontSize: '18px', fontFamily: "Playfair Display", color: '#626567', letterSpacing: '5px', margin: '5px' }}><span style={{ color: '#E74C3C' }}>I</span>NDIA <span style={{ color: '#E74C3C' }}>B</span>LISS</p>
         
          </div>
          <div>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <Collapse isOpen={isOpen} navbar >
              <Nav className="nav" navbar>
                <li>
                  <Link to="/"><div className="active">Home</div></Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
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

      <Container className="home">
        <Row className="content">
          <Col lg={6}>
            <img id="mainimg" src={require('../assets/Untitled design.png')} />
          </Col>
          <Col lg={6}>
            <h1 className="h1content">India Unveiled</h1>
            <h1 className="h2content">Bliss Revealed</h1>
            <h6 className="pcontent">Beauty and Happyness that india has offer to you..!</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;


