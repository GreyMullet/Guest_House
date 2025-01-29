import { MdOutlineStar } from "react-icons/md"
import styles from './style.module.css'
import { setMarkModel } from "../models/setMarkModel"
import { useEffect } from "react"

export const SetMark: React.FC<setMarkModel>=({ setMark, mark })=>{

    function handleColor(index: number){
        return index<=mark ? { color: 'rgb(255, 187, 51)' } : { color: 'grey' }
    }

    useEffect(()=>{
        console.log(mark)
    })

    return(
        <div>
            {Array.from({ length: 5 }, (_, index)=>(
                <MdOutlineStar key={index} onClick={()=>setMark(index)} style={handleColor(index)} className={styles.star} />
            ))}
        </div>
    )
}