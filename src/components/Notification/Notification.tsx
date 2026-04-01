import css from "./Notification.module.css"

export default function Notification(){
    return(
        <div className={css.message}>
        <p>No feedback yet</p>
        </div>
    )
}