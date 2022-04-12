import React from 'react'

function UpdatePassword() {
  return (
    <div>
    <Container id="main-container" className="d-grid h-100 d-flex align-items-center justify-content-center">
          <Form className="text-center w-50 center card p-3 bg-light registerform shadow-lg mb-5 bg-body rounded" onSubmit={handleRegister}>
          <h4 className="fs-3 fw-normal">Registration Form</h4>
          <Form.Group>
          <Form.Control placeholder="Enter Username" size="lg" type="text"  name="username"  className ="position-relative" value={username} onChange={e=>setUsername(e.target.value)} />
          </Form.Group>
          <Form.Group>
          <br/>
          <Form.Control placeholder="Enter Password" size ="lg" type="text" name="password"  className="position-relative" value={password} onChange={e=>setPassword(e.target.value)}  />
          </Form.Group>
          <Form.Group>
        <br/>
         <Form.Control placeholder="Enter EmailId" size ="lg" type="text" name="email"  className="position-relative" value={email} onChange={e=>setEmail(e.target.value)} />
         </Form.Group>
         <br></br>
          <button type="submit"  className="btn btn-primary btn-block" >Register</button>
          
          
          </Form>
          </Container>
          
      </div>
  )
}

export default UpdatePassword