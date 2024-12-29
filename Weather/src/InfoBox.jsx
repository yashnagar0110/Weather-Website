import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1705077031869-51b60754302a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYXRoZXIlMjBmb3JlY2FzdHxlbnwwfHwwfHx8MA%3D%3D";
   
    return (
        <div className='InfoBox'>
            <br></br>
            <div className='container'>
                <Card sx={{ maxWidth: 500 }} className='card'>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <div>{info.city}</div><br></br>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} >
                        <div>Weather : {info.weather}<br></br></div>
                        <div>Temperature: {info.temp}&deg;C<br></br></div>
                        Feels Like: {info.feels_like}<br></br>
                        Grnd Level: {info.grnd_level}<br></br>
                        Humidity: {info.humidity}<br></br>
                        Pressure: {info.pressure}<br></br>
                        Sea Level: {info.sea_level}<br></br>
                    </Typography>
                </CardContent>
                </Card>
            </div>
            
        </div>
    );
}