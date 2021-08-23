
import React, { useState } from "react";

import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const apiKey ="9697d4024e79e994413fcf50b338f627";
    let city ="Dublin";
    let apiUrl ='http://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}&units=metric';
    return (
        <div className ="Weather"> 
        

        <div class="bg"></div>
<div class="bg bg2"></div>
<div class="bg bg3"></div>
<div class="content">

<form>
    <div className= "row">
    <div className="col-9">
        <input
        type ="Search"
        placeholder= "Enter a city..."
        className="form-control"
        />
    </div>
    <div className ="col-3">
        <input
        type="Submit"
        value="Search"
        className= "btn btn-primary"
        />
        </div>
    </div>
</form>
<h1>Dublin</h1>
<ul>
    <li>
        Monday
    </li>
    <li>
        Mostly Cloudy
    </li>
</ul>
<div className ="row">
<div className="col-4">
        6°C
    </div>
    <div className ="col-4">
        <img
        src="https://www.clipartmax.com/png/full/94-945373_what-a-cloudy-day-ebook-teaches-children-the-difference-cartoon-cloud-with.png"
        alt="Cloudy"
         />
         </div>
        
    <div className="col-4">
        <ul>
            <li>
                Precipitation 15%
            </li>
            <li>
                Wind 13km/hr
            </li>
            <li>
                Humidity 50%
            </li>
        </ul>
    </div>
</div>
</div>
</div>
    )
    }