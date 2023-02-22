import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { postNewUser } from "../../../redux/actions";
import { HandleErrors } from "./HandleErrors";
import { passwordValidate } from "./HandleErrors";


export default function Singup() {

  const dispatch = useDispatch()

  const { singUpMsg } = useSelector((state) => state.getUsers)

  const [input, setInput] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  })


  const [error, setError] = useState({})
  const [passwordError, setPasswordError] =useState(null)
  const [textError, setTextError] = useState(null)
  const [locarErrors, setLocalError] = useState()
  
  useEffect(() => {
    if (singUpMsg) {
      setLocalError('Ya existe una cuenta con esa direccion de mail')
    }
  }, [singUpMsg])

  const handleChange = (e) => {
    
    setInput(
      {
        ...input,
        [e.target.name]: e.target.value
      }
    )
    setError(HandleErrors({ ...input, [e.target.name]: e.target.value }))
    setTextError(Object.entries(error))
    setPasswordError(passwordValidate({ ...input, [e.target.name]: e.target.value }))
     
  }



  const handleSubmit = async (e) => {

    setTextError(Object.entries(passwordError))
    e.preventDefault()

    const payload = {
      email: input.email,
      name: input.name,
      password: input.password
    }

    if (input.email === '' || input.name === '' || input.password === '' || input.confirmPassword === '') {
      setLocalError('Completar todos los campos')
    } else if(error.email ||error.name || passwordError.password){
      setLocalError('Revisar información del formulario')
    } else{
      dispatch(postNewUser(payload))
      setLocalError(null)
     
    }

    

  }

  return (

    <div>
      
        {textError && textError.map(e => {
          return (
            <p key={e[0]}>{e[1]}</p>
          )
        })}
  
        {locarErrors && <p>{locarErrors}</p>}
    
      <form onSubmit={e => handleSubmit(e)}>

        <div>
          <label htmlFor="email">e-mail</label>
          <input id="email" type="text" name="email" onChange={e => handleChange(e)} />

        </div>

        <div>
          <label htmlFor="name">Nombre de usuario</label>
          <input id='name' type="text" name='name' onChange={e => handleChange(e)} />
        </div>

        <div>
          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" name='password' onChange={e => handleChange(e)} />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input id="confirmPassword" type="password" name='confirmPassword' onChange={e => handleChange(e)} />
        </div>
        <div>
          <button>Enviar</button>
        </div>

      </form>


      <Link to={'/'}>Ya tengo una cuenta</Link>

    </div>
  )
} 