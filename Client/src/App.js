
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router,Route, Routes,redirect, Navigate} from 'react-router-dom'
import Home from './components/home/Home';
import Singup from './components/home/singUp/SingUp';

import UserHome from './components/UserHome';


function App() {

const {isLogin} = useSelector(state =>state.getUsers)
const [user,setUser] = useState(null)
 

useEffect(()=>{
  const user = window.localStorage.getItem('loggedUserData')
  if(user){
    const data= JSON.parse(user)
    setUser(data)
  }
},[isLogin])

  return (
    <Router>
      <Routes>
       <Route exact path="/" element={user? <Navigate to={'/home'}/> :<Home/> }/>  
       <Route exact path="/singup" element={user?<Navigate to={'/home'}/> :<Singup/>}/> 
       <Route exact path="/home" element={user? <UserHome/>:<Navigate to={'/'}/>}/> 
       </Routes>
    </Router>
  );
  
}

export default App;
