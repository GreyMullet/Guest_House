import axios from "axios"
import { userData } from "./models/dataUserModel"

export const reqAddReview=(data: userData)=>{
    return axios.post('https://svetlana-guest-house.com/server/comment.php', data)
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}