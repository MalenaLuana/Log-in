import { Link } from "react-router-dom";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { postNewUser } from "../../../redux/actions";
import { HandleErrors } from "./HandleErrors";
import { passwordValidate } from "./HandleErrors";
import style from '../../../css/Singup.module.css'
import { reset } from "../../../redux/store/slices/getUsers/getUsers";

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
    setTimeout(()=>{
      setLocalError('')
    },3000)
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
    setTimeout(()=>{
      setTextError('')
      setError('')
    },3000)
  }



  const handleSubmit = async (e) => {

    setTextError(Object.entries(passwordError))
    e.preventDefault()

    const payload = {
      email: input.email,
      name: input.name,
      password: input.password
    }

    if (payload.email === '' || payload.name === '' || payload.password === '' || payload.confirmPassword === '') {
      setLocalError('Completar todos los campos')
      setTimeout(()=>{
        setLocalError('')
      },3000)
    } else if(!error.email &&!error.name && !passwordError.password){
     
  
      dispatch(postNewUser(payload))
      setLocalError(null)
     
    }
    setTimeout(()=>{
      setTextError('')
    },3000)
    dispatch(reset())
    

  }

  return (

    <div className={style.container}>

      <div className={style.titleContent}>
        <p>Bienvenidx a </p>
        <p className={style.title}>NotaTodo</p>
        <p className={style.subtitle}>Rellena el formulario para empezar</p>
      </div>
      
      <div className={style.formBox}>
        {textError && textError.map(e => {
          return (
            <p className={style.localError} key={e[0]}>{e[1]}</p>
          )
        })}
  
        {locarErrors && <p className={style.localError}>{locarErrors}</p>}
    
      <form onSubmit={e => handleSubmit(e)} className={style.form}>

        <div className={style.formContent}>
          <label htmlFor="email">e-mail</label>
          <input id="email" type="text" name="email" onChange={e => handleChange(e)} />

        </div>

        <div className={style.formContent}>
          <label htmlFor="name">Nombre de usuario</label>
          <input id='name' type="text" name='name' onChange={e => handleChange(e)} />
        </div>

        <div className={style.formContent}>
          <label htmlFor="password">Contraseña</label>
          <input id="password" type="password" name='password' onChange={e => handleChange(e)} />
        </div>
        <div className={style.formContent}>
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input id="confirmPassword" type="password" name='confirmPassword' onChange={e => handleChange(e)} />
        </div>
        
          <button className={style.submit_btn}>Crear cuenta</button>
     

      </form>
      <div className={style.footer}>
         <p>Ya tengo una cuenta</p>
      <Link to={'/'} className={style.login}>Iniciar sesión</Link>
      </div>
      </div>
      
    </div>
  )
} 