import React from 'react';
import { NavLink } from "react-router-dom";
import "./TournamentItem.scss";

export default function TournamentItem({name,slots}) {
    return (
        <div className="Event">

          

        <div className="Details">

        <p className="Title">{name}</p>
        <p>Details of events</p>
        <p>{slots} slots</p>
                
        </div>

        <NavLink to="/">
            Participate
        </NavLink> 
        
           
        </div>
    )
}
