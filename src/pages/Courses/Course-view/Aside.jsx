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
// Aside  Component
// ================================
function Aside({ background, lessons }) {
    return (
        <motion.aside
            initial={"hidden"}
            whileInView="show"
            variants={animateOpacity}
            transition={transitionSettings}
            className="xl:relative xl:-order-0 -order-1 xl:left-10 xl:-top-[190px] xl:border-[25px] rounded-xl border-gray-100 bg-gray-100 dark:bg-gray-950 dark:border-gray-950 transition-colors"
        >
            <span className="hidden xl:block bg-transparent w-[30px] h-[30px] absolute top-[111px] -right-[51px] border-b-4 border-l-4 border-gray-100 dark:border-gray-950 rounded-bl-2xl transition-colors"></span>
            <span className="hidden xl:block bg-transparent w-[30px] h-[30px] absolute top-[111px] -left-[51px]  border-b-4 border-r-4 border-red-100 dark:border-gray-950 rounded-br-2xl transition-colors"></span>
            <div className="w-full rounded-t-xl overflow-hidden">
                <img className="w-full object-cover" src={background} alt="" />
            </div>
            <div className="space-y-5 bg-gray-200 dark:bg-gray-900 p-5 rounded-b-xl">
                <strong className="text-black dark:text-white text-3xl block ">
                    ما سوف تتعلمه في هذه الدورة
                </strong>
                <ul className="text-black dark:text-white space-y-3 list-decimal px-5">
                    {lessons.map((lesson, index) => {
                        return <li key={index}>{lesson}</li>;
                    })}
                </ul>
                <ButtonBasc
                    bg={"bg-blue-500 hover:bg-blue-600 w-full"}
                    title={"اشترك الآن"}
                />
            </div>
        </motion.aside>
    );
}

// ================================
//  Proptypes Validation
// ================================
Aside.propTypes = {
    background: PropTypes.string,
    lessons: PropTypes.array,
};

export default memo(Aside);
