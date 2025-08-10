// ================================
// Importing required libraries
// ================================
import PropTypes from "prop-types";
import { Link } from "react-router";

// ================================
// Logo  Component
// ================================
function Logo({ className }) {
    return (
        <Link
            to={"/"}
            className={`bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-transparent bg-clip-text select-none ${className}`}
        >
            كودفيجن
        </Link>
    );
}

// ================================
//  PropTypes Validation
// ================================
Logo.propTypes = {
    className: PropTypes.string,
};
export default Logo;
