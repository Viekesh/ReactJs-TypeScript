import React from 'react';
import './EEEHeading.scss';

const EEEHeading = ({heading}) => {
    return (
        <>
            <div className='lp_heading'>
                <h3>
                    {heading}
                </h3>
            </div>
        </>
    )
}

export default EEEHeading