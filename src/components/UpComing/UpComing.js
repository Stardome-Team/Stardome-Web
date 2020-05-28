import React, { useState } from 'react';
import SCHEDULE  from "../schedule.data";
import Filter from "./Filter/Filter";
import TournamentList from "./TournamentList/TournamentList";
import "./UpComing.scss";

const UpComing = () => 
{
    
    const [categories, setCategories] = useState(["adventure","football"])
    const [search, setSearch] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("adventure")
    const [events, setEvents] = useState(SCHEDULE[0].event)

    const updateSearch = event =>
    {
        const value = event.target.value.trim();

        if(value)
        {
            setSearch(value)
        }
    }

    const updateCategory = event =>
    {
        const value = categories[event.target.selectedIndex];
        setSelectedCategory(value);        
    }

        return (
            <div className="UpComingWrapper">
                <Filter 
                search={search}
                changeCat = {updateCategory}
                update={updateSearch} categories={categories}/>
                <TournamentList events={events} />                
            </div>
        )
}

export default UpComing