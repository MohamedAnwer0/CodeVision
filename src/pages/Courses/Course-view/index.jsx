// ================================
// Importing Hooks
// ================================
import { useParams } from "react-router";

// ================================
// Importing components
// ================================
import SectionTop from "./SectionTop";
import Details from "./Details";
import Aside from "./Aside";
import TitleUpdater from "../../../components/TitleUpdater";

// ================================
// Importing Image
// ================================
import { CoursesImage } from "../../../import/Images";

// ================================
// Importing API
// ================================
import Courses from "../../../api/Courses.json";

// ================================
// Index  Component
// ================================
function Index() {
    const { title } = useParams();
    let detailsCourse = Courses.filter(
        (item) => item.name === title.split("_").join(" ")
    );
    detailsCourse = detailsCourse[0];

    // Update the title page
    TitleUpdater({ titleParam: detailsCourse.name });

    return (
        <div>
            <SectionTop detailsCourse={detailsCourse} />
            <div className="w-full grid xl:grid-cols-3 gap-10">
                <Details
                    description={detailsCourse.description}
                    lessons={detailsCourse.lessons}
                    reviews={detailsCourse.reviews}
                />

                <Aside
                    background={CoursesImage[detailsCourse.background]}
                    lessons={detailsCourse.lessons}
                />
            </div>
        </div>
    );
}

export default Index;
