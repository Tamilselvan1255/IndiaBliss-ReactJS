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
import Footer from './Footer';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <div style={{
        display: 'block', width: '100%', maxWidth: '100%', marginBottom: '3%'
      }}>
        <Navbar fixed='top' style={{ backgroundColor: '#F2F3F4' }} expand="lg">
          <div className="nav-logo">
            <p style={{ fontSize: '18px', fontFamily: "Playfair Display", color: '#626567', letterSpacing: '5px', margin: '5px' }}>FEEL<span style={{ color: '#E74C3C' }}> FREE</span> TO SHARE WITH<span style={{ color: '#E74C3C' }}> US</span></p>
          </div>
          <div>
            <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
            <Collapse isOpen={isOpen} navbar >
              <Nav className="nav" navbar>
                <li>
                  <Link to="/">Home</Link>
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
                <Button>Book tickets!</Button>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div><br></br>

      <Container style={{maxWidth: '450px', marginTop: '20px', marginBottom: '30px'}}>
       <Card>
        <Card.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{display: 'flex', justifyContent: 'left'}}>Fullname</Form.Label>
            <Form.Control type="text" placeholder="Robert Downey Jr." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{display: 'flex', justifyContent: 'left'}}>Email address</Form.Label>
            <Form.Control type="email" placeholder="you@awesome.com" />
            <small><Form.Text className="text-muted" style={{display: 'flex', justifyContent: 'left'}}>
              We'll never share your email with anyone else.
            </Form.Text></small>
          </Form.Group>

          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{display: 'flex', justifyContent: 'left'}}>Phone no.</Form.Label>
            <Form.Control type="number" placeholder="+123456789" />
            <small><Form.Text className="text-muted" style={{display: 'flex', justifyContent: 'left'}}>
              We'll never share your phone no. with anyone else.
            </Form.Text></small>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{display: 'flex', justifyContent: 'left', color: 'black'}}>Subject</Form.Label>
           <div style={{display: 'flex', justifyContent: 'left'}}>
             <textarea style={{width: '100%', height: '70px', resize:'none'}} placeholder='Write here..'>

            </textarea>
            </div>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Card.Body>
       </Card>
      </Container>
      <Footer />
    </div>
  )
}

export default Contact