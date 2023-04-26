import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
        <h1>홈페이지</h1>
        <Link to="/about">aboutpage로 이동하기!</Link>
    </div>
  )
}

export default Homepage