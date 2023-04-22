import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
        <h1>홈페이지</h1>
        <p><Link to="/Aboutpage">Aboutpage로 이동하는 링크임</Link></p>
        <p><Link to="/Productpage">Productpage로 이동하는 링크임</Link></p>
    </div>
  )
}

export default Homepage