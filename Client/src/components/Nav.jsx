import { useDispatch } from 'react-redux'
import logo from '../css/images/logo1.png'
import { logOut } from '../redux/store/slices/getUsers/getUsers'
import style from '../css/Nav.module.css'

export default function Nav({userName}) {


    const dispatch = useDispatch()

    const handleClick = () => {
       
        dispatch(logOut())
        window.localStorage.removeItem('loggedUserData')
        window.location.reload()
    }

    return (

        <div className={style.container}>
            <div className={style.logo}>
                <img src={logo} alt="Page logo"  />
            </div>
            <div className={style.text}>
                <p>Hola</p>
                <h3>{userName}</h3>
            </div>
            <div>
                <button onClick={e => handleClick()}>Salir</button>
            </div>


        </div>

    )
}