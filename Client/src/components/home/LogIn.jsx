import { useEffect, useState } from "react"
import { useDispatch, useSelector} from "react-redux";
import { compareLoginData } from "../../redux/actions";
import { Link} from "react-router-dom";
import { reset } from "../../redux/store/slices/getUsers/getUsers";
import style from '../../css/Login.module.css'
import viewerOpen from '../../css/images/viewerOpen.png'
import viewerClose from '../../css/images/viewerClose.png'
export default function LogIn() {

  const dispatch = useDispatch()
  const {loginErrors} = useSelector(state=>state.getUsers)
  const [locarErrors, setLocalError] = useState()

  const [visible,setVisible]=useState('password')

  useEffect(()=>{
    dispatch(reset())
    if (loginErrors==='User not found') {
      setLocalError('No se encuentra un usuario con esa direccion de email')
    } else if(loginErrors==='Wrong password'){
      setLocalError('La contraseña no es correcta. Compruébala.')
    }
    setTimeout(()=>{
      setLocalError('')
    },3000)

    
  },[loginErrors,dispatch])


  const [input, setInput] = useState({
    email: '',
    password: ''
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

  const handleSubmit = (e) => {
    e.preventDefault()
    if(input.email.length>0 && input.password.length>0){
      const payload = input
      dispatch(compareLoginData(payload))     
    }else{
    setError('*Todos los campos deben ser completados')
    setTimeout(()=>{
      setError('')
    },3000)
  }
    dispatch(reset())
  }

  const handleVisiblePassword = ()=>{
    if(visible ==='password'){
      setVisible('text')
    } else {
      setVisible('password')
    }
  }


  return (
    <div className={style.container}>
       <div className={style.formBox}>
        {error &&
   
        <p className={style.localError}>{error}</p>
    }
        {locarErrors && <p className={style.localError}>{locarErrors}</p>}
      <form onSubmit={e => handleSubmit(e)} className={style.form}>
        <div className={style.formContent}>
          <label htmlFor="email">Correo electrónico</label>
          <input name='email' type="text" id="email" onChange={e => handleChange(e)} />
        </div>

        <div className={style.formContent}>
          <label htmlFor="password">Contraseña</label>
          <div>
          <input type={visible} name="password" id="password" onChange={e => handleChange(e)} />
          <span type="" onClick={e=>handleVisiblePassword()}  className={style.viewer}><img  src={visible==='password'? viewerClose:viewerOpen} alt="" /></span>
          </div>
        </div>

        <button className={style.submit_btn} type="submit">Iniciar sesión</button>
      </form>
      <div className={style.footer1}>
        
        <p>¿No tenes una cuenta?</p>
        <Link to={'/singup'} className={style.singup}><span>REGISTRATE</span></Link>
      </div>
      </div>
    
  
    </div>
  )
}