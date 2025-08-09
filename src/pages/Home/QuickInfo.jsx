// ================================
// Importing required libraries
// ================================
import { motion } from "motion/react";
import { memo } from "react";

// ================================
// Importing components
// ================================
import { ButtonBasc } from "../../components/Buttons";

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
function QuickInfo() {
    return (
        <div className="space-y-5">
            <motion.h1
                initial={"hidden"}
                whileInView={"show"}
                variants={animateOpacity}
                transition={transitionSettings}
                className="text-3xl font-bold text-black transition-colors select-none leading-14 dark:text-white"
            >
                تعريف سريع : 🌐 الواجهة الأمامية vs ⚙️ الواجهة الخلفية
            </motion.h1>

            <motion.div
                initial={"hidden"}
                whileInView={"show"}
                variants={animateOpacity}
                transition={{
                    staggerChildren: 0.3,
                    ...transitionSettings,
                }}
                viewport={{
                    margin: "-100px",
                }}
                className="grid gap-5 xl:grid-cols-2"
            >
                <motion.div
                    variants={animateOpacity}
                    transition={transitionSettings}
                    className="p-5 space-y-3 rounded-lg shadow bg-radial from-blue-500/60 dark:from-blue-500/30 shadow-blue-500"
                >
                    <h2 className="text-2xl font-semibold text-black dark:text-white">
                        🌐 الواجهة الأمامية (Front-end)
                    </h2>

                    <ul className="space-y-5 text-black dark:text-white">
                        <li>
                            <strong className="text-xl">تعريف : </strong>
                            <span className="text-lg">
                                الجزء الذي يراه المستخدم ويتفاعل معه مباشرة عند
                                زيارة الموقع أو التطبيق. يشمل التصميم و التفاعل.
                            </span>
                        </li>

                        <li>
                            <strong className="text-xl">لتقنيات: </strong>
                        </li>

                        <li>
                            <strong className="text-xl">HTML 📝: </strong>
                            <span className="text-lg">لإنشاء هيكل الصفحة.</span>
                        </li>

                        <li>
                            <strong className="text-xl">CSS 🎨 : </strong>
                            <span className="text-lg">
                                لتنسيق وتصميم الصفحة.
                            </span>
                        </li>

                        <li>
                            <strong className="text-xl">
                                JavaScript ⚡ :{" "}
                            </strong>
                            <span className="text-lg">
                                لإضافة التفاعل الديناميكي مثل الأزرار المتحركة
                                أو النوافذ المنبثقة.
                            </span>
                        </li>

                        <li>
                            <strong className="text-xl">أطر العمل : </strong>
                            <span className="text-lg" dir="ltr">
                                React ⚛️, Angular 🔄, Vue.js 👁️.
                            </span>
                        </li>

                        <li>
                            <strong className="text-xl">الهدف : </strong>
                            <span className="text-lg">
                                تحسين تجربة المستخدم وجعل التفاعل مع الموقع أو
                                التطبيق سهلًا وجذابًا.
                            </span>
                        </li>
                    </ul>

                    <ButtonBasc
                        link
                        path={"/tracks"}
                        title={"ابدأ الآن"}
                        icon={<GoArrowUpRight fontSize={30} />}
                        bg={"bg-blue-500 hover:bg-blue-600"}
                    />
                </motion.div>

                <motion.div
                    variants={animateOpacity}
                    className="p-5 space-y-3 rounded-lg shadow bg-radial from-purple-500/60 dark:from-purple-500/30 shadow-purple-500"
                >
                    <h2 className="text-2xl font-semibold text-black dark:text-white">
                        ⚙️ الواجهة الخلفية (Back-end)
                    </h2>

                    <ul className="space-y-5 text-black dark:text-white">
                        <li>
                            <strong className="text-xl">تعريف : </strong>
                            <span className="text-lg">
                                هو الجزء الذي لا يراه المستخدم مباشرة ويعمل على
                                إدارة البيانات والعمليات التي تجري في الخلفية.
                            </span>
                        </li>

                        <li>
                            <strong className="text-xl">لتقنيات: </strong>
                        </li>

                        <li>
                            <strong className="text-xl">لغات البرمجة : </strong>
                            <span className="text-lg" dir="ltr">
                                Python 🐍, PHP 🖥️, Node.js 🚀, Java ☕.
                            </span>
                        </li>

                        <li>
                            <strong className="text-xl">
                                قواعد البيانات :
                            </strong>
                            <span className="text-lg" dir="ltr">
                                MySQL 🗄️, MongoDB 🌳, PostgreSQL 🔍.
                            </span>
                        </li>

                        <li>
                            <strong className="text-xl">أطر العمل : </strong>
                            <span className="text-lg" dir="ltr">
                                Django 🏗️ (Python), Express.js 📦 (Node.js),
                                Spring 🌱 (Java), Laravel ⚡ (PHP).
                            </span>
                        </li>

                        <li>
                            <strong className="text-xl">الهدف : </strong>
                            <span className="text-lg">
                                تقديم البيانات التي يحتاجها المستخدم وتنسيق
                                العمليات مثل التسجيل، تسجيل الدخول، أو معالجة
                                البيانات.
                            </span>
                        </li>
                    </ul>

                    <ButtonBasc
                        link
                        path={"/tracks"}
                        title={"ابدأ الآن"}
                        icon={<GoArrowUpRight fontSize={30} />}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
// Export component with memo for performance optimization
export default memo(QuickInfo);
