import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { API } from "./API";
import { First } from "./First";

export const Navigate = () => {
    return(
       <BrowserRouter>
       <nav>
           <Link to = '/'> Home </Link>
           <Link to = '/api'> Fetch API Data </Link>
           <Link to = '/operations'> Operations </Link>
       </nav>
       <Routes>
         <Route path="/" element = {<First />} />
         <Route path="/api" element = {<API />} />
        </Routes>
       </BrowserRouter>
    );
}