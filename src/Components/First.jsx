import React, { useState } from "react";
import Card from "./Card";
import { data } from "./Data";

export const First = () => {
    const [count,setCount] = useState(0);
    const Info = data.data;
    const handle = (e) => {
        if(e.target.value == ""){
            setCount(0);
            return;
        }
        const val = e.target.valueAsNumber;
        console.log(val);
        setCount(val);
    }

    const onSubmit = (e) => {
       console.log(e.target.name.value);
       console.log(e.target.roll.value);
       e.preventDefault();
    }

    return(
    <>
      <h1> This is my first React Application in my PC </h1>
      <h3> Count : {count} </h3>
      <button onClick={() => setCount(count+1)}> Increment </button>
      <button onClick={() => setCount(count-1)}> Decrement </button><br />
      Enter a value to be set as count : 
      <input type="number" onKeyUp={handle}/>
      <hr />
      <form onSubmit={onSubmit}>
         <h1> Fill the Form </h1>
         Enter Name :  <input type="text" name = "name"></input><br />
         Enter Roll :  <input type="text" name = "roll"></input><br />
         <button type="reset"> Clear </button>
         <button type="submit"> Submit </button>
      </form>
      {/* <hr />
      {
        Info.map(item => <Card {...item}/>)
      } */}
      {/* <Card 
        avatar = "12"
        id = "11"
        email = "vdsk@gmail.com"
      /> */}
    </>
    );
}