// import { GalleryPicture, pics } from "@shared/gallery_picture"
import styles from "./style.module.css"
import {useTLHeadScript} from "../../../features/booking";

const Booking=()=>{
    useTLHeadScript();

    return(
        <div className={styles.bookingBlock}>
            {
                <div id="tl-booking-form" className={styles.booking}></div>
            }
        </div>
    )
}

export default Booking;
