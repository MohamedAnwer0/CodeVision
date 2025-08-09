// ================================
// Importing required libraries
// ================================
import { memo } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating } from "@smastrom/react-rating";

// ================================
// Importing API
// ================================
import ListReviews from "../../Api/Reviews.json";

// ================================
// Importing required modules
// ================================
import { Autoplay } from "swiper/modules";

// ================================
// Importing required styles
// ================================
import "swiper/css";
import "swiper/css/pagination";
import "@smastrom/react-rating/style.css";

// ================================
// Animation settings
// ================================
import { animateOpacity, transitionSettings } from "../../utils/animations";

// ================================
// Reviews Component
// ================================
function Reviews() {
    return (
        <div className="space-y-5">
            <motion.h1
                initial={"hidden"}
                whileInView={"show"}
                variants={animateOpacity}
                transition={transitionSettings}
                className="text-3xl leading-14 font-bold select-none text-black dark:text-white transition-colors"
            >
                👥 اراء المتعلمين
            </motion.h1>

            <motion.div
                initial={"hidden"}
                whileInView="show"
                variants={animateOpacity}
                transition={{ ...transitionSettings, staggerChildren: 0.3 }}
            >
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {ListReviews.map((review, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <motion.div
                                    variants={animateOpacity}
                                    transition={transitionSettings}
                                    className=" bg-gray-200 text-black dark:text-white transition-colors dark:bg-gray-900 p-5 rounded-lg text-center space-y-5"
                                >
                                    <strong className="text-2xl block">
                                        {review.name}
                                    </strong>

                                    <p>{review.comment}</p>

                                    <div className="w-fit mx-auto">
                                        <Rating
                                            style={{ maxWidth: 100 }}
                                            readOnly
                                            value={review.rating}
                                        />
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </motion.div>
        </div>
    );
}

// Export component with memo for performance optimization
export default memo(Reviews);
