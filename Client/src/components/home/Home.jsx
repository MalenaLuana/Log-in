
import LogIn from "./LogIn";
import style from "../../css/Home.module.css"
export default function Home() {


    return (
        <div className={style.container}>
            <div className={style.titleBox}>
                <div className={style.titlecontent}>
                <p className={style.title}>NotaTodo</p>
                <p className={style.subtitle}>Block de notas on-line</p>
                </div>
                <div className={style.details}>
                    <p>NotaTodo es una aplicación pensada para que puedas organizar tus tareas. Puedes crear listas, añadir detalles, comentarios y mucho más.</p>
                </div>
            </div>
            <LogIn />

            <div>

            </div>
        </div>
    )
}