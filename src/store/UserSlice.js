import { createSlice } from "@reduxjs/toolkit";
const userSlice=createSlice({
name:"user",
initialState:{
    uname:""
},
reducers:
{
    loggedin:(state,action)=>{state.uname=action.payload},
    logout:(state)=>{state.uname=""}
}
})
export default userSlice.reducer;
export const {loggedin,logout}=userSlice.actions;
