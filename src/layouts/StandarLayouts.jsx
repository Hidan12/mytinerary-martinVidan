import { Outlet } from "react-router-dom"
import { Header } from "../components/header/Header"
import { Footer } from "../components/footer/Footer"

const StandarLayouts = ()=>{
    return(
        <>
            <Header/>
            <Outlet></Outlet>
            <Footer/>
        </>
    )
}
export {StandarLayouts}