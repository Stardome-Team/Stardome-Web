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
                <div class="w3-modal-content w3-card-3" id="back-layer">
                <header class="w3-container" id="popup-header"> 
                    <span id="close-button" onClick={toggleShowPopUp}
                    class="w3-button w3-display-topright">
                        <i class="fas fa-times" style={{fontSize: "x-large"}}></i>
                    </span>
                    <h2 className="popup-header-text">Call of Duty: Lagos Regionals 2020 Standings</h2>
                </header>
                <div class="w3-container">
                    <div className="league-table">
                        <div className="table-centered">
                            <div id="table-header">#</div>
                            <div id="qualifier">1</div>
                            <div id="qualifier">2</div>
                            <div id="qualifier">3</div>
                            <div id="qualifier">4</div>
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                            <div>8</div>
                            <div>9</div>
                            <div>10</div>
                        </div>
                        <div className="table-centered">
                            <div id="table-header">User</div>
                            <div id="qualifier">Irene Adler</div>
                            <div id="qualifier">Tobias Curtis</div>
                            <div id="qualifier">Irene Adler</div>
                            <div id="qualifier">Tobias Curtis</div>
                            <div>Irene Adler</div>
                            <div>Tobias Curtis</div>
                            <div>Irene Adler</div>
                            <div>Tobias Curtis</div>
                            <div>Irene Adler</div>
                            <div>Tobias Curtis</div>
                        </div>
                        <div className="table-centered">
                            <div id="table-header">GP</div>
                            <div id="qualifier">10</div>
                            <div id="qualifier">12</div>
                            <div id="qualifier">13</div>
                            <div id="qualifier">10</div>
                            <div>12</div>
                            <div>13</div>
                            <div>10</div>
                            <div>12</div>
                            <div>13</div>
                            <div>10</div>
                        </div>
                        <div className="table-centered">
                            <div id="table-header">W</div>
                            <div id="qualifier">1</div>
                            <div id="qualifier">2</div>
                            <div id="qualifier">3</div>
                            <div id="qualifier">4</div>
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                            <div>8</div>
                            <div>9</div>
                            <div>10</div>
                        </div>
                        <div className="table-centered">
                            <div id="table-header">D</div>
                            <div id="qualifier">1</div>
                            <div id="qualifier">2</div>
                            <div id="qualifier">3</div>
                            <div id="qualifier">4</div>
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                            <div>8</div>
                            <div>9</div>
                            <div>10</div>
                        </div>
                        <div className="table-centered">
                            <div id="table-header">L</div>
                            <div id="qualifier">1</div>
                            <div id="qualifier">2</div>
                            <div id="qualifier">3</div>
                            <div id="qualifier">4</div>
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                            <div>8</div>
                            <div>9</div>
                            <div>10</div>
                        </div>
                        <div className="table-centered">
                            <div id="table-header">Pts</div>
                            <div id="qualifier">31</div>
                            <div id="qualifier">29</div>
                            <div id="qualifier">28</div>
                            <div id="qualifier">22</div>
                            <div>15</div>
                            <div>13</div>
                            <div>11</div>
                            <div>9</div>
                            <div>9</div>
                            <div>5</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        )   
}

export default Participate