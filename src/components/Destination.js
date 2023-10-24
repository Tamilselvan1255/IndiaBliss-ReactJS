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

const About = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <div style={{
        display: 'block', width: '100%', maxWidth: '100%', marginBottom: '3%'
      }}>
        <Navbar fixed='top' style={{ backgroundColor: '#F2F3F4' }} expand="lg">
          <div className="nav-logo">
            <p style={{ fontSize: '18px', fontFamily: "Playfair Display", color: '#626567', letterSpacing: '5px', margin: '5px' }}><span style={{ color: '#E74C3C' }}>TOP</span> DESTINATION</p>
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

      <Container fluid>
        <p style={{ textAlign: 'left' }}>India is a beautiful country with many amazing holiday destinations to choose from. Some popular choices among tourists include the Taj Mahal in Agra, the beaches of Goa, the hill stations of Himachal Pradesh and Uttarakhand, the backwaters of Kerala, and the wildlife sanctuaries of Madhya Pradesh and Assam.</p>
        <Row>
          <Col lg={3} id='cards1'>
            <Card>
              <Card.Img variant="top" className='img' src={require('../assets/karnaTaka.jpg')} />
              <Card.Body >
                {/* #7DCADB */}
                <Card.Title style={{ letterSpacing: "2px" }}>
                  KARNATAKA
                </Card.Title>
                <Card.Text style={{ color: '#135F57' }}>
                  <Row>
                    <Col><span><FcOvertime /></span>3days</Col>
                    <Col><span><FcHome /></span>Accomodation</Col>
                    {/* <Col><span><FcOvertime /></span>Accomo</Col> */}
                  </Row>
                  <Row>
                  </Row>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant='secondary' className='w-100'>₹4999</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={3} id='cards1'>
            <Card>
              <Card.Img variant="top" className='img' src={require('../assets/Tajmahal.jpg')} />
              <Card.Body >
                {/* #7DCADB */}
                <Card.Title style={{ letterSpacing: "2px" }}>
                  DELHI
                </Card.Title>
                <Card.Text style={{ color: '#135F57' }}>
                  <Row>
                    <Col><span><FcOvertime /></span>3days</Col>
                    <Col><span><FcHome /></span>Accomodation</Col>
                    {/* <Col><span><FcOvertime /></span>Accomo</Col> */}
                  </Row>
                  <Row>
                  </Row>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant='secondary' className='w-100'>₹4999</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={3} id='cards1'>
            <Card>
              <Card.Img variant="top" className='img' src={require('../assets/bharaThanaTyam.jpg')} />
              <Card.Body >
                {/* #7DCADB */}
                <Card.Title style={{ letterSpacing: "2px" }}>
                  TAMILNADU
                </Card.Title>
                <Card.Text style={{ color: '#135F57' }}>
                  <Row>
                    <Col><span><FcOvertime /></span>3days</Col>
                    <Col><span><FcHome /></span>Accomodation</Col>
                    {/* <Col><span><FcOvertime /></span>Accomo</Col> */}
                  </Row>
                  <Row>
                  </Row>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant='secondary' className='w-100'>₹4999</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={3} id='cards1'>
            <Card>
              <Card.Img variant="top" className='img' src={require('../assets/remi-clinton-E5egsk4eUQ0-unsplash.jpg')} />
              <Card.Body >
                {/* #7DCADB */}
                <Card.Title style={{ letterSpacing: "2px" }}>
                  SIKKIM
                </Card.Title>
                <Card.Text style={{ color: '#135F57' }}>
                  <Row>
                    <Col><span><FcOvertime /></span>3days</Col>
                    <Col><span><FcHome /></span>Accomodation</Col>
                    {/* <Col><span><FcOvertime /></span>Accomo</Col> */}
                  </Row>
                  <Row>
                  </Row>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant='secondary' className='w-100'>₹4999</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={3} id='cards1'>
            <Card>
              <Card.Img variant="top" className='img' src={require('../assets/kerala.jpg')} />
              <Card.Body >
                {/* #7DCADB */}
                <Card.Title style={{ letterSpacing: "2px" }}>
                  KERALA
                </Card.Title>
                <Card.Text style={{ color: '#135F57' }}>
                  <Row>
                    <Col><span><FcOvertime /></span>3days</Col>
                    <Col><span><FcHome /></span>Accomodation</Col>
                    {/* <Col><span><FcOvertime /></span>Accomo</Col> */}
                  </Row>
                  <Row>
                  </Row>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant='secondary' className='w-100'>₹4999</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={3} id='cards1'>
            <Card>
              <Card.Img variant="top" className='img' src={require('../assets/backGround header4.png')} />
              <Card.Body >
                {/* #7DCADB */}
                <Card.Title style={{ letterSpacing: "2px" }}>
                  MUMBAI
                </Card.Title>
                <Card.Text style={{ color: '#135F57' }}>
                  <Row>
                    <Col><span><FcOvertime /></span>3days</Col>
                    <Col><span><FcHome /></span>Accomodation</Col>
                    {/* <Col><span><FcOvertime /></span>Accomo</Col> */}
                  </Row>
                  <Row>
                  </Row>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant='secondary' className='w-100'>₹4999</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={3} id='cards1'>
            <Card>
              <Card.Img variant="top" className='img' src={require('../assets/hari-nandakumar-5U132F-itpg-unsplash.jpg')} />
              <Card.Body >
                {/* #7DCADB */}
                <Card.Title style={{ letterSpacing: "2px" }}>
                  RAJASTHAN
                </Card.Title>
                <Card.Text style={{ color: '#135F57' }}>
                  <Row>
                    <Col><span><FcOvertime /></span>3days</Col>
                    <Col><span><FcHome /></span>Accomodation</Col>
                    {/* <Col><span><FcOvertime /></span>Accomo</Col> */}
                  </Row>
                  <Row>
                  </Row>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant='secondary' className='w-100'>₹4999</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={3} id='cards1'>
            <Card>
              <Card.Img variant="top" className='img' src={require('../assets/martin-jernberg-nE2gf1scItI-unsplash.jpg')} />
              <Card.Body >
                {/* #7DCADB */}
                <Card.Title style={{ letterSpacing: "2px" }}>
                  HYDERABAD
                </Card.Title>
                <Card.Text style={{ color: '#135F57' }}>
                  <Row>
                    <Col><span><FcOvertime /></span>3days</Col>
                    <Col><span><FcHome /></span>Accomodation</Col>
                    {/* <Col><span><FcOvertime /></span>Accomo</Col> */}
                  </Row>
                  <Row>
                  </Row>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant='secondary' className='w-100'>₹4999</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={3} id='cards1'>
            <Card>
              <Card.Img variant="top" className='img' src={require('../assets/kirti-1.jpg')} />
              <Card.Body >
                {/* #7DCADB */}
                <Card.Title style={{ letterSpacing: "2px" }}>
                  PUNJAB
                </Card.Title>
                <Card.Text style={{ color: '#135F57' }}>
                  <Row>
                    <Col><span><FcOvertime /></span>3days</Col>
                    <Col><span><FcHome /></span>Accomodation</Col>
                    {/* <Col><span><FcOvertime /></span>Accomo</Col> */}
                  </Row>
                  <Row>
                  </Row>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant='secondary' className='w-100'>₹4999</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={3} id='cards1'>
            <Card>
              <Card.Img variant="top" className='img' src={require('../assets/jammu .jpg')} />
              <Card.Body >
                {/* #7DCADB */}
                <Card.Title style={{ letterSpacing: "2px" }}>
                  MEGHALAYA
                </Card.Title>
                <Card.Text style={{ color: '#135F57' }}>
                  <Row>
                    <Col><span><FcOvertime /></span>3days</Col>
                    <Col><span><FcHome /></span>Accomodation</Col>
                    {/* <Col><span><FcOvertime /></span>Accomo</Col> */}
                  </Row>
                  <Row>
                  </Row>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant='secondary' className='w-100'>₹4999</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={3} id='cards1'>
            <Card>
              <Card.Img variant="top" className='img' src={require('../assets/raghu-nayyar-dskdujAQU44-unsplash.jpg')} />
              <Card.Body >
                {/* #7DCADB */}
                <Card.Title style={{ letterSpacing: "2px" }}>
                  HIMACHAL PRADESH
                </Card.Title>
                <Card.Text style={{ color: '#135F57' }}>
                  <Row>
                    <Col><span><FcOvertime /></span>3days</Col>
                    <Col><span><FcHome /></span>Accomodation</Col>
                    {/* <Col><span><FcOvertime /></span>Accomo</Col> */}
                  </Row>
                  <Row>
                  </Row>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant='secondary' className='w-100'>₹4999</Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={3} id='cards1'>
            <Card>
              <Card.Img variant="top" className='img' src={require('../assets/srivatsan-balaji-T5s48osIQTU-unsplash.jpg')} />
              <Card.Body >
                {/* #7DCADB */}
                <Card.Title style={{ letterSpacing: "2px" }}>
                  UTTAR PRADESH
                </Card.Title>
                <Card.Text style={{ color: '#135F57' }}>
                  <Row>
                    <Col><span><FcOvertime /></span>3days</Col>
                    <Col><span><FcHome /></span>Accomodation</Col>
                    {/* <Col><span><FcOvertime /></span>Accomo</Col> */}
                  </Row>
                  <Row>
                  </Row>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant='secondary' className='w-100'>₹4999</Button>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  )
}

export default About