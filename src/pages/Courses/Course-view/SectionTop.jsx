// ================================
// Importing required libraries
// ================================
import PropTypes from "prop-types";
import { motion } from "motion/react";
import { memo } from "react";

// ================================
// Importing Components
// ================================
import { ButtonBasc } from "../../../components/Buttons";

// ================================
// Animation settings
// ================================
import { animateOpacity, transitionSettings } from "../../../utils/animations";

// ================================
// SectionTop  Component
// ================================
function SectionTop({ detailsCourse }) {
    return (
        <motion.section
            initial={"hidden"}
            whileInView="show"
            variants={animateOpacity}
            transition={{ ...transitionSettings, staggerChildren: 0.1 }}
            className="relative w-full h-[500px] mt-5 mb-7 space-y-10 bg-linear-to-l from-purple-500/50 transition-colors dark:from-purple-500/20 to-blue-500/50 dark:to-blue-500/20 rounded-xl flex flex-col justify-center xl:items-start items-center px-10"
        >
            <div>
                <motion.strong
                    variants={animateOpacity}
                    transition={transitionSettings}
                    className="block text-white md:text-2xl text-xl xl:text-3xl"
                >
                    مسار {detailsCourse.category}
                </motion.strong>
            </div>

            <div className="xl:space-y-5 space-y-2">
                <motion.h1
                    variants={animateOpacity}
                    transition={transitionSettings}
                    className="text-white xl:text-start text-center xl:text-5xl text-3xl  font-bold"
                >
                    {detailsCourse.name}
                </motion.h1>

                <motion.p
                    variants={animateOpacity}
                    transition={transitionSettings}
                    className="dark:text-gray-300 text-gray-100 xl:text-2xl text-xl xl:text-start text-center"
                >
                    {detailsCourse.shortDescription}
                </motion.p>
            </div>

            <div className="flex items-center space-x-5 text-white xl:text-xl">
                <motion.span
                    variants={animateOpacity}
                    transition={transitionSettings}
                >
                    {detailsCourse.level}
                </motion.span>

                <motion.span
                    variants={animateOpacity}
                    transition={transitionSettings}
                >
                    ⏳{detailsCourse.duration}
                </motion.span>

                <motion.span
                    variants={animateOpacity}
                    transition={transitionSettings}
                >
                    💻{detailsCourse.lessons.length}
                </motion.span>

                <motion.span
                    variants={animateOpacity}
                    transition={transitionSettings}
                >
                    ⭐{detailsCourse.reviews.length}
                </motion.span>
            </div>

            <motion.div
                variants={animateOpacity}
                transition={transitionSettings}
            >
                <ButtonBasc
                    bg={"bg-blue-500 hover:bg-blue-600"}
                    title={"اشترك الآن"}
                />
            </motion.div>
        </motion.section>
    );
}

// ================================
//  Proptypes Validation
// ================================
SectionTop.propTypes = {
    detailsCourse: PropTypes.object,
};

export default memo(SectionTop);
