// ================================
// Importing Hooks
// ================================
import { useState } from "react";

// ================================
// Importing Hooks
// ================================
import { CiDark } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";

// ================================
// Mode  Component
// ================================
function Mode() {
    const [mode, setMode] = useState(localStorage.getItem("mode") || "light");
    const handelMode = (mode) => {
        if (mode == "dark") {
            setMode("dark");
            localStorage.setItem("mode", "dark");
        } else {
            setMode("light");
            localStorage.setItem("mode", "light");
        }
    };
    // add class mode on html tag
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(mode);
    return (
        <div
            onClick={() => handelMode(mode == "dark" ? "light" : "dark")}
            className="text-black cursor-pointer dark:text-white transition-colors"
        >
            {mode == "dark" ? (
                <IoSunnyOutline className="lg:text-[35px] text-[25px] pointer-events-none" />
            ) : (
                <CiDark className="lg:text-[35px] text-[25px] pointer-events-none" />
            )}
        </div>
    );
}

export default Mode;
