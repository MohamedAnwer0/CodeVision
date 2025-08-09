// ================================
// Importing required libraries
// ================================
import { motion } from "motion/react";
import { memo } from "react";

// ================================
// Importing components
// ================================
import Logo from "../../components/Logo";
import { ButtonBasc } from "../../components/Buttons";
import ColorBackground from "../../components/ColorBackground";

// ================================
// Importing images
// ================================
import { Intro } from "../../import/Images";

// ================================
// Importing icons
// ================================
import { GoArrowUpRight } from "react-icons/go";

// ================================
// Animation settings
// ================================
import { animateOpacity, transitionSettings } from "../../utils/animations";

// ================================
// HeroSection Component
// ================================
function HeroSection() {
    return (
        <header className="min-h-[850px] grid lg:grid-cols-2 items-center pt-20 lg:pt-0 gap-5 relative">
            <ColorBackground position="left-0 bottom-0" />

            <motion.div
                variants={animateOpacity}
                initial="hidden"
                animate="show"
                transition={{
                    staggerChildren: 0.3,
                    ...transitionSettings,
                }}
                className="space-y-5 order-last lg:order-first text-center lg:text-start"
            >
                <motion.div
                    variants={animateOpacity}
                    transition={transitionSettings}
                    className="mb-10"
                >
                    <Logo className="text-7xl font-extrabold" />
                </motion.div>

                <motion.p
                    variants={animateOpacity}
                    transition={transitionSettings}
                    className="text-2xl text-gray-800 leading-10 dark:text-gray-100 transition-colors"
                >
                    كودفيجن هي منصة تعليمية متخصصة تهدف إلى تمكين الأفراد من
                    احتراف تطوير الويب، سواء في الواجهة الأمامية أو الخلفية، من
                    خلال منهج تعليمي متكامل يجمع بين التعلم التفاعلي والتطبيق
                    العملي.
                </motion.p>

                <motion.p
                    variants={animateOpacity}
                    transition={transitionSettings}
                    className="text-xl text-gray-800 dark:text-gray-300 leading-9 transition-colors"
                >
                    كودفيجن ليست مجرد منصة تعليمية، بل هي رؤية مستقبلية لكل من
                    يسعى إلى احتراف تطوير الويب، وتحقيق التميز التقني، والانطلاق
                    نحو فرص وظيفية واعدة. 🚀
                </motion.p>


                <motion.div
                    variants={animateOpacity}
                    transition={transitionSettings}
                    className="mt-10 w-fit mx-auto lg:w-full"
                >
                    <ButtonBasc
                        link
                        path="/tracks"
                        title="ابدأ التعلم الآن"
                        icon={<GoArrowUpRight fontSize={30} />}
                    />
                </motion.div>
            </motion.div>

            <motion.div
                variants={animateOpacity}
                initial="hidden"
                animate="show"
                className="order-first lg:order-last relative"
            >

                <motion.div
                    initial={{ y: "-30px" }}
                    animate={{ y: "0px" }}
                    transition={{
                        duration: 2.5,
                        repeatType: "reverse",
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="relative"
                >
                    <div className="absolute w-full h-full"></div>
                    <img
                        className="lg:w-[450px] w-[400px] mx-auto object-center select-none"
                        src={Intro}
                        alt="Intro Illustration"
                    />
                </motion.div>

                <motion.div
                    initial={{ y: "-15px", x: "10px" }}
                    animate={{ y: "0px", x: "0px" }}
                    transition={{
                        duration: 1.5,
                        repeatType: "reverse",
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-20 bg-purple-500/70 dark:bg-purple-500/20 backdrop-blur-xs w-fit text-white px-10 py-5 rounded-lg lg:block hidden transition-colors"
                >
                    <strong className="text-xl select-none">
                        الدروس التعليمية 80
                    </strong>
                </motion.div>


                <motion.div
                    initial={{ y: "-15px", x: "-10px" }}
                    animate={{ y: "0px", x: "0px" }}
                    transition={{
                        duration: 1.5,
                        repeatType: "reverse",
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-32 bg-blue-500/70 dark:bg-blue-500/20 backdrop-blur-xs w-fit text-white px-10 py-5 rounded-lg lg:block hidden transition-colors"
                >
                    <strong className="text-xl select-none">الكورسات 16</strong>
                </motion.div>

                <motion.div
                    initial={{ y: "-15px", x: "-10px" }}
                    animate={{ y: "0px", x: "0px" }}
                    transition={{
                        duration: 2.5,
                        repeatType: "reverse",
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-20 right-40 bg-blue-500/70 dark:bg-blue-500/20 backdrop-blur-xs w-fit text-white px-10 py-5 rounded-lg lg:block hidden transition-colors"
                >
                    <strong className="text-xl select-none">
                        الساعات التعليمية 202
                    </strong>
                </motion.div>

                <motion.div
                    initial={{ y: "-15px", x: "-10px" }}
                    animate={{ y: "0px", x: "0px" }}
                    transition={{
                        duration: 2,
                        repeatType: "reverse",
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-20 bottom-10 bg-blue-500/70 dark:bg-blue-500/20 backdrop-blur-xs w-fit text-white px-10 py-5 rounded-lg lg:block hidden transition-colors"
                >
                    <strong className="text-xl select-none">
                        المتعلمين 2000
                    </strong>
                </motion.div>

                <motion.div
                    initial={{ y: "-15px", x: "10px" }}
                    animate={{ y: "0px", x: "0px" }}
                    transition={{
                        duration: 1.8,
                        repeatType: "reverse",
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-20 top-0 bg-purple-500/70 dark:bg-purple-500/20 backdrop-blur-xs w-fit text-white px-10 py-5 rounded-lg lg:block hidden transition-colors"
                >
                    <strong className="text-xl select-none">المقالات 20</strong>
                </motion.div>
            </motion.div>
        </header>
    );
}

// Export component with memo for performance optimization
export default memo(HeroSection);