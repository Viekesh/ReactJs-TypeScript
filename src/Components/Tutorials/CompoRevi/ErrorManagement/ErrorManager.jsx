import { useState, useEffect } from 'react';
import logger from './ErrorLogger';



const ErrorManager = ({ onClose, children }) => {

    const [isError, setIsError] = useState(false);



    // demonstrates error catching using a simulated error with an empty dependency array.
    // Implemented actual error handling logic here.
    useEffect(() => {

        // Mimic getDerivedStateFromError for error catching
        const error = new Error('Simulated error'); // Replace with actual error catching logic

        if (error) {
            logger(error);
            setIsError(true);
        }

    }, []); // Empty dependency array to run once



    const handleClose = () => {
        setIsError(false);
        onClose();
    };

    return (
        <div>
            {isError ? (
                <div className="error">
                    <img src="./failWhale.jpg" alt="There was an error!" />
                    <button className="reset-btn" onClick={handleClose}>
                        Close
                    </button>
                </div>
            ) : (
                children
            )}
        </div>
    );
};



export default ErrorManager;
