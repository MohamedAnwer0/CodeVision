// ================================
// Importing required libraries
// ================================
import { Link } from "react-router";
import { motion } from "motion/react";

// ================================
// Importing API
// ================================
import Articles from "../../api/Articles.json";

// ================================
// Animation settings
// ================================
import { animateOpacity, transitionSettings } from "../../utils/animations";

// ================================
// Indez  Component
// ================================
function Index() {
    const listColorTechnologies = {
        HTML: `bg-orange-700`,
        CSS: `bg-blue-700`,
        JavaScript: `bg-yellow-500 text-black`,
        "Tailwind CSS": "bg-sky-600",
        TypeScript: "bg-blue-500",
        React: "bg-sky-400",
        "Framer Motion": "bg-yellow-600",
        MongoDB: "bg-green-800",
        Express: "bg-black",
        "Node.js": "bg-green-600",
    };
    return (
        <motion.div
            initial={"hidden"}
            whileInView="show"
            variants={animateOpacity}
            transition={{ ...transitionSettings, staggerChildren: 0.2 }}
            className="my-10 grid xl:grid-cols-2 gap-5"
        >
            {Articles.map((article) => {
                return (
                    <motion.div
                        variants={animateOpacity}
                        transition={transitionSettings}
                    >
                        <Link
                            to={article.title.split(" ").join("_")}
                            key={article.id}
                            className="block bg-white dark:bg-gray-900 rounded-lg p-5  space-y-10 transition-colors"
                        >
                            <div className="space-y-5">
                                <div className="flex items-center justify-between">
                                    <h1 className="dark:text-white xl:text-3xl font-bold transition-colors">
                                        {article.title}
                                    </h1>

                                    <span
                                        className={`text-white px-3 py-2 xl:text-base text-xs rounded-lg left-5 top-2 ${
                                            article.category == "Frontend"
                                                ? "bg-blue-500"
                                                : "bg-purple-500"
                                        }`}
                                    >
                                        {article.category}
                                    </span>
                                </div>

                                <p className="text-gray-700 dark:text-gray-300 text-sm xl:text-xl transition-colors">
                                    {article.description}
                                </p>
                            </div>

                            <ul className="flex items-center space-x-5">
                                {article.technologies.map(
                                    (technologie, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className={`text-white px-3 py-1 rounded-full xl:text-sm text-xs ${
                                                    listColorTechnologies[
                                                        technologie
                                                    ] ||
                                                    "bg-linear-to-l from-blue-500 to-purple-500"
                                                }`}
                                            >
                                                {technologie}
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </Link>
                    </motion.div>
                );
            })}
        </motion.div>
    );
}

export default Index;
