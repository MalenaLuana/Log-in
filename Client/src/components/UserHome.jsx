
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../redux/store/slices/getUsers/getUsers";

export default function UserHome(){

    const dispatch= useDispatch()
    const {user}=useSelector(state=>state.getUsers)
    
  
    
    const handleLogOut = ()=>{
       window.localStorage.removeItem('loggedUserData')
      dispatch(logOut())
    }

    
    
return (
    <div>
     User home
     <Link to={'/'}><button onClick={e=>handleLogOut( )}>Log out</button></Link>
    </div>
)}