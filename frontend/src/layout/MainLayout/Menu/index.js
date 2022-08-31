import { Link } from "react-router-dom";
import React from 'react';

const index = () => {
    return (
        <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/auth/login">Login</Link>
        </nav>
    )
}

export default index