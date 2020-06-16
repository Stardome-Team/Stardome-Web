import React, {useState} from 'react';
import { NavLink } from "react-router-dom";
import "./TournamentItem.scss";
import Participate from "./participate"

const TournamentItem = (props) => {

    const [showParticipate, setShowParticipate] = useState(false)

    const toggleShowParticipate = () =>
    {
        setShowParticipate(prevState => !prevState)
    }

        return (
            <div className="Event">

            <div className="Details">

            <p className="Title">{props.name}</p>
            <p>Details of events</p>
            <p>{props.slots} slots</p>
            {showParticipate && <Participate setChanged={toggleShowParticipate}/>}
            </div>

            
            <div>
                <a onClick={toggleShowParticipate}>
                    Participate
                </a>
            </div>
             
            </div>
        );
}

export default TournamentItem