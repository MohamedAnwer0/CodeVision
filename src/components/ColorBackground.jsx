// ================================
// Importing required libraries
// ================================
import PropTypes from "prop-types";

// ================================
// ColorBackground  Component
// ================================
function ColorBackground({ position, size = 700, className }) {
    return (
        <div
            className={`absolute bg-radial from-blue-500/10 dark:from-blue-500/10 dark:to-purple-500/10 to-purple-500/10 rounded-full blur-[700px] ${position} ${className}`}
            style={{ width: `${size}px`, height: `${size}px` }}
        ></div>
    );
}

// ================================
//  PropTypes Validation
// ================================
ColorBackground.propTypes = {
    position: PropTypes.string,
    size: PropTypes.number,
};

export default ColorBackground;
