import React from 'react'

const Box = (props) => {
  let result;
  if(props.title === "Computer" && props.result !== "TIE" && props.result !== "") {
    result = props.result === 'WIN' ? 'LOSE' : 'WIN';
  } else {
    result = props.result;
  }
  /* 카드가 computer 카드인지? 결과가 비긴건 아닌지? props.result에 값은 들어오는지? */

  return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <img 
        className='item_img' 
        src={props.item && props.item.img} 
        alt='가위바위보_가위' />
        <h2>{result}</h2>
    </div>
  )
}

export default Box