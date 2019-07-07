import React, { Component } from 'react'
import { Navbar,Nav,NavItem,Button,Container,Jumbotron } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import './CustomNavbar.css'

 class CustomNavbar extends Component {
  render(){
    return(

      <div>

        <header>
         <Container>
         <h1 className="logo-main">UniverseSandbox TM</h1>
        </Container>
        </header>

<Nav className="justify-content-center" activeKey="/">
  <Nav.Item>
    <Nav.Link href="/"><h1>News</h1></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/planets" ><h1>Planets</h1></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link ><h1>SandBox</h1></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/contact"><h1>Contact</h1></Nav.Link>
  </Nav.Item>
</Nav>


</div>
    )
  }
}

export default CustomNavbar
