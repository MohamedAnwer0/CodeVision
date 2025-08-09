// ================================
// Importing required libraries
// ================================
import PropTypes from "prop-types";
import { motion } from "motion/react";
import { Rating } from "@smastrom/react-rating";

// ================================
// Importing Hooks
// ================================
import { useState } from "react";

// ================================
// Importing Styles
// ================================
import "@smastrom/react-rating/style.css";

// animations
const animationTabs = {
    description: {
        x: "0%",
    },
    lessons: {
        x: "-100%",
    },
    reviews: {
        x: "-200%",
    },
};

const animationContent = {
    show: {
        opacity: 1,
        display: "block",
    },
    hidden: {
        opacity: 0,
        display: "none",
    },
};

// ================================
// Details  Component
// ================================
function Details({ description, lessons, reviews }) {
    const [detailsSection, setDetailsSection] = useState("description");

    return (
        <div className="xl:col-span-2 space-y-1">
            <ul className="bg-gray-200 dark:bg-gray-900 h-[60px]  relative flex items-center justify-around rounded-xl dark:text-white xl:text-xl font-black overflow-hidden">
                <motion.li
                    initial={detailsSection}
                    animate={detailsSection}
                    variants={animationTabs}
                    className="absolute bg-gray-300 dark:bg-gray-800 w-1/3 right-0 h-full"
                ></motion.li>

                <li
                    onClick={() => setDetailsSection("description")}
                    className="z-1 cursor-pointer w-full text-center"
                >
                    وصف الدورة
                </li>

                <li
                    onClick={() => setDetailsSection("lessons")}
                    className="z-1 cursor-pointer w-full text-center border-x border-gray-400 dark:border-gray-600"
                >
                    منهاج الدورة
                </li>

                <li
                    onClick={() => setDetailsSection("reviews")}
                    className="z-1 cursor-pointer w-full text-center "
                >
                    مراجعات
                </li>
            </ul>
            <motion.div
                initial={"hidden"}
                animate={detailsSection == "description" ? "show" : "hidden"}
                variants={animationContent}
                transition={{ delay: 0.3 }}
                className="bg-gray-200 dark:bg-gray-900 rounded-xl p-5"
            >
                <div className="dark:text-white text-xl space-y-5">
                    {description.split("\n\n").map((paragraph, index) => {
                        if (paragraph.endsWith(":")) {
                            return (
                                <p key={index} className="text-3xl font-bold">
                                    {paragraph}
                                </p>
                            );
                        } else {
                            return <p key={index}>{paragraph}</p>;
                        }
                    })}
                </div>
            </motion.div>
            <motion.div
                initial={"hidden"}
                animate={detailsSection == "lessons" ? "show" : "hidden"}
                variants={animationContent}
                className="bg-gray-200 dark:bg-gray-900 rounded-xl p-5"
            >
                <ul className="space-y-10 list-decimal dark:text-white text-xl underline px-5">
                    {lessons.map((lesson, index) => {
                        return (
                            <li key={index} className=" cursor-pointer">
                                {lesson}
                            </li>
                        );
                    })}
                </ul>
            </motion.div>
            <motion.div
                initial={"hidden"}
                animate={detailsSection == "reviews" ? "show" : "hidden"}
                variants={animationContent}
                className="bg-gray-200 dark:bg-gray-900 rounded-xl p-5 space-y-5"
            >
                {reviews.map((review, index) => {
                    return (
                        <div
                            key={index}
                            className={`space-y-5 py-10 ${
                                reviews.length !== index + 1 &&
                                "border-b border-gray-400 dark:border-gray-600"
                            }`}
                        >
                            <div className="flex items-center gap-5">
                                <h3 className="dark:text-white text-2xl font-bold">
                                    {review.name}
                                </h3>

                                <Rating
                                    value={review.rating}
                                    readOnly
                                    style={{ maxWidth: "100px" }}
                                />
                            </div>

                            <p className="text-gray-600 dark:text-gray-300 text-lg">
                                {review.comment}
                            </p>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}

// ================================
//  Proptypes Validation
// ================================
Details.propTypes = {
    description: PropTypes.string,
    lessons: PropTypes.array,
    reviews: PropTypes.array,
};

export default Details;
