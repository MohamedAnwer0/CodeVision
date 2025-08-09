// ================================
// Importing required libraries
// ================================
import { motion } from "motion/react";

// ================================
// Importing Hooks
// ================================
import { Link, useParams } from "react-router";
import { useMemo } from "react";

// ================================
// Importing API
// ================================
import Articles from "../../api/Articles.json";

// ================================
// Importing Components
// ================================
import TitleUpdater from "../../components/TitleUpdater";
import Input from "../../components/Input";
import { ButtonBasc } from "../../components/Buttons";

// ================================
// Importing Icons
// ================================
import { LuSend } from "react-icons/lu";

// ================================
// Animation settings
// ================================
import { animateOpacity, transitionSettings } from "../../utils/animations";

// ================================
// View Component
// ================================
function View() {
    const { title } = useParams();

    let article = Articles.filter(
        (article) => article.title === title.split("_").join(" ")
    );
    article = article[0];

    TitleUpdater({ titleParam: article.title });

    // Get similar articles
    const articlesSimilar = useMemo(() => {
        const result = [];

        article.technologies.map((technologie) =>
            Articles.filter((item) => {
                if (item.id != article.id && !result.includes(item)) {
                    item.technologies.includes(technologie) &&
                        result.push(item);
                }
            })
        );

        return result;
    }, [article.technologies, article.id]);

    return (
        <>
            <motion.div
                initial={"hidden"}
                whileInView="show"
                variants={animateOpacity}
                transition={{ ...transitionSettings, staggerChildren: 0.3 }}
                className="mt-10 space-y-10 text-center"
            >
                <motion.h1
                    variants={animateOpacity}
                    transition={transitionSettings}
                    className="dark:text-white text-4xl xl:text-6xl font-bold transition-colors"
                >
                    {article.title}
                </motion.h1>

                <motion.p
                    variants={animateOpacity}
                    transition={transitionSettings}
                    className="text-gray-600 dark:text-gray-300 text-2xl transition-colors"
                >
                    {article.description}
                </motion.p>
            </motion.div>

            <motion.hr
                initial={"hidden"}
                whileInView="show"
                variants={animateOpacity}
                transition={transitionSettings}
                className="border-gray-400 dark:border-gray-700 my-10 transition-colors"
            />

            <div className="grid xl:grid-cols-3 gap-5">
                <motion.div
                    initial={"hidden"}
                    whileInView="show"
                    variants={animateOpacity}
                    transition={{ ...transitionSettings, staggerChildren: 0.3 }}
                    className="space-y-10 mx-auto xl:col-span-2"
                >
                    {article.content.map((item, index) => {
                        return (
                            <motion.div
                                key={index}
                                variants={animateOpacity}
                                transition={transitionSettings}
                                className={`space-y-5 ${
                                    article.content.length - 1 != index &&
                                    "border-b border-gray-700 pb-5"
                                }`}
                            >
                                <h1 className="dark:text-white text-3xl font-bold transition-colors">
                                    {item.heading}
                                </h1>

                                <p className="text-gray-800 dark:text-gray-300 text-xl leading-10 transition-colors">
                                    {item.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
                {articlesSimilar.length > 0 && (
                    <motion.div
                        initial={"hidden"}
                        whileInView="show"
                        variants={animateOpacity}
                        transition={transitionSettings}
                        className="bg-white dark:bg-gray-900 h-fit p-5 rounded-lg space-y-5 sticky top-52 transition-colors"
                    >
                        <h2 className="dark:text-white text-3xl font-bold transition-colors">
                            مقالات متشابهة
                        </h2>

                        {articlesSimilar.map((article) => {
                            return (
                                <Link
                                    key={article.id}
                                    to={`/articles/${article.title
                                        .split(" ")
                                        .join("_")}`}
                                    className="bg-gray-100 dark:bg-gray-800 p-5 rounded space-y-3 block transition-colors"
                                >
                                    <h2 class="dark:text-white text-xl transition-colors">
                                        {article.title}
                                    </h2>

                                    <p className="text-gray-700 dark:text-gray-400 block transition-colors">
                                        {article.description}
                                    </p>
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </div>

            <motion.hr
                initial={"hidden"}
                whileInView="show"
                variants={animateOpacity}
                transition={transitionSettings}
                className="border-gray-400 dark:border-gray-700 my-10 transition-colors"
            />

            <motion.div
                initial={"hidden"}
                whileInView="show"
                variants={animateOpacity}
                transition={{ ...transitionSettings, staggerChildren: 0.3 }}
                className="space-y-5 xl:w-1/2 mx-auto"
            >
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="grid xl:grid-cols-9 items-center gap-5"
                >
                    <div className="xl:col-span-8">
                        <Input placeholder={"أكتب تعليق ..."} />
                    </div>

                    <ButtonBasc
                        type="submit"
                        icon={
                            <LuSend
                                fontSize={25}
                                className="pointer-events-none"
                            />
                        }
                    />
                </form>
                {article.comments.map((comment, index) => {
                    return (
                        <motion.div
                            variants={animateOpacity}
                            transition={transitionSettings}
                            className="bg-white dark:bg-gray-900 p-5 rounded-lg space-y-3  transition-colors"
                            key={index}
                        >
                            <strong className="dark:text-white text-xl block transition-colors">
                                {comment.author}
                            </strong>

                            <p className="block text-gray-800 dark:text-gray-200 transition-colors">
                                {comment.comment}
                            </p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </>
    );
}

export default View;
