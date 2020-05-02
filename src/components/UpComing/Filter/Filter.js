import React from 'react';
import "./Filter.scss";

export default function Filter(props) 
{
    const options = props.categories.map( cat => 
    {
        return (
           <option key={cat} value={cat}>{cat}</option>
        );
    } )
    return (
        <div className="Inputs">

            <select onChange={props.changeCat}>

                { options }
               
            </select>

            <div className="field">
            <input value={props.search} onChange={props.update} type="search" placeholder="Search..." />
            </div>
            
            
        </div>
    )
}
