// ================================
// Importing required libraries
// ================================
import { motion } from "motion/react";
import { memo } from "react";

// ================================
// Importing components
// ================================
import MeshBackground from "../../components/MeshBackground";
import ColorBackground from "../../components/ColorBackground";

// ================================
// Importing images
// ================================
import { AvatarThinking } from "../../import/Images";

// ================================
// Animation settings
// ================================
import { animateOpacity, transitionSettings } from "../../utils/animations";

// ================================
// WhyPlatform Component
// ================================
function WhyPlatform() {
    return (
        <div className="grid gap-5 xl:grid-cols-2 px-5 xl:px-0">
            <motion.div
                initial={"hidden"}
                whileInView={"show"}
                variants={animateOpacity}
                transition={transitionSettings}
                className="sticky hidden h-fit top-52 xl:block"
            >
                <MeshBackground
                    numberMeshes={25}
                    countColumns={5}
                    size={600}
                    className={"right-0 top-1/2 -translate-y-1/2"}
                />
                <ColorBackground position={"right-0 bottom-0"} size={400} />
                <img
                    className="w-[500px] h-[600px] mx-auto relative"
                    src={AvatarThinking}
                    alt=""
                />
            </motion.div>

            <div className="space-y-14">
                <motion.h1
                    initial={"hidden"}
                    whileInView={"show"}
                    variants={animateOpacity}
                    transition={transitionSettings}
                    className="text-6xl font-bold text-black transition-colors select-none dark:text-white"
                >
                    لماذا كودفيجن ؟
                </motion.h1>

                <div className="space-y-10">
                    <div className="space-y-5">
                        <motion.h2
                            initial={"hidden"}
                            whileInView={"show"}
                            variants={animateOpacity}
                            transition={transitionSettings}
                            className="text-4xl font-extrabold text-black transition-colors dark:text-white "
                        >
                            تعلم عملي وتطبيقي 🛠️
                        </motion.h2>

                        <ul className="space-y-3 list-disc ">
                            <motion.li
                                initial={"hidden"}
                                whileInView={"show"}
                                variants={animateOpacity}
                                transition={transitionSettings}
                                className="space-x-1 text-xl text-gray-800 transition-colors dark:text-gray-200"
                            >
                                <strong>
                                    دروس قائمة على المشاريع العملية لبناء مهارات
                                    حقيقية:
                                </strong>
                                <span className="text-gray-800 dark:text-gray-300 transition-colors">
                                    تقدم كودفيجن دورات تعليمية تركز على المشاريع
                                    العملية لتطوير مهارات حقيقية تواكب احتياجات
                                    سوق العمل.
                                </span>
                            </motion.li>

                            <motion.li
                                initial={"hidden"}
                                whileInView={"show"}
                                variants={animateOpacity}
                                transition={transitionSettings}
                                className="space-x-1 text-xl text-gray-800 transition-colors dark:text-gray-200"
                            >
                                <strong>
                                    تطبيق مباشر للكود داخل المنصة دون الحاجة
                                    لبيئة خارجية:
                                </strong>
                                <span className="text-gray-800 dark:text-gray-300 transition-colors">
                                    تتيح المنصة للمتعلمين كتابة الكود وتشغيله
                                    مباشرة داخل البيئة المدمجة، مما يزيل الحاجة
                                    إلى إعداد بيئات خارجية معقدة.
                                </span>
                            </motion.li>
                        </ul>
                    </div>

                    <div className="space-y-5">
                        <motion.h2
                            initial={"hidden"}
                            whileInView={"show"}
                            variants={animateOpacity}
                            transition={transitionSettings}
                            className="text-4xl font-extrabold text-black transition-colors dark:text-white"
                        >
                            تقنيات حديثة ومطلوبة في السوق 🚀
                        </motion.h2>

                        <ul className="space-y-3 list-disc ">
                            <motion.li
                                initial={"hidden"}
                                whileInView={"show"}
                                variants={animateOpacity}
                                transition={transitionSettings}
                                className="space-x-1 text-xl text-gray-800 transition-colors dark:text-gray-200"
                            >
                                <strong>
                                    تعلم التقنيات الحديثة في تطوير الويب:
                                </strong>

                                <span className="text-gray-800 dark:text-gray-300 transition-colors">
                                    من خلال كودفيجن، يمكنك تعلم التقنيات الحديثة
                                    التي أصبحت أساسية في صناعة تطوير الويب.
                                </span>
                            </motion.li>

                            <motion.li
                                initial={"hidden"}
                                whileInView={"show"}
                                variants={animateOpacity}
                                transition={transitionSettings}
                                className="space-x-1 text-xl text-gray-800 transition-colors dark:text-gray-200"
                            >
                                <strong>
                                    تحديثات دورية لمواكبة أحدث التوجهات في
                                    السوق:
                                </strong>

                                <span className="text-gray-800 dark:text-gray-300 transition-colors">
                                    يتم تحديث محتوى الدورات بشكل دوري لضمان أن
                                    المتعلمين على اطلاع دائم بأحدث الاتجاهات
                                    والأدوات في صناعة تطوير الويب.
                                </span>
                            </motion.li>
                        </ul>
                    </div>

                    <div className="space-y-5">
                        <motion.h2
                            initial={"hidden"}
                            whileInView={"show"}
                            variants={animateOpacity}
                            transition={transitionSettings}
                            className="text-4xl font-extrabold text-black transition-colors dark:text-white"
                        >
                            مسارات تعليمية منظمة 📚
                        </motion.h2>

                        <ul className="space-y-3 list-disc ">
                            <motion.li
                                initial={"hidden"}
                                whileInView={"show"}
                                variants={animateOpacity}
                                transition={transitionSettings}
                                className="space-x-1 text-xl text-gray-800 transition-colors dark:text-gray-200"
                            >
                                <strong>
                                    مسارات متدرجة من المبتدئ إلى المحترف:
                                </strong>

                                <span className="text-gray-800 dark:text-gray-300 transition-colors">
                                    تقدم المنصة مسارات تعليمية مصممة بعناية،
                                    تبدأ من الأساسيات للمبتدئين وصولاً إلى
                                    المستوى المتقدم للمحترفين.
                                </span>
                            </motion.li>

                            <motion.li
                                initial={"hidden"}
                                whileInView={"show"}
                                variants={animateOpacity}
                                transition={transitionSettings}
                                className="space-x-1 text-xl text-gray-800 transition-colors dark:text-gray-200"
                            >
                                <strong>
                                    تخصيص مسار التعلم بناءً على اهتمامات
                                    المتعلم:
                                </strong>

                                <span className="text-gray-800 dark:text-gray-300 transition-colors">
                                    يمكن للمتعلمين تخصيص مسار التعلم الخاص بهم
                                    وفقًا لما يتناسب مع اهتماماتهم وأهدافهم
                                    المهنية، سواء في الواجهة الأمامية أو
                                    الخلفية.
                                </span>
                            </motion.li>
                        </ul>
                    </div>

                    <div className="space-y-5">
                        <motion.h2
                            initial={"hidden"}
                            whileInView={"show"}
                            variants={animateOpacity}
                            transition={transitionSettings}
                            className="text-4xl font-extrabold text-black transition-colors dark:text-white"
                        >
                            تحديات ومشاريع برمجية تفاعلية 🎯
                        </motion.h2>

                        <ul className="space-y-3 list-disc ">
                            <motion.li
                                initial={"hidden"}
                                whileInView={"show"}
                                variants={animateOpacity}
                                transition={transitionSettings}
                                className="space-x-1 text-xl text-gray-800 transition-colors dark:text-gray-200"
                            >
                                <strong>
                                    تمارين عملية لحل المشاكل البرمجية وتعزيز
                                    مهارات التفكير المنطقي:
                                </strong>

                                <span className="text-gray-800 dark:text-gray-300 transition-colors">
                                    توفر المنصة مجموعة من التحديات البرمجية التي
                                    تساهم في تحسين مهارات حل المشكلات والتفكير
                                    المنطقي.
                                </span>
                            </motion.li>

                            <motion.li
                                initial={"hidden"}
                                whileInView={"show"}
                                variants={animateOpacity}
                                transition={transitionSettings}
                                className="space-x-1 text-xl text-gray-800 transition-colors dark:text-gray-200"
                            >
                                <strong>
                                    مشاريع حقيقية لمساعدة المتعلمين في إنشاء
                                    Portfolio احترافي:
                                </strong>

                                <span className="text-gray-800 dark:text-gray-300 transition-colors">
                                    من خلال المشاريع الواقعية، يمكن للمتعلمين
                                    بناء Portfolio احترافي يعرض مهاراتهم
                                    ويساعدهم في الحصول على فرص عمل.
                                </span>
                            </motion.li>

                        </ul>
                    </div>
                    <div className="space-y-5">
                        <motion.h2
                            initial={"hidden"}
                            whileInView={"show"}
                            variants={animateOpacity}
                            transition={transitionSettings}
                            className="text-4xl font-extrabold text-black transition-colors dark:text-white"
                        >
                            نظام تتبع التقدم والشهادات 🎖️
                        </motion.h2>

                        <ul className="space-y-3 list-disc ">
                            <motion.li
                                initial={"hidden"}
                                whileInView={"show"}
                                variants={animateOpacity}
                                transition={transitionSettings}
                                className="space-x-1 text-xl text-gray-800 transition-colors dark:text-gray-200"
                            >
                                <strong>
                                    تتبع الإنجازات والمهارات المكتسبة:
                                </strong>

                                <span className="text-gray-800 dark:text-gray-300 transition-colors">
                                    يوفر نظام التتبع على المنصة آلية لمتابعة
                                    تقدم المتعلم وتوثيق الإنجازات التي تم
                                    تحقيقها.
                                </span>
                            </motion.li>

                            <motion.li
                                initial={"hidden"}
                                whileInView={"show"}
                                variants={animateOpacity}
                                transition={transitionSettings}
                                className="space-x-1 text-xl text-gray-800 transition-colors dark:text-gray-200"
                            >
                                <strong>
                                    الحصول على شهادات رقمية يمكن إضافتها إلى
                                    LinkedIn:
                                </strong>

                                <span className="text-gray-800 dark:text-gray-300 transition-colors">
                                    بعد إتمام الدورات، يحصل المتعلمون على شهادات
                                    رقمية معترف بها يمكن إضافتها إلى LinkedIn
                                    لتعزيز سيرهم الذاتية.
                                </span>
                            </motion.li>
                        </ul>
                    </div>

                    <div className="space-y-5">
                        <motion.h2
                            initial={"hidden"}
                            whileInView={"show"}
                            variants={animateOpacity}
                            transition={transitionSettings}
                            className="text-4xl font-extrabold text-black transition-colors dark:text-white"
                        >
                            مجتمع تفاعلي وداعم 👥
                        </motion.h2>

                        <ul className="space-y-3 list-disc ">
                            <motion.li
                                initial={"hidden"}
                                whileInView={"show"}
                                variants={animateOpacity}
                                transition={transitionSettings}
                                className="space-x-1 text-xl text-gray-800 transition-colors dark:text-gray-200"
                            >
                                <strong>
                                    منتدى للنقاشات والأسئلة البرمجية:
                                </strong>

                                <span className="text-gray-800 dark:text-gray-300 transition-colors">
                                    يتيح لك المجتمع التفاعل مع المتعلمين الآخرين
                                    والمطورين عبر المنتدى المخصص للنقاشات وحل
                                    الأسئلة البرمجية
                                </span>
                            </motion.li>

                            <motion.li
                                initial={"hidden"}
                                whileInView={"show"}
                                variants={animateOpacity}
                                transition={transitionSettings}
                                className="space-x-1 text-xl text-gray-800 transition-colors dark:text-gray-200"
                            >
                                <strong>
                                    مجموعات دراسة وتعاون بين المتعلمين:
                                </strong>

                                <span className="text-gray-800 dark:text-gray-300 transition-colors">
                                    يمكن للمتعلمين التفاعل مع زملائهم في مجموعات
                                    دراسية والتعاون في حل المشكلات البرمجية، مما
                                    يعزز من عملية التعلم الجماعي.
                                </span>
                            </motion.li>
                        </ul>
                    </div>

                    <div className="space-y-5">
                        <motion.h2
                            initial={"hidden"}
                            whileInView={"show"}
                            variants={animateOpacity}
                            transition={transitionSettings}
                            className="text-4xl font-extrabold text-black transition-colors dark:text-white"
                        >
                            دورات مجانية ومدفوعة 💰
                        </motion.h2>

                        <ul className="space-y-3 list-disc ">
                            <motion.li
                                initial={"hidden"}
                                whileInView={"show"}
                                variants={animateOpacity}
                                transition={transitionSettings}
                                className="space-x-1 text-xl text-gray-800 transition-colors dark:text-gray-200"
                            >
                                <strong>
                                    محتوى مجاني للمبتدئين لدخول عالم البرمجة
                                    بسهولة:
                                </strong>

                                <span className="text-gray-800 dark:text-gray-300 transition-colors">
                                    تقدم المنصة محتوى مجاني للمبتدئين الذين
                                    يرغبون في دخول عالم البرمجة بكل سهولة، من
                                    خلال دورات تأسيسية تعلم أساسيات البرمجة
                                    وتطوير الويب.
                                </span>
                            </motion.li>

                            <motion.li
                                initial={"hidden"}
                                whileInView={"show"}
                                variants={animateOpacity}
                                transition={transitionSettings}
                                className="space-x-1 text-xl text-gray-800 transition-colors dark:text-gray-200"
                            >
                                <strong>
                                    دورات احترافية متقدمة بمحتوى عالي الجودة:
                                </strong>

                                <span className="text-gray-800 dark:text-gray-300 transition-colors">
                                    بعد التقدم في الدورات المجانية، يمكن
                                    للمتعلمين الانتقال إلى الدورات المدفوعة التي
                                    تقدم محتوى احترافي متقدم يساعدهم على تحسين
                                    مهاراتهم والوصول إلى مستوى عالٍ من
                                    الاحترافية.
                                </span>
                            </motion.li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Export component with memo for performance optimization
export default memo(WhyPlatform);
