import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Pakistan",
        feelsLike:20.98,
        humidity:21,
        temp:22.16,
        tempMax:22.16,
        tempMin:22.16,
        weather:"clear sky",
    });

    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
    <div style={{textAlign:"center"}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>)
}