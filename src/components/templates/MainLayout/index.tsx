import Footer from "@/components/organisms/Footer"
import Header from "@/components/organisms/Header"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout