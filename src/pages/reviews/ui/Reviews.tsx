import { BookingAndDescription } from "@widgets/booking_and_description"
import { createContext, useEffect, useState } from "react"
import { ReviewsContextType } from "../models/modelSetOpen"
import { ReviewsModal } from "@widgets/reviews_modal"
import { Review } from "@entities/review"
import styles from './style.module.css'
import { reqGetReviews } from "@shared/api"
import { reviewModel } from "../models/reviewModel"

export const ReviewsContext=createContext<ReviewsContextType>({
    setOpen: ()=>{}
})


export const Reviews=()=>{
    const [isOpen, setOpen]=useState<boolean>(false)
    const [reviews, setReviews]=useState<reviewModel[]>([])

    useEffect(()=>{
        reqGetReviews()
        .then(res=>{
            if (Array.isArray(res.data.data)){
                setReviews(res.data.data)
            }else{
                console.error("Expected an array but got:", res.data)
                setReviews([])
            }
        })
        .catch(err=>console.log("Error fetching reviews:", err))
    }, [])     
    
    return(
        <>
            <div className={styles.reviewsContainer}>
                <BookingAndDescription />
                <section className={styles.commentsContainer}>
                    {
                        reviews.length>0 ? 
                        <ul className={styles.reviews}>
                            {
                                reviews.map((review)=>{
                                    return <Review name={review.name} stars={review.mark} review={review.comment} 
                                    key={review.confirmed_at} />
                                })
                            }
                        </ul> : 
                        <span className={styles.noReviews}>
                            Ещё нет отзывов
                        </span>
                    }
                    <button 
                    onClick={()=>setOpen(true)}
                    aria-haspopup="dialog"
                    aria-expanded={isOpen}
                    >Оставить отзыв</button>
                </section>
            </div>
            {
                isOpen && 
                <ReviewsContext.Provider value={{ setOpen }}>
                    <ReviewsModal />
                </ReviewsContext.Provider>
            }
        </>
    )
}