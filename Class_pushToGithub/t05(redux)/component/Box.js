import React from 'react'
import { useSelector } from 'react-redux'
import GrandBox from './GrandBox';

const Box = () => {
    let count =  useSelector((state) => state.count);
  return (
    <div>
        <p>컴포넌트입니다</p>
        <p>{count}</p>
        <GrandBox />
    </div>
  )
}

export default Box