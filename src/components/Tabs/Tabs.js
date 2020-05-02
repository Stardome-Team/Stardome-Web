import React from 'react';
import "./Tabs.scss";

export default function Tabs(props) 
{
    
    return (
        <div className="Tabs">
               <div onClick={props.showTourn} className={"__Tab" + (props.isTourn ?  " active" : "")}>

                   <h3>ongoing tournament schedule</h3>

                </div> 

               <div className="__Separator"></div>              


                <div onClick={props.showUpComing} className={"__Tab" + (props.isUpcoming ?  " active" : "")}>

                   <h3>upcoming tournaments</h3>

                </div> 
        </div>
    )
}
