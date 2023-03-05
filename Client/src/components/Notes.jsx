import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserNotes } from "../redux/actions"

import Card from "./Card"


export default function Notes({notes}) {


    
    return (
        <div>
            Notas
            {
              notes && notes.length ? notes.map(e => {
                    return (
                        <Card
                            key={e.id}
                            title={e.title}
                            content={e.content}
                        />
                    )

                })

                    : <p>No hay ninguna nota</p>
            }
        </div>
    )
}