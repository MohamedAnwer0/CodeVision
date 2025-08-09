// routeing
import { Link, useLocation } from "react-router";
const listLinks = [
    {
        id: 1,
        title: "الرئيسية",
        to: "/",
    },
    {
        id: 2,
        title: "المسارات التعليمية",
        to: "/tracks",
    },
    {
        id: 3,
        title: "الكورسات",
        to: "/courses",
    },
    {
        id: 4,
        title: "التمارين والمشاريع",
        to: "/exercises",
    },
    {
        id: 5,
        title: "المجتمع",
        to: "/community",
    },
    {
        id: 6,
        title: "المقالات ",
        to: "/articles",
    },
    {
        id: 7,
        title: "محرر الاكواد",
        to: "/codeEditor",
    },
];

function Links() {
    const { pathname } = useLocation();

    const styleActive = `text-purple-500  after:scale-100`;
    const styleHover = `hover:text-purple-500 hover:after:scale-100`;
    return (
        <ul className="items-center space-x-6 text-black hidden 2xl:flex dark:text-white">
            {listLinks.map((link) => {
                return (
                    <li
                        key={link.id}
                        className={`text-xl font-semibold transition-colors relative after:absolute after:w-full after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:left-1/2 after:-translate-x-1/2 after:-bottom-[10px] after:scale-0 after:transition ${
                            link.to === `/${pathname.split("/")[1]}`
                                ? styleActive
                                : styleHover
                        }`}
                    >
                        <Link to={link.to}>{link.title}</Link>
                    </li>
                );
            })}
        </ul>
    );
}

export default Links;
