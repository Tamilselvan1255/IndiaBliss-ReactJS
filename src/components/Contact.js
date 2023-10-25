import React, { useState } from 'react'
import { Card, Col, Container, Row, ToastBody, ToastContainer, ToastHeader } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Toast } from 'react-bootstrap';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
} from "reactstrap"
import { Button } from 'react-bootstrap';
import Footer from './Footer';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [show, setShow] = useState(false);
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
                  <Link to="/contact"><div className="active">Contact</div></Link>
                </li>
                <Link to="/packages"><Button>Book tickets!</Button></Link>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div><br></br>


      <Container style={{ maxWidth: '450px', marginBottom: '5px', marginTop: '65px' }}>
        <Card>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ display: 'flex', justifyContent: 'left' }}>Fullname</Form.Label>
                <Form.Control type="text" placeholder="Robert Downey Jr." />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ display: 'flex', justifyContent: 'left' }}>Email address</Form.Label>
                <Form.Control type="email" placeholder="you@awesome.com" />
                <small><Form.Text className="text-muted" style={{ display: 'flex', justifyContent: 'left' }}>
                  We'll never share your email with anyone else.
                </Form.Text></small>
              </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ display: 'flex', justifyContent: 'left' }}>Phone no.</Form.Label>
                <Form.Control type="number" placeholder="+123456789" />
                <small><Form.Text className="text-muted" style={{ display: 'flex', justifyContent: 'left' }}>
                  We'll never share your phone no. with anyone else.
                </Form.Text></small>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ display: 'flex', justifyContent: 'left', color: 'black' }}>Subject</Form.Label>
                <div style={{ display: 'flex', justifyContent: 'left' }}>
                  <textarea style={{ width: '100%', height: '70px', resize: 'none' }} placeholder='Write here..'>
                  </textarea>
                </div>
              </Form.Group>
              <Button onClick={() => setShow(true)} className="mb-2" variant="primary">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>

      <ToastContainer position='top-end' style={{ marginTop: '4%' }}>
        <Toast className='toastContact' onClose={() => setShow(false)} show={show} delay={2000} autohide>
          <Toast.Header style={{ backgroundColor: '#0d6efd' }}>
            <strong className="me-auto" style={{ textAlign: 'left', color: 'white'}}>Alert!</strong>
          </Toast.Header>
          <Toast.Body style={{ textAlign: 'left' }}>You're form submitted successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
      <Footer />
    </div>
  )
}

export default Contact