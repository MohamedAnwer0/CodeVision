// ================================
// Importing components
// ================================
import Container from "./Container";

// ================================
// Importing API
// ================================
import courses from "../../api/Courses.json";

function index() {
    const listCoursesFrontend = [];
    const listCoursesBackend = [];

    courses.forEach((element) => {
        if (element.category.toLowerCase() == "frontend") {
            listCoursesFrontend.push(element);
        } else if (element.category.toLowerCase() == "backend") {
            listCoursesBackend.push(element);
        }
    });

    return (
        <div className="space-y-20 my-10">
            <Container
                title="مسار الواجهة الأمامية( Frontend )"
                courses={listCoursesFrontend}
            />

            <Container
                title="مسار الواجهة الخلفية ( Backend )"
                courses={listCoursesBackend}
            />
        </div>
    );
}


export default index;
