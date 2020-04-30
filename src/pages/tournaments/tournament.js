import React from 'react'
import './tournament.scss'
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import EventSchedule from '../../components/eventSchedule/eventSchedule'

const TournamentPage = () => (
    <>
    <div className="bg">
        <NavBar/>
        <EventSchedule/>
        <Footer/>
    </div>
    </>
)

export default TournamentPage;