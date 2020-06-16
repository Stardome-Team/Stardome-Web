import React, { useState } from 'react';
import SCHEDULE from "../schedule.data";
import StandingsList from "../../components/standings/standingsList";
import Footer from '../../components/footer/footer'
import "./standingsPage.scss";
import NavBar from '../../components/navbar/navbar';

const StandingPage = () => 
{
    const [events, setEvents] = useState(SCHEDULE[0].event)

        return (
            <div className="UpComingWrapper">
                <StandingsList events={events} />                
            </div>
        )
}

const StandingsPage = () => {
    return (
        <>
            <NavBar/>
            <StandingPage/>
            <Footer/>
        </>
    )
}

export default StandingsPage