import React from 'react'
import { Link } from 'react-router-dom'

const Productpage = () => {
  return (
    <div>
        <h1>제품 페이지</h1>
        <p><Link to='/Productpage/Productdetailpage'>Productdetailpage로 이동하기</Link></p>
        <p><Link to='/Aboutpage'>Aboutpage로 이동하기</Link></p>
        <p><Link to='/'>Homepage로 이동하기</Link></p>
    </div>
  )
}

export default Productpage