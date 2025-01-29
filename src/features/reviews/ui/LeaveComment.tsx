import React, { useContext, useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { reqAddReview } from "@shared/api"
import { userData } from "../models/signUpModel"
import { SetMark } from "./SetMark"
import { ReviewsContext } from "@pages/reviews"
import styles from "./style.module.css"

export const LeaveComment: React.FC=()=>{
  const context=useContext(ReviewsContext)
  const [message, setMessage]=useState<string|null>(null)
  const [mark, setMark]=useState<number>(0)

  if (!context){
    throw new Error("AuthContext must be used within a Provider")
  }

  const { setOpen }=context

  const { register, handleSubmit, formState: { errors } }=useForm<userData>();

  const onSubmit: SubmitHandler<userData>=async (data)=>{
    console.log({ ...data, mark })
    try{
      await reqAddReview({ ...data, mark })
      setMessage("На вашу почту отправлена ссылка для подтверждения комментария.")
    } catch (error){
      console.error("Ошибка при отправке данных:", error)
      setMessage("Произошла ошибка. Попробуйте снова.")
    }
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <button className={styles.close} onClick={()=>setOpen(false)}>x</button>
      <h1>Оставьте комментарий</h1>
      {message && <p className={styles.message}>{message}</p>}
      <input
        type="text"
        autoComplete="off"
        placeholder="Фамилия, имя"
        {...register("name", { required: "Имя обязательно" })}
      />
      {errors.name && <p>{errors.name.message}</p>}
      <input
        type="email"
        autoComplete="off"
        placeholder="Email"
        {...register("email", {
          required: "Email обязателен",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Неверный формат email",
          },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <textarea placeholder="Ваш отзыв" {...register("comment", { required: "Отзыв обязателен" })}></textarea>
      {errors.comment && <p>{errors.comment.message}</p>}
      <SetMark setMark={setMark} mark={mark} />
      <button type="submit" className={styles.submit}>Отправить</button>
    </form>
  )
}