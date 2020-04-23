import React from 'react';
import { Link } from "react-router-dom";

const PageNotFound = () => (
    <div>
        <h2> 404! </h2>
        <p> <Link to="/">Back to Dashboard</Link> </p>
    </div>
);

export default PageNotFound;