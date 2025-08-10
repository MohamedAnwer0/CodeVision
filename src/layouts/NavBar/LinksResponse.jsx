// ================================
// Importing required libraries
// ================================
import PropTypes from "prop-types";
import { motion } from "motion/react";
import { Link } from "react-router";

// ================================
// Importing Hooks
// ================================
import { useSelector } from "react-redux";

const listLinks = [
    {
        id: 1,
        title: "الرئيسية",
        to: "/",
    },
    {
        id: 2,
        title: "المسارات التعليمية",
        to: "/tracks",
    },
    {
        id: 3,
        title: "الكورسات",
        to: "/courses",
    },
    {
        id: 4,
        title: "التمارين والمشاريع",
        to: "/exercises",
    },
    {
        id: 5,
        title: "المجتمع",
        to: "/community",
    },
    {
        id: 6,
        title: "المقالات ",
        to: "/articles",
    },
    {
        id: 7,
        title: "محرر الاكواد",
        to: "/codeEditor",
    },
];
// ================================
// Animation
// ================================
const animate = {
    show: {
        y: "0px",
        opacity: 1,
    },
    hidden: {
        y: "-30px",
        opacity: 0,
    },
};

// ================================
// LinksResponse  Component
// ================================
function LinksResponse({ show, onClick }) {
    const { isAuthenticated } = useSelector((state) => state.Auth);

    return (
        <motion.div
            initial={"hidden"}
            animate={show ? "show" : "hidden"}
            variants={animate}
            className={`block 2xl:hidden bg-white shadow rounded absolute top-[calc(100%+10px)] w-full left-0 dark:bg-gray-900 ${
                show ? "pointer-events-auto" : "pointer-events-none"
            }`}
        >
            <ul className="space-y-5  text-black dark:text-white">
                {listLinks.map((link) => {
                    return (
                        <li key={link.id}>
                            <Link
                                onClick={onClick}
                                to={link.to}
                                className="block px-5 py-3 hover:bg-gray-100 font-semibold text-lg dark:hover:bg-gray-700 transition-colors"
                            >
                                {link.title}
                            </Link>
                        </li>
                    );
                })}
                {!isAuthenticated && (
                    <>
                        <li>
                            <Link
                                to={"/signin"}
                                className="block px-5 py-3 hover:bg-gray-100 font-semibold text-lg dark:hover:bg-gray-700 transition-colors"
                            >
                                تسجيل الدخول
                            </Link>
                        </li>
                        <li>
                            <Link className="block px-5 py-3 hover:bg-gray-100 font-semibold text-lg dark:hover:bg-gray-700 transition-colors">
                                أنشاء حساب
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </motion.div>
    );
}

// ================================
//  PropTypes Validation
// ================================
LinksResponse.propTypes = {
    show: PropTypes.bool,
};
export default LinksResponse;
