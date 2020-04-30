import React from 'react'
import './eventSchedule.scss'

class EventSchedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
        this.buttonClicked = this.buttonClicked.bind(this);
      }
      
      buttonClicked(event) {
        this.setState({value: this.state.value+1});
      }
      
    render() {
    return (      
    <div className="container">
        <div className="week-counter">
            <i style={{fontSize: "xxx-large"}} onClick={this.buttonClicked} class="fas fa-caret-left"></i>
                <div className="week-counter display">Week 18</div>
            <i style={{fontSize: "xxx-large"}} onClick={this.buttonClicked} class="fas fa-caret-right"></i>
        </div>

        <div id="schedule" className="daily-schedule">
            <div className="daily-schedule date day">Mon 
            <div className="daily-schedule date other">May 14</div></div>
                <div className="daily-schedule flow">
                    <div className="daily-schedule event">
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
                    </div>
                    <div className="daily-schedule event">
                        <div className="daily-schedule time">11:30am 
                        <div className="daily-schedule name">Call of Duty 2020 Regionals</div></div>
                    </div>
                </div>
                <div className="daily-schedule flow scroll">
                    <i style={{fontSize: "xlarge", color: "#c4c4c4"}} class="fas fa-caret-right"></i>
                    </div>
        </div>
    </div>
        )
    }
}

export default EventSchedule