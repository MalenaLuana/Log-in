
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserNotes } from "../redux/actions";
import Nav from "./Nav";
import Notes from "./Notes";
import PostNote from "./PostNote";
import style from '../css/UserHome.module.css'

export default function UserHome() {
     
    const dispatch = useDispatch()
  
    const { notes } = useSelector(state => state.getNotes)
  
    const [user, setUser] = useState(null)
    const [name, setName] = useState(null)

    const [openPost,setOpenPost] = useState(false)

    useEffect(() => {
        const userData = window.localStorage.getItem('loggedUserData')
        const user = JSON.parse(userData)
        dispatch(getUserNotes(user.id))
        setUser(user.id)
        setName(user.name)
    
    },[dispatch])

const handleOpenPost = ()=>{
   openPost? setOpenPost(false)
   : setOpenPost(true)
}
    return (
        <div className={style.container}>
            <Nav userName={name}/>
            <div className={style.dashboard}>
                <button onClick={e=>handleOpenPost()}>Crear</button>
            {user ?
                <div className={style.content}>
                   { openPost && <PostNote user={user} />}
                    <Notes notes={notes} userID={user} />
                </div>
                : <p>Perdón hubo un error, estamos trabajando en ello!</p>
            }
            </div>
        </div>
    )
}