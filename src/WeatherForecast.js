  
import React, { useState, useEffect } from "react";
import axios from "axios";


export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleForecastResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
        {forecast.map(function (day, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "9697d4024e79e994413fcf50b338f627";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=&appid={API key}&units=metric`;

    axios.get(url).then(handleForecastResponse);

    return null;
  }
}