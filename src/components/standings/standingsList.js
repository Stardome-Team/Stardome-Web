import React from 'react';
import SCHEDULE  from "../schedule.data";
import Standings from "./standings";
import "./standingsList.scss";

export default function StandingsList({events}) {
    return (
        <div className="standingsList">

            {events.map( (ev,i) =>
                {
                    return(
                        <Standings key={`${ev.name}${i}`} name={ev.name} slots={ev.slots} />
                    );
                } )}
            
        </div>
    )
}
