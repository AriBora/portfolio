import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    }, [location.pathname]);

    return (
        <div style={{
            height: "100vh",
            display: "grid",
            placeItems: "center",
        }}>
            <div style={{ textAlign: "center" }}>
                <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
                <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
                    Oops! Page not found
                </p>
                <a href="/" style={{ color: "#646cff" }}>
                    Return to Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
