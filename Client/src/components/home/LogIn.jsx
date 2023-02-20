import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { compareLoginData } from "../../redux/actions";
import { Link,useNavigate} from "react-router-dom";


export default function LogIn() {

  const dispatch = useDispatch()


  const [input, setInput] = useState({
    email: '',
    password: ''
  })



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
    const payload = input
    dispatch(compareLoginData(payload))
   
  }



  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor="email">e-mail</label>
          <input name='email' type="text" id="email" onChange={e => handleChange(e)} />
        </div>

        <div>
          <label htmlFor="password">contraseña</label>
          <input type="password" name="password" id="password" onChange={e => handleChange(e)} />
        </div>

        <button type="submit">ingresar</button>
      </form>
      <div>
        <Link to={'/singup'}><button >Registrarse</button></Link>
      </div>
    </div>
  )
}