import React from 'react'
import { Form,Container, Modal,Spinner } from 'react-bootstrap'
import "../css/mystyle.css"
import axios from "axios"
import {useState} from "react"
import { useDispatch,useSelector} from 'react-redux'
import {loggedin} from "../store/UserSlice"
import {useNavigate} from "react-router-dom"
function Login() {
  const [username,setUsername]=useState("");
  const [femail,setFemail]=useState("");
  const [password,setPassword]=useState("");
  const [status,setStatus]=useState("");
  const dispatch=useDispatch();
   const {uname}=useSelector(state=>state.user)
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [femailstatus,setFemailStatus]=useState(false);
  const [errorusername,setErrorusername]=useState("");
  const [errorpassword,setErrorpassword]=useState("");
  const [onsubmit,setOnsubmit]=useState(false);
  const [cpassword,setCpassword]=useState("");
  const [npassword,setNpassword]=useState("");
  const navigate=useNavigate();
  
  

  const handleClose = (e) => {
    //e.preventDefault();
    setShow(false);
    //console.log(femail);

  }
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  function handleSubmit(e)
  {
    setOnsubmit(true);
    
    e.preventDefault();
    if(username.trim()==="" || password.trim()==="")
    {
      if(username.trim()==="" && password.trim()!="")
      {
      setErrorusername("Please Fill User");
      setErrorpassword("");
      }
      if(password.trim()==="" && username.trim()!="" )
      {
      setErrorpassword("Please Fill pass");
      setErrorusername("");
      }
      if(password.trim()==="" && username.trim()=="" )
      {
        setErrorusername("Please Fill User");
        setErrorpassword("Please Fill pass");
      }
     // console.log(formerror);
    }
    else{
    console.log("inside ");
    
    setErrorusername("");
    setErrorpassword("");
    axios.post("http://localhost:9012/login",{username,password}).then((res)=>{
      setOnsubmit(false);
     setStatus(res.data.message);
     if(res.data.message==="Valid User")
     {
       console.log("valid user")
       
     dispatch(loggedin(username))
     navigate("../premium",{ replace: true })
     console.log(uname);
     }

    }).catch((err)=>
    {
      setOnsubmit(false);
      setStatus("Server Error, Please try after sometime");

    })
  
  }
  }
  function handleFemail(e)
  {
    e.preventDefault();
    setShow(false);
    console.log(femail);
    axios.post("http://localhost:9012/fpass",{email:femail}).then((res)=>{
    setFemailStatus(res.data.message);
    setShow1(true);
     }).catch((err)=>
     {
       console.log("Server Error, Please try after sometime"); 
     })
  }
  
    return (
    <div>
      <Container id="main-container" className="d-grid h-100 d-flex align-items-center justify-content-center signinform">
            
    <Form  className="text-center w-50 center card p-3 bg-light shadow-lg mb-5 bg-body rounded"  onSubmit={handleSubmit}>
    <h4 className="fs-3 fw-normal" >Login Form</h4>
        <Form.Group>
        
        <Form.Control autoFocus placeholder="Enter Username"size ="lg"type="text" name="username"  className="position-relative" value={username} onChange={e=>setUsername(e.target.value)}/>
        <p style={{color:"red"}}>{errorusername}</p>
        </Form.Group>
      
        <br></br>
        <div className="form-group">
       
        <Form.Control placeholder="Enter Password" size ="lg" type="password" name="password"  className="position-relative" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <p style={{color:"red"}}>{errorpassword}</p>
        <br></br>
        <button type="submit"  className="btn btn-primary btn-block">Login</button>
        
        </Form>
        </Container>         
        {onsubmit && <Spinner animation="border" variant="primary" />}
        <h3>{status}</h3>
        
        <button type="submit" onClick ={handleShow} className="btn btn-primary btn-block buttons">Forgot Password</button>
        <button type="submit" onClick ={handleShow2}  className="btn btn-primary btn-block buttons">Change Password</button>
        
        

        <Modal show={show} onHide={handleClose}>
       <Modal.Header closeButton>
          <Modal.Title>Forgot Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Your Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={femail}
                onChange={e=> setFemail(e.target.value)}
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose} className="btn btn-primary btn-block">
            Close
          </button>
          <button variant="primary" onClick={handleFemail} className="btn btn-primary btn-block">
           Send
          </button>
        </Modal.Footer>
      </Modal>
      <Modal show={show1} onHide={handleClose1}>
       <Modal.Header closeButton>
          <Modal.Title>Email Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{femailstatus} Please Login with your credentials</Form.Label>
             </Form.Group>           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose1} className="btn btn-primary btn-block">
            Close
          </button>
         </Modal.Footer>
      </Modal>
      
      <Modal show={show2} onHide={handleClose2}>
       <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Your Current Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                autoFocus
                value={cpassword}
                onChange={e=> setCpassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Your New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                value={npassword}
                onChange={e=> setNpassword(e.target.value)}
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose2} className="btn btn-primary btn-block">
            Close
          </button>
          <button variant="primary" onClick={handleFemail} className="btn btn-primary btn-block">
           Send
          </button>
        </Modal.Footer>
      </Modal>
        </div>
  )
}

export default Login
