// ================================
// Importing required libraries
// ================================
import { motion, useScroll } from "motion/react";

// ================================
// Importing Hooks
// ================================
import { memo, useEffect, useState } from "react";

// ================================
// Importing Components
// ================================
import Logo from "../../components/Logo";
import Links from "./Links";
import LinksResponse from "./LinksResponse";
import Mode from "./Mode";
import ContentUser from "./ContentUser";

// ================================
// Importing Icons
// ================================
import { VscListSelection } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";

// ================================
// Index  Component
// ================================
function Index() {
    const [stateLinksResponse, setStateLinksResponse] = useState(false);
    const [showNavBarOnScroll, setShowNavBarOnScroll] = useState(true);
    const { scrollY } = useScroll();
    useEffect(() => {
        window.onscroll = function () {
            if (scrollY.current > scrollY.prev) {
                setShowNavBarOnScroll(false);
            } else {
                setShowNavBarOnScroll(true);
            }
        };
    });

    return (
        <motion.nav
            initial={{ y: "0%" }}
            animate={showNavBarOnScroll ? { y: "0%" } : { y: "-110%" }}
            transition={{ duration: 0.3 }}
            className="bg-white p-5 fixed container left-1/2 -translate-x-1/2 top-0 rounded-lg flex items-center justify-between dark:bg-gray-900 transition-colors z-50"
        >
            <Logo className={"text-3xl "} />
            <Links />
            <LinksResponse
                show={stateLinksResponse}
                onClick={() => setStateLinksResponse(false)}
            />
            <div className="flex items-center space-x-5">
                <Mode />
                <ContentUser />
                {stateLinksResponse ? (
                    <IoMdClose
                        onClick={() =>
                            setStateLinksResponse(!stateLinksResponse)
                        }
                        fontSize={30}
                        className="text-black cursor-pointer block 2xl:hidden dark:text-white transition-colorsk"
                    />
                ) : (
                    <VscListSelection
                        onClick={() =>
                            setStateLinksResponse(!stateLinksResponse)
                        }
                        fontSize={30}
                        className="text-black cursor-pointer block 2xl:hidden dark:text-white transition-colorsk"
                    />
                )}
            </div>
        </motion.nav>
    );
}

export default memo(Index);
