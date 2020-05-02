import React, { Component } from 'react';
import Filter from "./Filter/Filter";
import TournamentList from "./TournamentList/TournamentList";
import "./UpComing.scss";

export default class UpComing extends Component 
{
    state =
    {
        categories:["Adventure"],
        search:""
    }

    updateSearch = value =>
    {
        value = value.trim();

        if(value)
        {
            this.setState({search:value})
        }
    }

    render() {
        return (
            <div className="UpComingWrapper">
                <Filter 
                update={this.updateSearch} categories={this.state.categories}/>
                <TournamentList />                
            </div>
        )
    }
}
