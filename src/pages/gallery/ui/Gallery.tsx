import { GalleryPicture, pics } from "@shared/gallery_picture"
import styles from "./style.module.css"

const Gallery=()=>{
    return(
        <div className={styles.gallery}>
            {
                pics.map((el)=>{
                    return <GalleryPicture alt={el.alt} path={el.path} key={el.path} />
                })
            }
        </div>
    )
}

export default Gallery