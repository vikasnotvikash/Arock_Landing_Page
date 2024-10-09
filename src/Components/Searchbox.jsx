import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './Style.css';


const Searchbox = ({ updateinfo }) => {

    const [City, setCity] = useState("")
    const [error, seterror] = useState(false)
    let api_Url = 'https://api.openweathermap.org/data/2.5/weather';
    let api_Key = '241ab4919d5b2762ddab1c373f76a45d';

    const getWeatherInfo = async () => {
        try {
            let data = await fetch(`${api_Url}?q=${City}&appid=${api_Key}&units=metric`);
            let response = await data.json();
            console.log(response);
            let results = {
                city: City,
                temp: response.main.temp,
                tempMin: response.main.temp_min,
                tempMax: response.main.temp_max,
                humidity: response.main.humidity,
                feelsLike: response.main.feels_like,
                weather: response.weather[0].description
            }
            console.log(results);
            return results;
        }
        catch(e) {
            throw e;
        }
    }

    const handleChange = (event) => {
        setCity(event.target.value);
    }

    let Onsubmit = async (event) => {
       try
       {
        event.preventDefault();
        console.log(`The City you have chosen is ${City}`);
        setCity("");
        let info = await getWeatherInfo();
        updateinfo(info);
       }
       catch(e)
       {
        seterror(true);
       }
    }

    return (
        <div className='box'>
            <form onSubmit={Onsubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={City} onChange={handleChange} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <br />
                <Button style={{ marginTop: "10px" }} variant="contained" endIcon={<SendIcon />} type='submit'>
                    Search
                </Button>
                {error && <p>No such place for error!</p>}
            </form>
        </div>
    )
}

export default Searchbox