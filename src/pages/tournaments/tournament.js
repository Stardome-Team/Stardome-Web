import React ,{ useState } from 'react';
import './tournament.scss';
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Tabs from '../../components/Tabs/Tabs';
import Upcoming from '../../components/UpComing/UpComing';
import EventSchedule from '../../components/eventSchedule/eventSchedule';

const TournamentPage = () =>
{
    const [showUpComing, setShowUpComing] = useState(true)
    const [showTourn, setShowTourn] = useState(false)

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
        
    const upCom = showUpComing ? <Upcoming /> : <EventSchedule/>
        
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