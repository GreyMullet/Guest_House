import { Link } from "react-router-dom"
import styles from './style.module.css'

const NotFound=()=>{
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.errorCode}>404</h1>
                <h2 className={styles.errorMessage}>Страница не существует, либо ещё в разработке</h2>
                <p className={styles.description}>Мы не можем найти страницу, которую вы ищете.</p>
                <Link to="/" className={styles.homeBtn}>Вернуться на главную</Link>
            </div>
        </div>
    )
}

export default NotFound