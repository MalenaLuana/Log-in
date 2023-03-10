import { useDispatch } from "react-redux"
import { deleteNote, editeNote, getUserNotes } from "../../redux/actions"
import style from '../../css/Card.module.css'
import { useState } from "react"
import garbage from '../../css/images/garbage.png'
import pencil from '../../css/images/pencil.png'
import { handleClick,handleEnabledInput,handleEditTitle,handleTitleChange,handleEditContent,handleContentChange } from "."


export default function Card({ title, content, id, userID, color }) {

    const dispatch = useDispatch()

    const [enableEdit, setEnableEdit] = useState(false)

    const [changeTitle, setChangeTitle] = useState(
        {
            title: title
        }
    )
    const [changeContent, setChangeContent] = useState(
        {
            content: content
        }
    )

   
    return (
        <div className={style.container} style={{ backgroundColor: color }}>
            <div className={style.box}>
                {enableEdit ?
                    <input value={changeTitle.title} name='title' className={style.titleInput} onChange={e => handleTitleChange(setChangeTitle,e)} onBlur={e => handleEditTitle(setEnableEdit,id,changeTitle,userID,dispatch)}></input>
                    : <h3 className={style.title}>{title}</h3>
                }
                {enableEdit ? <textarea value={changeContent.content} className={style.contentInput}  onChange={e => handleContentChange(setChangeContent,e)} onBlur={e => handleEditContent(setEnableEdit,id,changeContent,userID,dispatch)}></textarea>
                    : <p className={style.content}>{content}</p>}
            </div>
            <div className={style.options}>
                <label htmlFor="title"> <button className={style.editbtn} onClick={e => handleEnabledInput(enableEdit,setEnableEdit)} ><img src={pencil} className={style.btnImg} /></button></label>
            
                <button className={style.editbtn} onClick={e => handleClick(id,userID,dispatch)}><img src={garbage} className={style.btnImg} /></button>
            </div>
        </div>
    )
}