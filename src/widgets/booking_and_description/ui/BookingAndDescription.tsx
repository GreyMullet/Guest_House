import { SearchForm } from "@features/booking"
import { BsStars } from "react-icons/bs"
import { useLocation } from "react-router"

export const BookingAndDescription=()=>{
    const location=useLocation()

    return(
        <section>
            {
                location.pathname==='/' ? 
                <span>
                    бронируйте хорошие номера для лучших впечатлений об отдыхе <BsStars />
                </span> : 
                location.pathname==='/reviews' ? 
                <span>
                    много довольных гостей. большое количество отзывов
                </span> : ''
            }
            <SearchForm />
        </section>
    )
}