import React from 'react'

const WeatherBox = ({weather}) => {
  return (
    <div className='weather_box'>
        <div>{weather?.name}</div> {/* weather가 있으면 name 요소를 가져오시오 아니면 false */}
        <h2>{weather?.main.temp.toFixed()}ºC &#40;{(weather?.main.temp.toFixed()) * 1.8 + 32}ºF&#41;</h2>
        <div>{weather?.weather[0].description.toUpperCase()}</div>
    </div>
  );
};

export default WeatherBox