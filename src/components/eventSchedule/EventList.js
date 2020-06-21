import React , { useState } from 'react'
import EventSchedule from "./eventSchedule"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretLeft, faCaretRight} from '@fortawesome/free-solid-svg-icons';
import './eventSchedule.scss';

const EventList = ({events}) =>  {

    const [weekCount, setWeekCount] = useState(1)
      
    const incrementWeekClicked = () => {
        setWeekCount(prevState => prevState+1)
      }

    const decrementWeekClicked = () =>  {
        setWeekCount(prevState => prevState-1)
      }
       
    return (      
        <div className="container">
            <div className="week-counter">
            <FontAwesomeIcon style={{fontSize: "xxx-large"}} onClick={decrementWeekClicked} icon={faCaretLeft}/>
                    <div className="week-counter display">Week {weekCount}</div>
            <FontAwesomeIcon style={{fontSize: "xxx-large"}} onClick={incrementWeekClicked} icon={faCaretRight}/>
            </div>
            <EventSchedule />
        </div>
    )
}

export default EventList
