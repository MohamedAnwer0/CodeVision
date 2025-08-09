// libraries
import PropTypes from "prop-types";
// hooks
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);

    useEffect(() => {
        if (!isAuthenticated) navigate("/signin");
    }, [navigate, isAuthenticated]);
    if (!isAuthenticated) return null;
    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node,
};

export default ProtectedRoute;
