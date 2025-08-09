// libraries
import PropTypes from "prop-types";
// routeing
import { Link } from "react-router";

export const ButtonBasc = ({
    type,
    title = "",
    icon,
    bg,
    className,
    link = false,
    path,
}) => {
    const Component = link ? Link : "button";
    return (
        <Component
            to={path}
            type={type}
            className={`w-fit px-5 py-3 rounded-lg transition-colors text-white font-semibold cursor-pointer ${
                icon && "flex justify-center items-center space-x-2"
            } ${bg ? bg : "bg-purple-500 hover:bg-purple-600"} ${className}`}
        >
            {icon && <span className=" pointer-events-none">{icon}</span>}
            {title && <span>{title}</span>}
        </Component>
    );
};
ButtonBasc.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.object,
    bg: PropTypes.string,
    className: PropTypes.string,
    link: PropTypes.bool,
    path: PropTypes.string,
};

export const ButtonBorder = ({
    title,
    icon,
    className,
    link = false,
    path,
}) => {
    const Component = link ? Link : "button";
    return (
        <Component
            to={path}
            className={`px-5 w-fit py-3 rounded-lg border border-blue-500  hover:border-purple-600 transition-colors text-black dark:text-white hover:text-purple-600 font-semibold cursor-pointer ${
                icon && "flex items-center space-x-2"
            }  ${className}`}
        >
            {icon}
            {title}
        </Component>
    );
};
ButtonBorder.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.object,
    className: PropTypes.string,
    link: PropTypes.bool,
    path: PropTypes.string,
};
