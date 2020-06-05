import React , { useState } from 'react'
import './eventSchedule.scss'
import SCHEDULE from '../schedule.data'
import './eventSchedule.scss';

const EventSchedule = (props) => {

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

        <div id="schedule" className="daily-schedule">
            <div className="daily-schedule date day">Mon 
            <div className="daily-schedule date other">May 14</div></div>
                <div className="daily-schedule flow">
                    <div className="daily-schedule event">
                        <div className="daily-schedule time">{props.date} 
                    <div className="daily-schedule name">{props.name}</div></div>
                    </div>
                    {/* <div className="daily-schedule event">
                        <div className="daily-schedule time">11:30am 
                        <div className="daily-schedule name">Call of Duty 2020 Regionals</div></div>
                    </div>
                    <div className="daily-schedule event">
                        <div className="daily-schedule time">11:30am 
                        <div className="daily-schedule name">Call of Duty 2020 Regionals</div></div>
                    </div>
                    <div className="daily-schedule event">
                        <div className="daily-schedule time">11:30am 
                        <div className="daily-schedule name">Call of Duty 2020 Regionals</div></div>
                    </div> */}
                </div>
                <div className="daily-schedule flow scroll">
                    <i style={{fontSize: "xlarge", color: "#c4c4c4"}} class="fas fa-caret-right"></i>
                    </div>
        </div>
    </div>
        )
}

export default EventSchedule