import Card from "./Card/Card"
import style from '../css/Notes.module.css'


export default function Notes({ notes, userID }) {

    return (
        <div className={style.container}>
            {
                notes ? notes.map((e) => {
                    return (
                        <Card
                            key={e.id}

                            title={e.title}
                            content={e.content}
                            id={e.id}
                            userID={userID}
                            color={e.color}
                        />
                    )})
                    : <p>No hay ninguna nota</p>}

        </div>
    )
}