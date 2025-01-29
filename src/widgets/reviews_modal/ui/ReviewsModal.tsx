import ReactDOM from 'react-dom'
import styles from './style.module.css'
import { LeaveComment } from '@features/reviews'

const body=document.body

export const ReviewsModal=()=>{
  return ReactDOM.createPortal(
    <div className={styles.modalAuth}>
      <LeaveComment />
    </div>,
    body
  )
}