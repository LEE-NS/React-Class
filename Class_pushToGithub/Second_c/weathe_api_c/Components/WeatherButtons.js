import React from 'react'
import { Button } from 'react-bootstrap'

const WeatherButtons = () => {
  return (
    <div>
        <Button variant="primary">현재 위치</Button>
        <Button variant="light">서울</Button>
        <Button variant="light">부산</Button>
    </div>
  )
}

export default WeatherButtons