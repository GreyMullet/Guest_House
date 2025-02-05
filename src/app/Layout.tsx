import { Header } from "@widgets/header"
import { Outlet, useLocation } from "react-router-dom"
import './styles/layout.css'
import { FC } from "react"
import { Footer } from "@widgets/footer"
import { useTLHeadScript } from "@features/booking";

const Layout: FC=()=>{
    useTLHeadScript();

    return(
        <div className="layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout