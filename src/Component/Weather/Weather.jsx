"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Img from '../../../public/skygif.gif';
import Image from 'next/image';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = process.env.NEXT_PUBLIC_Weather_api;


    useEffect(() => {
    if (!city) {
        // Do not make the API call if the city is not provided.
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios
        .get(apiUrl)
        .then((response) => {
            setWeatherData(response.data);
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [city]);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    return (
        <div className="md:min-h-screen h-full my-10 relative p-4 rounded-lg shadow-md">
            <Image
                src={Img} // Adjust the path to your image
                alt="Background Image"
                layout="fill"
                objectFit="cover"
            />
            <div className="absolute  inset-0  "></div>
            <div className="relative object-center w-full  mx-auto pt-36 md:ps-96 sm:ps-5  z-10 text-black">
                <h2 className="text-4xl  font-bold mb-4 text-[#ffffff]">Weather Information</h2>
                <form className="mb-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="cityInput" className="text-gray-700 font-bold">
                            Enter City:
                        </label>
                        <input
                            type="text"
                            id="cityInput"
                            value={city}
                            onChange={handleCityChange}
                            placeholder="Enter city name"
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />

                    </div>
                </form>
                {weatherData ? (
                    <div>
                        <h3 className="text-xl font-semibold">
                            Weather in {weatherData.name}, {weatherData.sys.country}
                        </h3>
                        <p className="text-lg">
                            Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C
                        </p>
                        <p className="text-lg">
                            Weather: {weatherData.weather[0].description}
                        </p>
                    </div>
                ) : (
                    <p className="text-lg mt-4">
                        Enter a city name and click Show to get weather data.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Weather;
