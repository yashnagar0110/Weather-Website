import './SearchBox.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
const env = import.meta.env;

export default function SearchBox({updateInfo}) {
    const API_URL = env.VITE_API_URL;
    const API_KEY = env.VITE_API_KEY;
    let [city, setcity] = useState("");
    let [error , seterror] = useState(false);
    let getWeatherInfo = async ()=>{
        try{
            let data = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        
        //data is converted into json format before outoput
        let jsondata = await data.json();
        // console.log(jsondata);
        return jsondata;
        }catch(err){
            throw err;
        }
    }
    let handlechange = (event)=>{
        setcity(event.target.value);   
    }
    let handlesubmit = async (event)=>{
        try{
            event.preventDefault();
        // console.log(city);
            let newinfo = await getWeatherInfo(city);
            let info = {
                city: city,
                weather: newinfo.weather[0].description,
                feels_like: newinfo.main.feels_like ,
                grnd_level: newinfo.main.grnd_level,
                humidity: newinfo.main.humidity,
                pressure: newinfo.main.pressure,
                sea_level: newinfo.main.sea_level,
                temp: newinfo.main.temp,
            }
            console.log(newinfo);
            updateInfo(info);
            setcity("");
        }catch(err){
            seterror(true);
        }
    }
    return (
        <>
            <div className='box'>
                <h1>Search for Weather</h1>
                <form onSubmit={handlesubmit}>
                    <TextField 
                    id="city" 
                    label="Enter City" 
                    variant="outlined" 
                    value={city}
                    onChange={handlechange} 
                    required />
                    <br></br><br></br>
                    <Button variant="contained" type='submit'>Search</Button>
                    {error && <p style={{color : "red"}}>No Such Place exists !!</p>}
                </form>
            </div>
        </>
    );
}