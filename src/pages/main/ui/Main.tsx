import Sea from "@shared/assets/sea.png"
import styles from "./style.module.css"
import { BookingAndDescription } from "@widgets/booking_and_description";

const Main=()=>{
    return(
        <div className={styles.main}>
            <BookingAndDescription />
            <img src={Sea} alt="sea" />
        </div>
    )
}

export default Main