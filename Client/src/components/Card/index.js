
import { deleteNote,getUserNotes,editeNote } from "../../redux/actions"



export const handleClick = async (id,userID,dispatch) => {

    await dispatch(deleteNote(id))
    dispatch(getUserNotes(userID))
}


export const handleEnabledInput = (enableEdit,setEnableEdit) => {
    enableEdit ? setEnableEdit(false)
        : setEnableEdit(true)
}


export const handleTitleChange = (setChangeTitle,e) => {
    setChangeTitle(
        { title: e.target.value }
    )

}

export const handleEditTitle = async (setEnableEdit,id,changeTitle,userID,dispatch) => {
    const payload = {
        id: id,
        object: changeTitle
    }
    await dispatch(editeNote(payload))
    dispatch(getUserNotes(userID))
    setEnableEdit(false)

}

export const handleContentChange = (setChangeContent,e) => {
    setChangeContent(
        { content: e.target.value }
    )
}

export const handleEditContent = async (setEnableEdit,id,changeContent,userID,dispatch) => {
    const payload = {
        id: id,
        object: changeContent
    }
    await dispatch(editeNote(payload))
    dispatch(getUserNotes(userID))
    setEnableEdit(false)

}
