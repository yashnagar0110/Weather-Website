import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo , setweatherInfo] = useState(
        {
            city: "-",
            weather: "-",
            feels_like: 0,
            grnd_level: 0,
            humidity: 0,
            pressure: 0,
            sea_level: 0,
            temp: 0,
        }
    )
    let updateInfo = (result)=>{
        setweatherInfo(result);
    }
    return (
        <>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </>
    )
}

