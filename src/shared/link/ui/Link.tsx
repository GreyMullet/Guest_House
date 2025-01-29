import { FC, useEffect, useState } from "react"
import { LinkInterface } from "../models/linkInterface"
import { Link, useLocation } from "react-router-dom"
import styles from "./style.module.css"

export const LinkTo: FC<LinkInterface>=({name, path})=>{
    const location=useLocation()

    return <Link to={path} className={styles.link} style={path===location.pathname ? { textDecoration: 'underline' } 
    : { textDecoration: 'none' }}>{name}</Link>
}