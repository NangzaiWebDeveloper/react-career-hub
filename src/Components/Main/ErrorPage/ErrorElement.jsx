import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorElement = () => {

    const error = useRouteError()
    console.log(error);
    
    const navigate = useNavigate()

    const handleGoBack =()=>{
        navigate(-1)
    }
 
    return (
        <div>
            <p>404 Page Not Found</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default ErrorElement;