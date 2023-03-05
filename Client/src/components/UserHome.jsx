
import { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserNotes } from "../redux/actions";
import Notes from "./Notes";
import PostNote from "./PostNote";

export default function UserHome() {
     
    const dispatch = useDispatch()
  
    const { notes } = useSelector(state => state.getNotes)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const userData = window.localStorage.getItem('loggedUserData')
        const user = JSON.parse(userData)
        dispatch(getUserNotes(user.id))
        setUser(user.id)

       
    }, [dispatch])


    return (
        <div>
            {user ?
                <div>
                    <Notes notes={notes} />
                    <PostNote user={user} />
                </div>
                : <p>Perdón hubo un error, estamos trabajando en ello!</p>
            }

        </div>
    )
}