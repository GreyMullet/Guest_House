import { GalleryPicture, pics } from "@shared/gallery_picture"
import styles from "./style.module.css"
import { SearchForm } from "@features/booking";

const Gallery=()=>{
    return(
        <div className={styles.gallery}>
            <SearchForm variant="inner" />
            {
                pics.map((el)=>{
                    return <GalleryPicture alt={el.alt} path={el.path} key={el.path} />
                })
            }
        </div>
    )
}

export default Gallery