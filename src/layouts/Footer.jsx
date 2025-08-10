// ================================
// Importing required libraries
// ================================
import { Link } from "react-router";
import { motion } from "motion/react";

// ================================
// Importing Components
// ================================
import Logo from "../components/Logo";

// ================================
// Importing Icons
// ================================
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

// ================================
// Animation settings
// ================================
import { animateOpacity, transitionSettings } from "../utils/animations";

// ================================
//  List Links
// ================================
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
function Footer() {
    return (
        <motion.footer
            initial={"hidden"}
            whileInView={"show"}
            variants={animateOpacity}
            transition={transitionSettings}
            className="py-5 my-10 space-y-10 text-center bg-white dark:bg-gray-900 rounded-xl transition-colors"
        >
            <div className="col-span-2 space-y-1">
                <Logo className={"text-5xl"} />
                <p className="my-5 text-gray-800 dark:text-gray-300 lg:w-[60%] mx-auto leading-10 transition-colors">
                    كودفيجن هي منصة تعليمية متخصصة تهدف إلى تمكين الأفراد من
                    احتراف تطوير الويب، سواء في الواجهة الأمامية أو الخلفية ، من
                    خلال منهج تعليمي متكامل يجمع بين التعلم التفاعلي والتطبيق
                    العملي
                </p>
            </div>
            <ul className="flex flex-col col-span-2 gap-5 mx-auto lg:flex-row w-fit">
                {listLinks.map((link) => {
                    return (
                        <li
                            key={link.id}
                            className="text-black dark:text-white transition-colors"
                        >
                            <Link to={link.to}>{link.title}</Link>
                        </li>
                    );
                })}
            </ul>
            <ul className="flex col-span-2 gap-5 mx-auto text-black w-fit dark:text-white transition-colors">
                <li className="transition cursor-pointer hover:scale-125">
                    <FaFacebookF
                        fontSize={30}
                        className=" pointer-events-none"
                    />
                </li>
                <li className="transition cursor-pointer hover:scale-125">
                    <FaInstagram
                        fontSize={30}
                        className=" pointer-events-none"
                    />
                </li>
                <li className="transition cursor-pointer hover:scale-125">
                    <FaXTwitter
                        fontSize={30}
                        className=" pointer-events-none"
                    />
                </li>
                <li className="transition cursor-pointer hover:scale-125">
                    <FaLinkedinIn
                        fontSize={30}
                        className=" pointer-events-none"
                    />
                </li>
                <li className="transition cursor-pointer hover:scale-125">
                    <FaGithub fontSize={30} className=" pointer-events-none" />
                </li>
            </ul>
        </motion.footer>
    );
}

export default Footer;
