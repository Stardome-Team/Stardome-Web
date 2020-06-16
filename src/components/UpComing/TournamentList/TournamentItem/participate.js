import React, {useState} from 'react';
import './participate.scss'

const Participate = (props) => {
    const [showPopUp, setShowPopUp] = useState(true)
    
    const toggleShowPopUp = () =>
    {
        setShowPopUp(prevState => !prevState);
        changeProps();
    }
    const changeProps = () => {
        props.setChanged();
    }
    return (
        <div className="particpate-pop-up">
           <div style={{display: showPopUp ? 'block' : 'none' }} class="w3-modal">
                <div class="w3-modal-content w3-card-3" style={{width: 500+"px"}} id="back-layer">
                <header class="w3-container" id="popup-header"> 
                    <span id="close-button" onClick={toggleShowPopUp}
                    class="w3-button w3-display-topright">
                        <i class="fas fa-times" style={{fontSize: "x-large"}}></i>
                    </span>
                    <h2 className="popup-header-text">Call of Duty: Lagos Regionals 2020</h2>
                </header>
                <div class="w3-container">
                    <p className="popup-content-text">Event details</p>
                    <p className="popup-content-text">Available Slots</p>
                    <p className="popup-content-text">Total Slots</p>
                </div>
                </div>
            </div>
        </div>
        )
}

export default Participate