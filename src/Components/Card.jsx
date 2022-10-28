import { findByLabelText } from "@testing-library/react";
import React from "react";

const Card = (props) => {
     const {id,email,avatar,first_name,last_name} = props;
     const cardstyle = {
        
     }
     return(
        <div style={{display : 'flex', justifyContent : 'center', margin : '10px' }}>
        <div style={{ padding : '10px', border : '1px solid black'}}>
        <img src = {avatar} alt = "Text" /><br />
        </div>
        <div style={{padding : '10px', border : '1px solid black', backgroundColor : 'aqua'}}>
        <ul>
            <li> Id : {id} </li>
            <li> Name : {first_name} {last_name} </li>
            <li> Email : {email} </li>
        </ul>
        </div>
        </div>
     );
}

export default Card;