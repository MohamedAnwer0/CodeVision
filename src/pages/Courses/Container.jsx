// ================================
// Importing required libraries
// ================================
import PropTypes from "prop-types";
import { motion } from "motion/react";
import { memo } from "react";

// ================================
// Importing components
// ================================
import { ButtonBasc } from "../../components/Buttons";

// ================================
// Importing Images
// ================================
import { CoursesImage } from "../../import/Images";

// ================================
// Importing Icons
// ================================
import { GoArrowUpRight } from "react-icons/go";

// ================================
// Animation settings
// ================================
import { animateOpacity, transitionSettings } from "../../utils/animations";

// ================================
// Container  Component
// ================================
function Container({ title, courses }) {
    return (
        <section className="space-y-10">
            <motion.h1
                initial={"hidden"}
                whileInView={"show"}
                variants={animateOpacity}
                transition={transitionSettings}
                className="text-4xl font-bold dark:text-white"
            >
                {title}
            </motion.h1>

            <motion.div
                initial={"hidden"}
                whileInView="show"
                variants={animateOpacity}
                transition={{ ...transitionSettings, staggerChildren: 0.2 }}
                className="grid  md:grid-cols-2 xl:grid-cols-3 gap-5"
            >
                {courses.map((course) => {
                    return (
                        <motion.div
                            variants={animateOpacity}
                            key={course.id}
                            className=" bg-gray-200 dark:bg-gray-900 rounded-lg overflow-hidden transition-colors"
                        >
                            <div className="w-full h-[250px] select-none  overflow-hidden">
                                <img
                                    className="object-cover w-full h-full hover:scale-110 transition-transform duration-200"
                                    src={`${CoursesImage[course.background]}`}
                                    alt=""
                                />
                            </div>

                            <div className="space-y-3 p-5 text-black dark:text-white transition-colors">
                                <h2 className="text-lg font-semibold">
                                    {course.name}
                                </h2>

                                <p className="text-gray-700  font-medium dark:text-gray-300 transition-colors">
                                    {`${
                                        course.description.length > 60
                                            ? `${course.description.slice(
                                                  0,
                                                  60
                                              )}...`
                                            : course.description
                                    }`}
                                </p>

                                <div className="flex items-center space-x-5 mt-5">
                                    <strong className="text-lg">{`${course.level}`}</strong>
                                    <span>💻 {course.lessons.length}</span>
                                    <span>⏳ {course.duration}</span>
                                </div>

                                <ButtonBasc
                                    link
                                    path={`${course.name.split(" ").join("_")}`}
                                    className={"w-full text-center"}
                                    title={"سجل ألان"}
                                    icon={<GoArrowUpRight fontSize={30} />}
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}

// ================================
//  Proptype Validation
// ================================
Container.propTypes = {
    title: PropTypes.string,
    courses: PropTypes.array,
};

// Export component with memo for performance optimization
export default memo(Container);
