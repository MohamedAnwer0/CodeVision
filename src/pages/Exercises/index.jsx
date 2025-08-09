// ================================
// Importing required libraries
// ================================
import { motion } from "motion/react";

// ================================
// Importing API
// ================================
import Exercises from "../../api/Exercises.json";

// ================================
// Animation settings
// ================================
import { animateOpacity, transitionSettings } from "../../utils/animations";

// ================================
// index  Component
// ================================
function index() {
    const exercises = Exercises.exercises;
    const projects = Exercises.projects;

    return (
        <motion.div
            initial={"hidden"}
            whileInView={"show"}
            variants={animateOpacity}
            transition={{ transitionSettings, staggerChildren: 0.1 }}
            className="space-y-10 my-10"
        >
            <div className="space-y-5">
                <motion.div
                    variants={animateOpacity}
                    transition={transitionSettings}
                    className="space-y-5"
                >
                    <h1 className="dark:text-white text-6xl font-bold">
                        التمارين
                    </h1>
                    <p className="dark:text-gray-300">
                        حل هذا التمارين لكي تتاكد من فهم ما تعلمتة
                    </p>
                </motion.div>

                <div className="grid xl:grid-cols-2 gap-10">
                    {exercises.map((exercise, index) => (
                        <motion.div
                            variants={animateOpacity}
                            transition={transitionSettings}
                            key={index}
                            className="bg-white dark:bg-gray-900 flex justify-center gap-5 relative flex-col rounded-lg p-5"
                        >
                            <h2 className="text-black dark:text-white text-lg xl:text-2xl font-bold">
                                {exercise.title}
                            </h2>

                            <span
                                className={` absolute top-5 left-5  text-sm  select-none ${
                                    exercise.level === "متوسط"
                                        ? "text-green-500"
                                        : exercise.level === "صعب"
                                        ? "text-red-500"
                                        : "text-blue-500"
                                }`}
                            >
                                {exercise.level}
                            </span>

                            <p className="text-gray-700 dark:text-gray-300 xl:text-lg font-bold">
                                <strong>وصف التمرين : </strong>
                                {exercise.problem}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="space-y-5">
                <motion.div
                    variants={animateOpacity}
                    transition={transitionSettings}
                    className="space-y-5"
                >
                    <h1 className="dark:text-white text-6xl font-bold">
                        المشاريع
                    </h1>
                    <p className=" dark:text-gray-300">
                        قم بتنفيذ هذا المشاريع لكي تتاكد من فهم ما تعلمتة
                    </p>
                </motion.div>

                <div className="grid xl:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            variants={animateOpacity}
                            transition={transitionSettings}
                            key={index}
                            className="bg-white dark:bg-gray-900 flex justify-center gap-5 relative flex-col rounded-lg p-5"
                        >
                            <h2 className="text-black dark:text-white font-bold text-lg xl:text-2xl">
                                {project.title}
                            </h2>

                            <span
                                className={`absolute top-5 left-5  text-sm  select-none ${
                                    project.level === "متوسط"
                                        ? "text-green-500"
                                        : project.level === "صعب"
                                        ? "text-red-500"
                                        : "text-blue-500"
                                }`}
                            >
                                {project.level}
                            </span>

                            <p className="text-gray-700 dark:text-gray-300 xl:text-lg font-bold">
                                <strong>وصف المشروع : </strong>

                                {project.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default index;
