// ================================
//  layouts Components
// ================================
import HeroSection from "./HeroSection";
import WhyPlatform from "./WhyPlatform";
import QuickInfo from "./QuickInfo";
import LatestCourses from "./LatestCourses";
import LatestArticles from "./LatestArticles";
import Reviews from "./Reviews";
import StartLearningNow from "./StartLearningNow";

function index() {
    return (
        <div className="space-y-20">
            <HeroSection />
            <WhyPlatform />
            <QuickInfo />
            <LatestCourses />
            <LatestArticles />
            <Reviews />
            <StartLearningNow />
        </div>
    );
}

export default index;
