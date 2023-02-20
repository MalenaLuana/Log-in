import { Link } from "react-router-dom";
import {  useState } from "react"
import { useDispatch } from "react-redux";
import { postNewUser } from "../../../redux/actions";
import HandleErrors from "./HandleErrors";

export default function Singup (){

  const dispatch = useDispatch()

  const [input,setInput]= useState({
    email:'',
    name:'',
    password:'',
    confirmPassword:''
  })


 const [error,setError]=useState(null)

  const handleChange = (e) => {
    setInput(
      {
        ...input,
        [e.target.name]: e.target.value
      }
    )
  }


  const handleSubmit = async(e) => {
    
    e.preventDefault()
    const payload = {
      email:input.email,
      name:input.name,
      password:input.password
    }
    if(payload.email.length>0 && payload.name.length>0 && payload.password.length>0 && payload.confirmPassword.length>0)
    {dispatch(postNewUser(payload))}
    else{
      setError('Todos los campos deben ser completados')
      setTimeout(()=>{
        setError('')
      },2000)
    }
    
  }

    return(

      <div>
        <form onSubmit={e=>handleSubmit(e)}>

          <div>
          <label htmlFor="email">e-mail</label>
          <input id="email" type="text" name="email" onChange={e=>handleChange(e)}/>
          </div>

          <div>
          <label htmlFor="name">Nombre de usuario</label>
          <input id='name' type="text" name='name' onChange={e=>handleChange(e)} />
          </div>

          <div>
          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" name='password' onChange={e=>handleChange(e)} />
          </div>
          <div>
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input id="confirmPassword" type="password" name='confirmPassword' onChange={e=>handleChange(e)} />
          </div>
          <div>
            <button>Enviar</button>
          </div>

        </form>
       
       <Link to={'/'}>Ya tengo una cuenta</Link>
       <HandleErrors input={input}/>
        <p>{error && error}</p>
      </div>
    )
} 