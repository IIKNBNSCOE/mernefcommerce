import React from 'react'
import { Form,Container } from 'react-bootstrap'
import "../css/mystyle.css"
import axios from "axios"
import {useState} from "react"
import { useDispatch,useSelector} from 'react-redux'
import {loggedin} from "../store/UserSlice"
import { useForm } from "react-hook-form";
function Login() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [status,setStatus]=useState("");
  const dispatch=useDispatch();
  const { register, formState: { errors } } = useForm();
  const {uname}=useSelector(state=>state.user)
  function handleSubmit(e)
  {
    e.preventDefault();
    if(username.trim()==="" ||password.trim()==="")
    {
      setStatus("Please enter all informarion");
    }
    else
    {
    axios.post("http://localhost:9012/login",{username,password}).then((res)=>{
     setStatus(res.data.message);
     if(res.data.message==="Valid User")
     {
       console.log("valid user")
       
     dispatch(loggedin(username))
     console.log(uname);
     }

    }).catch((err)=>
    {
      setStatus("Server Error, Please try after sometime");

    })
  }
  }
  return (
    <div>
      <Container id="main-container" className="d-grid h-100 d-flex align-items-center justify-content-center signinform">
            
    <Form  className="text-center w-100 center card p-3 bg-dark"  onSubmit={handleSubmit}>
    <h4 className="fs-3 fw-normal" style={{color:"white"}}>Login Form</h4>
        <Form.Group>
        
        <Form.Control placeholder="username"size ="lg"type="text" name="username"  className="position-relative" value={username} onChange={e=>setUsername(e.target.value)}/>
        
        </Form.Group>
        <br></br>
        <div className="form-group">
       
        <Form.Control placeholder="password" size ="lg" type="password" name="password"  className="position-relative" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <br></br>
        <button type="submit"  className="btn btn-primary btn-block">Login</button>
        
        </Form>
        </Container>
        <h3>{status}</h3>
        </div>
  )
}

export default Login
