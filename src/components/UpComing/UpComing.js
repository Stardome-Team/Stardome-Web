import React, { Component } from 'react';
import SCHEDULE  from "../schedule.data";
import Filter from "./Filter/Filter";
import TournamentList from "./TournamentList/TournamentList";
import "./UpComing.scss";

export default class UpComing extends Component 
{
    state =
    {
        categories:["adventure","football"],
        search:"",
        selectedCategory:"adventure",
        events: SCHEDULE[0].event
    }

    updateSearch = event =>
    {
        const value = event.target.value.trim();

        if(value)
        {
            this.setState({search:value})
        }
    }

    updateCategory = event =>
    {
        const value = this.state.categories[event.target.selectedIndex];
        this.setState({selectedCategory:value});        
    }

    render() {
        return (
            <div className="UpComingWrapper">
                <Filter 
                search={this.state.search}
                changeCat = {this.updateCategory}
                update={this.updateSearch} categories={this.state.categories}/>
                <TournamentList events={this.state.events} />                
            </div>
        )
    }
}
