import React from 'react'

const Box = (props) => {

  return (
    <div className='playerInfo'>
        <p>{props.name}</p>
        <img 
        src={
            props.item ? props.item.img : 'https://cdn-icons-png.flaticon.com/512/4144/4144475.png'
        } 
        alt='가위바위보_이미지'
        
         />
        <p>승패여부</p>
    </div>
  )
};

export default Box