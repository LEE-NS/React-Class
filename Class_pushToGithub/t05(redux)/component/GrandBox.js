import React from 'react'
import { useSelector } from 'react-redux'

const GrandBox = () => {
    let count = useSelector((state) => state.count);
  return (
    <div>
        <h1>컴포넌트 아래의 컴포넌트입니다.</h1>
        <h1>{count}</h1>
    </div>
  )
}

export default GrandBox