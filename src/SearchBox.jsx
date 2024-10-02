import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
export default function SearchBox({updateInfo}){
    let [city, setCity]=useState("");
    let [error, setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="654d3b4d12b054ce7312e0b6d86d49c0";

    let getWeatherInfo=async ()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonresponse= await response.json();
        console.log(jsonresponse);
        let result= {
        city:city,
        temp:jsonresponse.main.temp,
        tempMin:jsonresponse.main.temp_min,
        tempMax:jsonresponse.main.temp_max,
        humidity:jsonresponse.main.humidity,
        feelsLike: jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description,
    };
    console.log(result);
    return result;
    }catch(err){
    throw err;
    }
 };

    let handleChange=(event)=>{
        setCity(event.target.value);
    }
    let handleSubmit =async (event)=>{
        try{
            event.preventDefault();
            console.log(city)
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
        }

    return (
    <div className='SearchBox'>
    <form onSubmit={handleSubmit}>
    <TextField 
    id="city" 
    label="City Name" 
    onChange={handleChange}
    variant="outlined"
    required 
    value={city}
    />
    <br /><br />
    <br /><br />
    <Button variant="contained" type='submit'>Search</Button>
    {error && <p style={{color:"red"}}>"No such place exists!"</p>}
    </form>
    </div>
)}