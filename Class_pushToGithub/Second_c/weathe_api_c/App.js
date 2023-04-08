import { useEffect, useState } from 'react';
import WeatherBox from './Components/WeatherBox';
import WeatherButtons from './Components/WeatherButtons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.watchPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=894fb1739d4ab6c8e1169c39d0784e8d`
    let response = await fetch(url);
    let data = await response.json();
    console.log('데이터 들어오는 중', data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <div className='container'>
        <WeatherBox />
        <WeatherButtons />
      </div>
    </div>
  );
}

export default App;

/* 
1. 유저는 현재 위치의 날씨를 볼 수 있음 (지역, 온도, 날씨)
2. 하단에 버튼 5개. 현재 위치 1개, 주요 도시 4개. 버튼을 누르면 해당 도시의 날씨를 볼 수 있음.
3. 로딩 되어지는 중에 로딩 스피너를 보여줌
*/