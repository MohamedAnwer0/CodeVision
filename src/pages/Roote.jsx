// hooks
import { useEffect, useState } from "react";
// routeing
import { Outlet, useLocation } from "react-router";
// layouts
import NavBar from "../layouts/NavBar";
import ToUp from "../layouts/ToUp";
import Footer from "../layouts/Footer";
// components
import MouseMotionEffect from "../components/MouseMotionEffect";

function Roote() {
    const { pathname } = useLocation();

    // Get height navbar and then place it in the hero section so that it appears naturally on the screen.
    const [heightNavBar, setHeightNavBar] = useState(0);
    useEffect(() => {
        const navBar = document.querySelector("nav");
        setHeightNavBar(navBar.offsetHeight);

        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className="container relative px-2 mx-auto lg:px-0">
            <NavBar />
            <MouseMotionEffect />
            <div
                className="min-h-[950px]"
                style={{ paddingTop: `${heightNavBar + 8}px` }}
            >
                <Outlet />
            </div>
            <Footer />
            <ToUp />
        </div>
    );
}

export default Roote;
