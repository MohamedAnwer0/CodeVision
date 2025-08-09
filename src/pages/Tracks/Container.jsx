// libraries
import PropTypes from "prop-types";
import { motion } from "motion/react";
import { Link } from "react-router";

// animations
const animateOpacity = {
    hidden: {
        opacity: 0,
        filter: "blur(10px)",
    },
    show: {
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            ease: "linear",
            duration: 0.8,
        },
    },
};

function Container({ title, description, levels }) {
    const evenStyle = `xl:mr-0`;
    const oddStyle = `xl:mr-[calc(50%+150px)]`;
    return (
        <div className="space-y-10">
            <div className="space-y-3 text-center">
                <motion.h1
                    initial={"hidden"}
                    whileInView={"show"}
                    variants={animateOpacity}
                    className="text-2xl font-bold transition-colors md:text-3xl dark:text-white"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={"hidden"}
                    whileInView={"show"}
                    variants={animateOpacity}
                    transition={{
                        delay: 0.3,
                    }}
                    className="transition-colors dark:text-gray-200 "
                >
                    {description}
                </motion.p>
            </div>
            <motion.div
                initial={"hidden"}
                animate={"show"}
                variants={animateOpacity}
                transition={{
                    delay: 0.8,
                }}
                className="relative space-y-20 py-20 before:absolute before:w-[2px] before:h-full before:rounded before:top-0 before:bg-purple-500 xl:before:right-1/2 before:right-[30px] xl:before:translate-x-1/2"
            >
                {levels.map((level, index) => {
                    return (
                        <div
                            key={index}
                            className={`w-[calc(100%-80px)] xl:w-[calc(50%-150px)] mr-[80px] rounded-lg ${
                                (index + 1) % 2 == 0 ? oddStyle : evenStyle
                            }`}
                        >
                            <motion.span
                                initial={"hidden"}
                                whileInView={"show"}
                                variants={animateOpacity}
                                className="absolute  w-[60px] xl:w-[100px] h-[60px] xl:h-[100px] right-0 xl:right-1/2 xl:translate-x-1/2 border-[2px] border-purple-500 text-white font-bold rounded-full bg-purple-500 flex items-center justify-center xl:text-xl transition-colors duration-500"
                            >
                                {level.level}
                            </motion.span>
                            <motion.div
                                initial={"hidden"}
                                whileInView={"show"}
                                variants={animateOpacity}
                                transition={{
                                    delay: 0.3,
                                }}
                                viewport={{
                                    margin: "0px 0px -250px 0px",
                                }}
                            >
                                <h2 className="text-2xl font-bold transition-colors dark:text-white">
                                    الدورات
                                </h2>
                                <ul className="p-5 space-y-2 list-decimal xl:space-y-10">
                                    {level.courses.map((course, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="pb-5 transition-colors border-b border-gray-400 xl:text-xl dark:border-gray-700 dark:text-white"
                                            >
                                                <Link
                                                    to={`/courses/${course
                                                        .split(" ")
                                                        .join("_")}`}
                                                >
                                                    {course}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </motion.div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}

Container.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    courses: PropTypes.array,
};

export default Container;
