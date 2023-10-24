import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {
  Navbar,
} from "reactstrap"
import { Button } from 'react-bootstrap';

const Packages = () => {
  return (
    <div>
      <div style={{
        display: 'block', width: '100%', maxWidth: '100%', marginBottom: '3%'
      }}>
        <Navbar fixed='top' style={{ backgroundColor: '#F2F3F4' }}>
          <div className="nav-logo">
            <p style={{ fontSize: '18px', fontFamily: "Playfair Display", color: '#626567', letterSpacing: '5px', margin: '5px' }}>Redirecting..</p>
          </div>

        </Navbar>
      </div><br></br>

      <section className='page_404'>
        <Container>
          <Row>
            <Col className='text-center'>
              <div className='four_zero_four_bg'>
                <h1 className='text-center'>404</h1>
              </div>
              <div className='contant_box_404'>
                <h3 className='h2'>Oops!</h3>
                <p>Sorry, request page not found right now. Try again later!</p>
                <Link to="/"><Button>Take me back to Homepage!</Button></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Packages