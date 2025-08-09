// libraries
import { motion } from "motion/react";
import Cookie from "js-cookie";
import { googleLogout } from "@react-oauth/google";
// hooks
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
// components
import { ButtonBasc, ButtonBorder } from "../../components/Buttons";
// actions redux
import { signOut } from "../../Redux/Slice/Auth";
// icons
import { GoSignOut } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
function ContentUser() {
    const [showBoxUser, setShowBoxUser] = useState(false);
    const { isAuthenticated, user } = useSelector((state) => state.Auth);
    const dispatch = useDispatch();
    // function handel hidden box user on click on scrren
    const boxUser = useRef(null);
    useEffect(() => {
        if (showBoxUser)
            document.addEventListener("click", (e) => {
                console.log(showBoxUser);
                if (!boxUser.current.contains(e.target)) setShowBoxUser(false);
            });
    }, [showBoxUser]);

    // function handel Sign Out
    const handelSignOut = () => {
        Cookie.remove("userInfo");
        dispatch(signOut());
        googleLogout();
    };
    if (!isAuthenticated)
        return (
            <div className=" items-center space-x-5 hidden lg:flex">
                <ButtonBasc title={"تسجيل الدخول"} link path="/signin" />
                <ButtonBorder title={"أنشاء حساب"} link path="/signup" />
            </div>
        );
    return (
        <div
            ref={boxUser}
            onClick={() => setShowBoxUser(!showBoxUser)}
            className="relative flex items-center lg:space-x-2 lg:bg-gray-500/20 lg:dark:bg-blue-500/50 lg:px-5 px-2 py-2 rounded-lg cursor-pointer"
        >
            <strong className="lg:block hidden pointer-events-none select-none text-black dark:text-white">
                {user.firstName || "اسم غير معروف"}
            </strong>
            <img
                src={user.avatar}
                className="w-[35px] h-[35px] object-cover rounded-full pointer-events-none"
                alt={user.fullName}
            />
            <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={
                    showBoxUser ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                className="absolute w-[200px] left-0 top-[calc(100%+25px)] bg-white text-black border space-y-3 border-gray-300 dark:border-gray-800 rounded-lg dark:text-white dark:bg-gray-900 p-2"
            >
                <li className="flex  items-center space-x-2 font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 p-3 rounded-lg">
                    <FaRegUser />
                    <span>ملفي الشخصي</span>
                </li>
                <hr className="border-gray-300 dark:border-gray-700" />
                <li
                    onClick={handelSignOut}
                    className="flex items-center space-x-2 font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 p-3 rounded-lg"
                >
                    <GoSignOut />
                    <span>تسجيل خروج</span>
                </li>
            </motion.ul>
        </div>
    );
}

export default ContentUser;
