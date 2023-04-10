import { useEffect, useState } from 'react';
import WeatherBox from './Components/WeatherBox';
import WeatherButtons from './Components/WeatherButtons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const cities = ['Busan', 'Seoul', 'Daegu', 'Jinju'];
  
  const getCurrentLocation = () => {
    navigator.geolocation.watchPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=kr&appid=894fb1739d4ab6c8e1169c39d0784e8d`
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };
  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=kr&appid=894fb1739d4ab6c8e1169c39d0784e8d`
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
  };
    
  useEffect(() => {
    if (city == '') {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }  
  }, [city]);

  return (
    <div>
      <div className='container'>
        <WeatherBox weather={weather} />
        <WeatherButtons cities={cities} setCity={setCity}/>
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
