import { Header } from "@widgets/header"
import { Outlet } from "react-router-dom"
import './styles/layout.css'
import { FC } from "react"

const Layout: FC=()=>{
    return(
        <div className="layout">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout