import axios from "axios"

export const reqGetReviews=()=>{
    return axios.get('https://svetlana-guest-house.com/server/get_reviews.php')
}