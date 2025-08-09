// ================================
// Importing required libraries
// ================================
import { motion } from "motion/react";

// ================================
// Importing Componentss
// ================================
import Input from "../../components/Input";
import { ButtonBasc } from "../../components/Buttons";

// ================================
// Importing Api
// ================================
import community from "../../api/community.json";

// ================================
// Importing API
// ================================
import { BiLike, BiComment } from "react-icons/bi";
import { LuSend } from "react-icons/lu";

// ================================
// Animation settings
// ================================
import { animateOpacity, transitionSettings } from "../../utils/animations";

// ================================
// Index  Component
// ================================
function Index() {
    return (
        <div className="space-y-10 xl:w-1/2 mx-auto my-10">
            {community.map((post) => {
                const date = new Date(post.timestamp);
                return (
                    <motion.div
                        initial={"hidden"}
                        whileInView={"show"}
                        variants={animateOpacity}
                        transition={transitionSettings}
                        key={post.id}
                        className="bg-white dark:bg-gray-900 p-5 rounded-lg space-y-5 transition-colors"
                    >
                        <div>
                            <h2 className="dark:text-white text-lg font-bold">
                                {post.author}
                            </h2>
                            <span className="text-gray-600 dark:text-gray-300 block">
                                {date.toLocaleDateString("ar-en", {
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true,
                                })}
                            </span>
                        </div>

                        <div>
                            <p className="text-gray-700 dark:text-gray-100 text-xl block transition-colors">
                                {post.content}
                            </p>
                        </div>

                        <hr className="border-gray-300 dark:border-gray-600" />

                        <div className="flex items-center space-x-5">
                            <div className="text-blue-600 flex items-center gap-2 text-xl">
                                <BiLike />
                                <span>{post.likes}</span>
                            </div>

                            <div className="text-green-600 flex items-center gap-2 text-xl">
                                <BiComment />
                                <span>{post.comments.length}</span>
                            </div>
                        </div>

                        <div className="space-y-10">
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

                            {post.comments.map((comment, index) => {
                                const date = new Date(comment.timestamp);
                                return (
                                    <div
                                        className="bg-white dark:bg-gray-800 p-5 rounded-lg space-y-3 transition-colors"
                                        key={index}
                                    >
                                        <div className="space-y-2">
                                            <strong className="dark:text-white  block transition-colors">
                                                {comment.author}
                                            </strong>

                                            <span className="text-gray-600 dark:text-gray-300 block transition-colors">
                                                {date.toLocaleDateString(
                                                    "ar-en",
                                                    {
                                                        hour: "numeric",
                                                        minute: "numeric",
                                                        hour12: true,
                                                    }
                                                )}
                                            </span>
                                        </div>

                                        <p className="block text-gray-800 dark:text-gray-200 transition-colors">
                                            {comment.content}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}

export default Index;
