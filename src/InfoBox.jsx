import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){
   const HOT_URL="https://images.unsplash.com/photo-1546274527-9327167dc1f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
   const RAIN_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=is&k=20&c=GMlTyTFSxiKCiWyDI-NjFFN0RX6Z5yzRbdR3ThuJEyA=";
    return(<div className="InfoBox">
<div className='cardContainer'>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={InfoBox.humidity>80?RAIN_URL :info.temp > 15? HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}{InfoBox.humidity>80?<ThunderstormIcon/> :info.temp > 15? <WbSunnyIcon/>: <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2"  sx={{ color: 'text.secondary' }}>
          Temperature ={info.temp}&deg;C
        </Typography>
        <Typography variant="body2"  sx={{ color: 'text.secondary' }}>
        Humidity ={info.humidity}
        </Typography>
        <Typography variant="body2"  sx={{ color: 'text.secondary' }}>
        Min Temp ={info.tempMin}
        </Typography>
        <Typography variant="body2"  sx={{ color: 'text.secondary' }}>
        Max Temp ={info.tempMax}
        </Typography>
        <Typography variant="body2"  sx={{ color: 'text.secondary' }}>
        The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>)
}


