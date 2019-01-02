import React from 'react';
import {Link} from 'react-router';

const NotFoundPage = () => {
    return (
        <div>
            <h1>Page Not Found</h1>
            <p>Who are you? Go away!</p>
            <p><Link to="/">Go away</Link></p>
        </div>
    );
};

export default NotFoundPage;