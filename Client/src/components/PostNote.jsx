import { useState } from "react"
import { useDispatch } from "react-redux"
import { getUserNotes, postNote } from "../redux/actions"
import style from '../css/PostNotes.module.css'

import closeBtn from '../css/images/close.png'
export default function ({ user, openPost }) {

    const dispatch = useDispatch()

    const [input, setInput] = useState({
        userID: user,
        title: '',
        content: '',
        color: '#4f3eb4'
    })

    const colors = ['#323575', '#911f5d', '#ef5c3e', '#31a2a4', '#f49a37']

    const [color, setColor] = useState('')

    const handleChange = (e) => {
        setInput(
            {
                ...input,
                [e.target.name]: e.target.value
            }
        )

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await dispatch(postNote(input))
        dispatch(getUserNotes(user))
        setInput(
            {
                userID: user,
                title: '',
                content: '',
                color: '#cdc7e5'
            }
        )
        openPost(false)

    }

    const handleColorPick = (e) => {
        setColor(e.target.value)
        setInput( {
            ...input,
            color: e.target.value
        })
       
    }
    return (
        <div className={style.container} >
            

            <form className={style.formBox} style={{backgroundColor:color}} id="form_notes" onSubmit={e => handleSubmit(e)}>
            <div className={style.colors}>
                {
                    colors && colors.map(e => {
                        return (
                            <button className={style.color_btn} style={{backgroundColor:e}} key={e} type='button' value={e} onClick={e => handleColorPick(e)}></button>
                        )
                    })
                }
                </div>
                <div className={style.formContent}>
                <div className={style.title}>
                    <label htmlFor="title">Título:</label>
                    <input className={style.title_inp} id="title" name="title" value={input.title} type="text" onChange={e => handleChange(e)} />
                </div>

                <div className={style.content}>
                
                    <textarea id='content' value={input.content} name="content" form="form_notes" onChange={e => handleChange(e)}></textarea>
                </div>
              

                <button type="submit"  className={style.create_btn}>Crear</button>
                <button type="button" className={style.cancel_btn} onClick={()=>openPost(false)}><img src={closeBtn}/></button>
                </div>
            </form>
        </div>
    )
}