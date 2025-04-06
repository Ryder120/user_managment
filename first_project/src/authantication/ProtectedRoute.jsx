/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ component: Component }) {
    const navigate = useNavigate();

    useEffect(() => {
        validateToken();
    }, [navigate]);

    const validateToken = async () => {

        const user = localStorage.getItem('user') || sessionStorage.getItem('user');
        console.log(user, "user");
        // const decodedToken = await jwtDecode(user);
        if (!user) {
            navigate('/login');
        }
    }
    const user = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (!user) {
        navigate('/login');
        return null;

    }
    if (user === null) {
        navigate('/login');

    }

    return <Component />;
}

export default ProtectedRoute;