// ================================
// Importing Hooks
// ================================
import { useEffect, useState } from "react";

// ================================
// MouseMotionEffect  Component
// ================================
function MouseMotionEffect() {
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);
    const [effectClick, setEffectClick] = useState(false);

    const listClicks = ["BUTTON", "A"];
    useEffect(() => {
        window.onmousemove = function (e) {
            setOffsetX(e.screenX);
            setOffsetY(e.screenY);
            if (listClicks.includes(e.target.tagName)) setEffectClick(true);
            else if (
                e.target.parentElement &&
                listClicks.includes(e.target.parentElement.tagName)
            )
                setEffectClick(true);
            else if (e.target.classList.contains("cursor-pointer"))
                setEffectClick(true);
            else setEffectClick(false);
        };
    });

    return (
        <>
            <div
                className={`fixed w-[40px] h-[40px] border-2 border-purple-500 rounded-full duration-300 ease-linear z-50 lg:block hidden pointer-events-none ${
                    effectClick && "lg:opacity-0"
                } }`}
                style={{
                    left: offsetX - 20,
                    top: offsetY - 100,
                }}
            ></div>
            
            <div
                className={`fixed w-[10px] h-[10px] bg-blue-500 rounded-full duration-200 ease-linear z-50 lg:block hidden pointer-events-none ${
                    effectClick
                        ? "w-[70px] h-[70px] bg-blue-500/50"
                        : "w-[10px] h-[10px]"
                }`}
                style={{
                    left: effectClick ? offsetX - 35 : offsetX - 5,
                    top: effectClick ? offsetY - 115 : offsetY - 85,
                }}
            ></div>
        </>
    );
}

export default MouseMotionEffect;
