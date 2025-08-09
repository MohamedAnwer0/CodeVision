// libraries
import { motion } from "motion/react";
// hooks
import { useEffect, useState } from "react";
// icons
import { IoChevronUpOutline } from "react-icons/io5";
// animations
const motionInView = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
    },
};
function ToUp() {
    const [showButtonToUp, setShowButtonToUp] = useState(false);
    const toUp = () => {
        window.scrollTo(0, 0);
    };
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 650) setShowButtonToUp(true);
            else setShowButtonToUp(false);
        });
    }, []);
    return (
        <motion.div
            initial={"hidden"}
            animate={showButtonToUp ? "show" : "hidden"}
            variants={motionInView}
            onClick={toUp}
            className={`fixed bottom-5 right-5 z-50 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors ${
                showButtonToUp ? "pointer-events-auto" : "pointer-events-none"
            }`}
        >
            <IoChevronUpOutline color="white" fontSize={25} className="pointer-events-none" />
        </motion.div>
    );
}

export default ToUp;
