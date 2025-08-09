// libraries
import Cookie from "js-cookie";
// hooks
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
// routeing
import { Routes, Route, Navigate } from "react-router";
// utils
import ProtectedRoute from "./components/ProtectedRoute";
// pages
import Roote from "./pages/Roote";
import Home from "./pages/Home";
import Tracks from "./pages/Tracks";
import Courses from "./pages/Courses";
import CourseView from "./pages/Courses/Course-view";
import Exercises from "./pages/Exercises";
import Community from "./pages/Community";
import Articles from "./pages/Articles";
import ArticleView from "./pages/Articles/View";
import CodeEditor from "./pages/CodeEditor";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
// components
import TitleUpdater from "./components/TitleUpdater";
// actions redux
import { signIn } from "./Redux/Slice/Auth";
function App() {
    const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
    const dispath = useDispatch();
    // check from user Auth
    useEffect(() => {
        if (Cookie.get("userInfo"))
            dispath(signIn(JSON.parse(Cookie.get("userInfo"))));
    }, [dispath]);
    // add class mode on html tag
    useEffect(() => {
        document.querySelector("html").classList.remove("dark", "light");
        document
            .querySelector("html")
            .classList.add(localStorage.getItem("mode") || "light");
    }, []);
    return (
        <>
            <TitleUpdater />
            <Routes>
                {/* App Router */}
                <Route path="/" element={<Roote />}>
                    <Route index element={<Home />} />
                    <Route path="tracks" element={<Tracks />} />
                    <Route path="courses">
                        <Route index element={<Courses />}></Route>
                        <Route path=":title" element={<CourseView />} />
                    </Route>
                    <Route path="exercises" element={<Exercises></Exercises>} />
                    <Route path="articles">
                        <Route index element={<Articles></Articles>} />
                        <Route
                            path=":title"
                            element={<ArticleView></ArticleView>}
                        />
                    </Route>
                    <Route
                        path="/community"
                        element={<Community></Community>}
                    />
                    <Route
                        path="/codeEditor"
                        element={<CodeEditor></CodeEditor>}
                    />
                </Route>

                {/* Auth Router */}
                <Route
                    path="/signin"
                    element={isAuthenticated ? <Navigate to="/" /> : <SignIn />}
                />
                <Route
                    path="/signup"
                    element={isAuthenticated ? <Navigate to="/" /> : <SignUp />}
                />
            </Routes>
        </>
    );
}
export default App;
