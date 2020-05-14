import React from 'react';
import { NavLink } from "react-router-dom";
import "./TournamentItem.scss";
import Participate from "./participate"

export default class TournamentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            showParticipate:false
        }
        this.toggleShowParticipate = this.toggleShowParticipate.bind(this);
    }

    toggleShowParticipate = () =>
    {
        this.setState((state) => ({
            showParticipate: !state.showParticipate
        }));
    }

    render() {
        const {showParticipate} = this.state;
        return (
            <div className="Event">

            <div className="Details">

            <p className="Title">{this.props.name}</p>
            <p>Details of events</p>
            <p>{this.props.slots} slots</p>
            {showParticipate && <Participate setChanged={this.toggleShowParticipate}/>}
            </div>

            
            <div>
                <a onClick={() => this.toggleShowParticipate("showParticipate")}>
                    Participate
                </a>
            </div>
             
            </div>
        );
    }
}
