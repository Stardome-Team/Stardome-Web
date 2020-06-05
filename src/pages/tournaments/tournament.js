import React ,{ useState } from 'react';
import './tournament.scss';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Tabs from '../../components/Tabs/Tabs';
import Upcoming from '../../components/UpComing/UpComing';
import EventList from '../../components/eventSchedule/EventList';
import SCHEDULE from '../../components/schedule.data'

const TournamentPage = () =>
{
    const [showUpComing, setShowUpComing] = useState(true)
    const [showTourn, setShowTourn] = useState(false)
    const [events, setEvents] = useState(SCHEDULE[0].event)

    const toggleShowUpComing = () =>
    {
        setShowUpComing(true)
        setShowTourn(false)
    }

    const toggleShowTourn = () =>
    {
        setShowUpComing(false)
        setShowTourn(true)
    }
        
    const upCom = showUpComing ? <Upcoming /> : <EventList events={events}/>
        
        return (
            <>
            <div className="bg">
                <NavBar/>
                <Tabs 
                   showUpComing={toggleShowUpComing}
                   showTourn={toggleShowTourn}
                   isTourn={showTourn} 
                   isUpcoming={showUpComing} />
                { upCom }
                <Footer/>
            </div>
            </>
        );
}

export default TournamentPage;