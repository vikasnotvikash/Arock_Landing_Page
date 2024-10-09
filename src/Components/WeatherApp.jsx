import React, { useState } from 'react'
import Searchbox from './Searchbox'
import Infobox from './Infobox'

const WeatherApp = () => {

    const [weatherinfo, setweatherinfo] = useState({
        city:"Delhi",
        feelslike: 23.45,
        temp: 25,
        tempMin: 44,
        tempMax: 27,
        humidity: 75,
        weather: "clear sky",
    })

    let updateinfo = (result) => {
        setweatherinfo(result);
    } 

    return (
        <>
            <h1 style={{ textAlign: "center" }}>WeatherApp by me using React.js</h1>
            <Searchbox updateinfo={updateinfo} />
            <Infobox info={weatherinfo} />
        </>
    )
}

export default WeatherApp