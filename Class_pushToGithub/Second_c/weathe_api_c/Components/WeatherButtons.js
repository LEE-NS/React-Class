import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const WeatherButtons = ({cities, setCity}) => {
  console.log('들어오는지 확인 setcity', setCity);
  return (
    <div>
        <Button variant="primary">📍 내 위치</Button>
        {cities.map((item) => {
          return <Button variant="secondary" onClick={() => setCity(item)}>{item}</Button>
        })}
    </div>
  )
}

export default WeatherButtons

// App.js(중앙 컴포넌트)에서 각 컴포넌트에 분배하게 될 변수와 함수들을 모두 통제할 수 있게 해야한다.
