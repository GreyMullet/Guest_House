import { FC } from "react"
import { modelGallery } from "../models/modelGallery"
import styles from './style.module.css'

export const GalleryPicture: FC<modelGallery>=({ path, alt })=>{
    return <div style={{ backgroundImage: `url(${path})` }} className={styles.img}>
        {
            !path && alt
        }
    </div>
}