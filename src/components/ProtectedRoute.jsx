// ================================
// Importing required libraries
// ================================
import PropTypes from "prop-types";

// ================================
// Importing Hooks
// ================================
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

// ================================
// ProtectedRoute  Component
// ================================
function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);

    useEffect(() => {
        if (!isAuthenticated) navigate("/signin");
    }, [navigate, isAuthenticated]);
    if (!isAuthenticated) return null;
    return children;
}

// ================================
//  PropTypes Validation
// ================================
ProtectedRoute.propTypes = {
    children: PropTypes.node,
};

export default ProtectedRoute;
