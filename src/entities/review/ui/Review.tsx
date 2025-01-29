import { FC } from "react"
import { MdOutlineStar } from "react-icons/md"
import { reviewModel } from "../models/reviewModel"
import styles from './style.module.css'

export const Review: FC<reviewModel>=({ name, stars, review })=>{
    return(
        <li>
            <h1>{name}</h1>
            {Array.from({ length: stars }, (_, index)=>(
                <MdOutlineStar key={index} className={styles.star} />
            ))}
            <p>{review}</p>
        </li>
    )
}