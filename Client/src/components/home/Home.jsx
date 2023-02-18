import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../redux/actions";
import LogIn from "./LogIn";
import Register from "./Register";

export default function Home(){
    const dispatch = useDispatch()
    const {isLogin} =useSelector((state)=>state.getUsers)

    useEffect(()=>{
       dispatch(fetchAllUsers())

    },[dispatch])


 
    return(
        <div>
           {
            isLogin === false ?
            <LogIn/> :
            <div>
                estas logeado
            </div>
  
           }
        </div>
    )
}