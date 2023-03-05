import { useReducer, useState } from "react"
import { useDispatch } from "react-redux"
import {  postNote } from "../redux/actions"


export default function ({ user}) {

    const dispatch = useDispatch()

    const [input, setInput] = useState({
        userID: user,
        title: '',
        content: ''
    })


    const handleChange = (e) => {
        setInput(
            {
                ...input,
                [e.target.name]: e.target.value
            }
        )

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(postNote(input))
        setInput(
            {
                userID: user,
                title: '',
                content: ''
            }
        )
    }


    return (
        <div>
            <form action="" id="form_notes" onSubmit={e => handleSubmit(e)}>

                <div>
                    <label htmlFor="title">Título</label>
                    <input id="title" name="title" value={input.title} type="text" onChange={e => handleChange(e)} />
                </div>

                <div>
                    <label htmlFor="content">Descripción</label>
                    <textarea id='content' value={input.content} name="content" form="form_notes" onChange={e => handleChange(e)}></textarea>
                </div>

                <button type="submit">Crear</button>
            </form>
        </div>
    )
}