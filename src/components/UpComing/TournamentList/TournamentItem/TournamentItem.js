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
        this.setState({
            showParticipate: true
        });
    }

    render() {
        const {showParticipate} = this.state;
        return (
            <div className="Event">

            <div className="Details">

            <p className="Title">{this.props.name}</p>
            <p>Details of events</p>
            <p>{this.props.slots} slots</p>
            {showParticipate && <Participate/>}
            </div>

            
            <div onClick={() => this.toggleShowParticipate("showParticipate")}>
                <a>
                    Participate
                </a>
            </div>
             
            
            
            </div>
        );
    }
}
