import React from 'react'
import {NavLink,BrowserRouter,Route,Routes} from 'react-router-dom';
import {Nav,Navbar,Container} from "react-bootstrap"

import Login from "./Login"
import Register from './Register'
import Home from './Home'
import Premium from './Premium'
import { useSelector } from 'react-redux';
export function Navigation() {
  const {uname}=useSelector((state)=>state.user);
  return (
       <div>
     <BrowserRouter>
     <Navbar collapseOnSelect  expand="sm" bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">ECommerce</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      {uname=="" && <>
      <Nav.Link to="/home" as={NavLink}>Home</Nav.Link>
      <Nav.Link to="/login" as={NavLink}>Login</Nav.Link>
      <Nav.Link to="/register" as={NavLink}>Registration</Nav.Link></>
      }
      {uname !="" &&<Nav.Link to="/premium" as={NavLink}>Shop Items</Nav.Link>}
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/premium" element={<Premium/>}></Route>
  </Routes>
     </BrowserRouter>
    </div>
  )
}

export default Navigation