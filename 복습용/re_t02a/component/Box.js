import React from 'react'

const Box = (props) => {
  let result;
  if(props.name === "COM" && props.result !== "TIE" && props.result !== "") {
    result = props.result === 'WIN' ? 'LOSE' : 'WIN';
  } else {
    result = props.result;
  }
  return (
    <div className={`playerInfo ${result}`}>
        <p>{props.name}</p>
        <img 
        src={props.item ? props.item.img : 'https://cdn-icons-png.flaticon.com/512/4144/4144475.png'} 
        alt='가위바위보_이미지'
        className='itemImg'
         />
        <p>{result ? result : "낼 것을 고르시오!"}</p>
    </div>
  )
};

export default Box