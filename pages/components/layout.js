import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }) {
    return (
        <>
            <div class="relative">
                <div class="fixed top-0 left-0 w-full h-22 bg-white text-black text-center z-50">
                    <Header/>
                </div>
                <div>{children}</div>
            </div>
            <Footer/>
        </>
    )
}