// ================================
// Importing required libraries
// ================================
import { memo } from "react";
import { motion } from "motion/react";

// ================================
// Importing components
// ================================
import { ButtonBasc } from "../../components/Buttons";

// ================================
// Importing API
// ================================
import Articles from "../../Api/Articles.json";

// ================================
// Importing icons
// ================================
import { GoArrowUpRight } from "react-icons/go";

// ================================
// Animation settings
// ================================
import { animateOpacity, transitionSettings } from "../../utils/animations";

// ================================
// LatestArticles Component
// ================================
function LatestArticles() {
    const listArticles = [Articles[3], Articles[6], Articles[10], Articles[16]];
    return (
        <div className="space-y-5">
            <motion.h1
                initial={"hidden"}
                whileInView={"show"}
                variants={animateOpacity}
                transition={{ duration: 1 }}
                viewport={{
                    margin: "-100px",
                }}
                className="text-3xl font-bold text-black transition-colors select-none leading-14 dark:text-white"
            >
                ✍️ أحدث المقالات
            </motion.h1>

            <motion.div
                initial={"hidden"}
                whileInView="show"
                variants={animateOpacity}
                transition={{ ...transitionSettings, staggerChildren: 0.3 }}
                viewport={{
                    margin: "-100px",
                }}
                className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            >
                {listArticles.map((article) => {
                    return (
                        <motion.div
                            variants={animateOpacity}
                            ransition={transitionSettings}
                            key={article.id}
                            className="space-y-5 overflow-hidden transition-colors bg-gray-200 rounded-lg dark:bg-gray-900"
                        >
                            <div className="w-full h-[200px] bg-gradient-to-r from-blue-500/50 to-purple-500/50 dark:from-blue-500/30 dark:to-purple-500/30 flex justify-center items-center px-5 text-center transition-colors">
                                <h3 className="text-2xl dark:text-white font-semibold leading-10 transition-colors">
                                    {article.title}
                                </h3>
                            </div>
                            
                            <div className="p-5 pt-0 space-y-5 text-lg text-black transition-colors dark:text-white">
                                <p className=" leading-7 text-gray-700 transition-colors dark:text-gray-300">
                                    {`${
                                        article.description.length > 100
                                            ? `${article.description
                                                  .split("")
                                                  .slice(0, 100)
                                                  .join("")}...`
                                            : article.description
                                    }`}
                                </p>

                                <ButtonBasc
                                    link
                                    path={`/articles/${article.title
                                        .split(" ")
                                        .join("_")}`}
                                    title={"أذهب للقراء"}
                                    icon={<GoArrowUpRight />}
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}

// Export component with memo for performance optimization
export default memo(LatestArticles);