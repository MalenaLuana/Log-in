import Card from "./Card"
import style from '../css/Notes.module.css'

export default function Notes({notes,userID}) {
    
   

    return (
        <div className={style.container}>
         <div  className={style.content}>
            {
              notes && notes.length ? notes.map(e => {
                    return (
                        <Card
                            key={e.id}
                            title={e.title}
                            content={e.content}
                            id={e.id}
                            userID={userID}
                        />
                    )

                })

                    : <p>No hay ninguna nota</p>
            }
            </div>
        </div>
    )
}