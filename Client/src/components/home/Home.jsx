import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../redux/actions";
import LogIn from "./LogIn";
import Register from "./Register";

export default function Home(){
    const dispatch = useDispatch()
    const {users} =useSelector((state)=>state.getUsers)

    useEffect(()=>{
       dispatch(fetchAllUsers())

    },[dispatch])


 
    return(
        <div>
        <LogIn/>
         <Register/>
        </div>
    )
}