
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserNotes } from "../redux/actions";
import Nav from "./Nav";
import Notes from "./Notes";
import PostNote from "./PostNote";
import style from '../css/UserHome.module.css'
import addBtn from '../css/images/add.png'
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
            {user ?
                <div className={style.content}>
                <div className={style.postNote}>
                <button className={style.add_btn} onClick={e=>handleOpenPost()}><p>Crear nota</p><img src={addBtn} alt="icono de adición" /></button>
                </div>
                   { openPost && <PostNote openPost={setOpenPost} user={user} />}
                <div className={style.notes}>{ notes ?  <Notes notes={notes} userID={user} />:'algo'}
                </div></div>  
                : <p>Perdón hubo un error, estamos trabajando en ello!</p>
            }
            </div>
        </div>
    )
}