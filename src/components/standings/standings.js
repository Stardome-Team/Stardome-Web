import React, {useState} from 'react'
import './standings.scss'
import Participate from './participate'

const Standings = (props) => {
    
    const [showParticipate, setShowParticipate] = useState(false)

    const toggleShowParticipate = (showParticipate) =>
    {
        setShowParticipate(prevState => !prevState)
    }

    return (
        <div className="Event">

        <div className="Details">

        <p className="Title">{props.name}</p>
        <p>Stage Reached</p>
        <p>{props.slots} slots</p>
        {showParticipate && <Participate setChanged={toggleShowParticipate}/>}
        </div>

        
        <div>
            <a onClick={toggleShowParticipate}>
                View Standings
            </a>
        </div>
            
        </div>
    );
}

export default Standings