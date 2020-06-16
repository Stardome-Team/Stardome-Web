import React , { useState } from 'react'
import './eventSchedule.scss'
import SCHEDULE from '../schedule.data'

const EventSchedule = (props) => {
    const [events, setEvents] = useState(SCHEDULE[0].event)
    return (      
    <div className="container">
        <div id="schedule" className="daily-schedule">
            <div className="daily-schedule date day">Mon 
            <div className="daily-schedule date other">May 14</div></div>
                <div className="daily-schedule flow">
                        {events.map( (ev,i) =>
                            <div className="daily-schedule event">
                                <div className="daily-schedule time">{ev.date}
                                <div className="daily-schedule name">{ev.name}</div></div>
                            </div>
                        )} 
                </div>
            <div className="daily-schedule flow scroll">
                <i style={{fontSize: "xlarge", color: "#c4c4c4"}} class="fas fa-caret-right"></i>
            </div>
        </div>
    </div>
        )
}

export default EventSchedule