import React , { useState } from 'react'
import EventSchedule from "./eventSchedule"
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
                <i style={{fontSize: "xxx-large"}} onClick={decrementWeekClicked} class="fas fa-caret-left"></i>
                    <div className="week-counter display">Week {weekCount}</div>
                <i style={{fontSize: "xxx-large"}} onClick={incrementWeekClicked} class="fas fa-caret-right"></i>
            </div>
            {events.map( (ev,i) =>
                {
                    return(
                        <EventSchedule key={`${ev.name}${i}`} name={ev.name} date={ev.date} />
                    );
                } )}
        </div>
    )
}

export default EventList
