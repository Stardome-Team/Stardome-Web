import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function DropUp ( { title, content } ) 
{
    const [ showPopUp, setShowPopUp ] = useState( false );

    const toggleShowPopUp = () =>
    {
        setShowPopUp( prevState => !prevState );
    };

    return (
        <div className="dropUp">
            <div className="header">
                <h4 className="text"><strong>{ title }</strong></h4>
                <FontAwesomeIcon onClick={ toggleShowPopUp } className="fontStyle" icon={ faAngleDown } />
            </div>
            <div style={ { display: showPopUp ? 'block' : 'none' } } className="content">
                <p>{ content }</p>
            </div>
        </div>

    );
}

export default DropUp;
