import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Infobox = ({info}) => {

    const ini_URL = 'https://images.unsplash.com/photo-1696952433278-0abf5db731ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGF6eSUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D';

    // let info = {
    //     city:"Delhi",
    //     feelslike: 23.45,
    //     temp: 25,
    //     tempMin: 44,
    //     tempMax: 27,
    //     humidity: 75,
    //     weather: "clear sky",
    // }
    return (
        <div>
            {/* <h2 style={{textAlign:"center"}}>Weather Info. - {info.weather}</h2> */}
            <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={ini_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>City = {info.city}</p>
                        <p>Temperature = {info.temp}&deg;c</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min temp = {info.tempMin}&deg;c</p>
                        <p>Max temp = {info.tempMax}&deg;c</p>
                        <p>Weather = {info.weather}</p>
                        <p>The weather can be described as <i>{info.weather} </i> & feels like = {info.feelslike}&deg;</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}

export default Infobox