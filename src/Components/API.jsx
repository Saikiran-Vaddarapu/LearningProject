import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

export const API = () => {
    const [data,setData] = useState();
    const [load,setLoad] = useState(false);

    const fetchData = () => {
        setLoad(true);
        axios.get("https://reqres.in/api/users?page=1?&per_page=6").then((response) =>{
            setData(response.data.data);
            setLoad(false);
    })
    }

    useEffect(() => {
        fetchData();
    },[]);

    return(
        <>
        <h2 style={{textAlign : 'center'}}> List of Users  </h2>
         {load && <p> Loading...</p>}
         {!load && data?.map(item => <Card {...item}/>)}
        </>
    );
}