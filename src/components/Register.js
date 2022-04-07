import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import "../css/mystyle.css"
import {useState} from "react"
import axios from "axios"
import { useForm } from "react-hook-form";
export function Register() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [status,setStatus]=useState("");
  
  function handleRegister(e)
  {
    e.preventDefault();
    if(username.trim()==="" ||password.trim()==="" || email.trim()==="")
    {
      setStatus("Please enter all informarion");
    }
    else
    {
   
    axios.post("http://localhost:9012/register",{username,password,email}).then((res)=>{
     setStatus(res.data.message);

    }).catch((err)=>
    {
      setStatus("Server Error, Please try after sometime");

    })
  }
  }
  return (
    <div>
  <Container id="main-container" className="d-grid h-100 d-flex align-items-center justify-content-center">
        <Form className="text-center w-100 center card p-3 bg-dark registerform" onSubmit={handleRegister}>
        <h4 className="fs-3 fw-normal" style={{color:"white"}}>Registration Form</h4>
        <Form.Group>
        <Form.Control placeholder="Username" size="lg" type="text"  name="username"  className ="position-relative" value={username} onChange={e=>setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group>
        <br/>
        <Form.Control placeholder="Password" size ="lg" type="text" name="password"  className="position-relative" value={password} onChange={e=>setPassword(e.target.value)}  />
        </Form.Group>
        <Form.Group>
      <br/>
       <Form.Control placeholder="EmailId" size ="lg" type="text" name="email"  className="position-relative" value={email} onChange={e=>setEmail(e.target.value)} />
       </Form.Group>
       <br></br>
        <button type="submit"  className="btn btn-primary btn-block" >Register</button>
        
        
        </Form>
        </Container>
        <h3>{status}</h3>
    </div>
  )
}

export default Register