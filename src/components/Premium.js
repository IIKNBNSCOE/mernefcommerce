import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { Container } from 'react-bootstrap'
import {logout} from "../store/UserSlice"
export function Premium(){
const {uname}=useSelector(state=>state.user)
const dispatch=useDispatch()
function handleLogout(e)
{
  e.preventDefault();
  dispatch(logout())
  alert("You have successfully logged out")  
}
  return (
    <Container>
    <div><br></br>{uname!=="" &&<><h2>Welcome {uname}</h2> <button onClick={handleLogout} type="submit"  className="btn btn-primary btn-block">Logout</button></>}<br></br>
    {uname=="" && <h2>You are not allowed to see premium content.. To access it login first</h2> }
    </div>
    </Container>
  )
}

export default Premium

