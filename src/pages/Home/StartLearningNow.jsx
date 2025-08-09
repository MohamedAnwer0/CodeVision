// ================================
// Importing required libraries
// ================================
import { memo } from "react";
import { motion } from "motion/react";

// ================================
// Importing components
// ================================
import { ButtonBorder } from "../../components/Buttons";

// ================================
// Importing API
// ================================
import { GoArrowUpRight } from "react-icons/go";

// ================================
// Animation settings
// ================================
import { animateOpacity, transitionSettings } from "../../utils/animations";
function StartLearningNow() {
    return (
        <motion.div
            initial={"hidden"}
            whileInView={"show"}
            variants={animateOpacity}
            transition={transitionSettings}
            viewport={{
                margin: "-100px",
            }}
            className="text-center space-y-5 bg-radial from-blue-500/30 shadow shadow-blue-500 rounded-xl p-5"
        >
            <h1 className="text-4xl mb-10 font-bold rounded-lg dark:text-white transition-colors">
                ابدأ تعلم تطوير الويب مع كودفيجن الآن!
            </h1>

            <div className="text-xl dark:text-gray-300 font-medium leading-10 transition-colors">
                <p>
                    هل أنت مستعد للانطلاق في عالم تطوير الويب؟ مع كودفيجن، لديك
                    الفرصة لتعلم المهارات التي ستمكنك من بناء مواقع وتطبيقات
                    تفاعلية بطريقة ممتعة وسهلة. في كودفيجن، نؤمن أن الجميع يمكنه
                    أن يصبح مطور ويب محترف، بغض النظر عن خلفيته أو خبرته
                    السابقة.
                </p>

                <p>
                    لا تفوّت فرصة التغيير، وابدأ رحلة تعلمك مع كودفيجن اليوم!
                    اضغط على زر "ابدأ الآن" لتبدأ في تعلم تطوير الويب خطوة بخطوة
                    وتحقيق طموحاتك المهنية.
                </p>
            </div>

            <ButtonBorder
                link
                path={"/tracks"}
                title={"بدأ الآن"}
                icon={<GoArrowUpRight fontSize={25} />}
                className={"mx-auto"}
            />
        </motion.div>
    );
}

export default memo(StartLearningNow);
