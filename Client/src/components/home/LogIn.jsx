import { useState } from "react"
import { useDispatch} from "react-redux";
import { compareLoginData } from "../../redux/store/slices/getUsers/getUsers";
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

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(compareLoginData(input))
  }


  return (
    <div>
      <form onSubmit={e=>handleSubmit(e)}>
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
    </div>
  )
}