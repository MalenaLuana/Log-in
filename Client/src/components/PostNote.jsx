import { useState } from "react"
import { useDispatch } from "react-redux"
import { getUserNotes, postNote } from "../redux/actions"
import style from '../css/PostNotes.module.css'

export default function ({ user }) {

    const dispatch = useDispatch()

    const [input, setInput] = useState({
        userID: user,
        title: '',
        content: '',
        color: '#cdc7e5'
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

    }

    const handleColorPick = (e) => {
        setColor(e.target.value)
        setInput( {
            ...input,
            color: e.target.value
        })
       
    }
    return (
        <div className={style.container}>
            <form id="form_notes" onSubmit={e => handleSubmit(e)}>

                <div>
                    <label htmlFor="title">Título</label>
                    <input id="title" name="title" value={input.title} type="text" onChange={e => handleChange(e)} />
                </div>

                <div>
                    <label htmlFor="content">Descripción</label>
                    <textarea id='content' value={input.content} name="content" form="form_notes" onChange={e => handleChange(e)}></textarea>
                </div>
                <div className={style.colors}>
                {
                    colors && colors.map(e => {
                        return (
                            <button className={style.color_btn} style={{backgroundColor:e}} key={e} type='button' value={e} onClick={e => handleColorPick(e)}></button>
                        )
                    })
                }
                </div>

                <button type="submit">Crear</button>
            </form>
        </div>
    )
}