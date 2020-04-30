import React from 'react'
import './eventSchedule.scss'

class EventSchedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 10};
        this.incrementWeekClicked = this.incrementWeekClicked.bind(this);
        this.decrementWeekClicked = this.decrementWeekClicked.bind(this);
      }
      
      incrementWeekClicked(event) {
        this.setState({value: this.state.value+1});
      }

      decrementWeekClicked(event) {
        this.setState({value: this.state.value-1});
      }
      
    render() {
    const {value} = this.state;
    return (      
    <div className="container">
        <div className="week-counter">
            <i style={{fontSize: "xxx-large"}} onClick={this.decrementWeekClicked} class="fas fa-caret-left"></i>
                <div className="week-counter display">Week {this.state.value}</div>
            <i style={{fontSize: "xxx-large"}} onClick={this.incrementWeekClicked} class="fas fa-caret-right"></i>
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