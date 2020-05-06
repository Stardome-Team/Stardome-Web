import React from 'react';
import './participate.scss'

export default class Participate extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            showPopUp:true
        }
        this.toggleShowPopUp = this.toggleShowPopUp.bind(this);
    }

    toggleShowPopUp = () =>
    {
        this.setState({
            showPopUp: false
        });
    }
    render(){
        const {showPopUp} = this.state;
    return (
        <div className="particpate-pop-up">
           <div style={{display: this.state.showPopUp ? 'block' : 'none' }} class="w3-modal">
                <div class="w3-modal-content w3-card-4" id="back-layer">
                <header class="w3-container" id="popup-header"> 
                    <span id="close-button" onClick={this.toggleShowPopUp}
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
}