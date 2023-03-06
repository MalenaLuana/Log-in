import { useDispatch } from "react-redux"
import { deleteNote, getUserNotes } from "../redux/actions"
import style from '../css/Card.module.css'

export default function Card({title,content,id,userID}){

    const dispatch = useDispatch()
    
    // const [note,setNote]=setNote({
    //     title:title,
    //     note:note
    // })


    const handleClick= async()=>{
       console.log(id)
      await dispatch(deleteNote(id))
      dispatch(getUserNotes(userID
        ))
    }

    return (
        <div className={style.container}>
            
            <h3>{title}</h3>
            <p>{content}</p>
             <button className={style.close_btn} onClick={e=>handleClick(e)}>X</button>
        </div>
    )
}