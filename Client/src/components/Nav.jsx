import { useDispatch } from 'react-redux'
import logo from '../css/images/logo1.png'
import { logOut } from '../redux/store/slices/getUsers/getUsers'
import style from '../css/Nav.module.css'

import logoutBtn from '../css/images/logOut.png'
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
                <button className={style.logOut_btn} onClick={e => handleClick()}>Salir <img src={logoutBtn}/></button>
            </div>


        </div>

    )
}