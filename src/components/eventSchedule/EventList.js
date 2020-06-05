import React from 'react';
import EventSchedule from "./eventSchedule"
// import "./TournamentList.scss";

export default function EventList({events}) {
    return (
        <div className="TournamentList">

            {events.map( (ev,i) =>
                {
                    return(
                        <EventSchedule key={`${ev.name}${i}`} name={ev.name} date={ev.date} />
                    );
                } )}
            
        </div>
    )
}
