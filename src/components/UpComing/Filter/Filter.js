import React from 'react';
import "./Filter.scss";

export default function Filter(props) 
{
    const options = props.categories.map( (cat,i) => 
    {
        return (
           <option key={cat} selected={i===0} value={cat}>{cat}</option>
        );
    } )
    return (
        <div className="Inputs">

            <select >

                { options }
               
            </select>

            <input type="search" placeholder="Search..." />
            
        </div>
    )
}
