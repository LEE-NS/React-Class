import React, { Fragment, useState } from 'react'
import './Box.css'

const Box = () => {
  const [unValue, setUn] = useState('');
  const [pwValue, setPw] = useState('');
  
  const saveUserName = event => {
    if (setUn(event.target.value)= "User123") {
      
    }
  }
  const savePassword = event => {
    setPw(event.target.value)
  }
  
  return (
    <div id='outBg'>
        <div className='inf'>
            <p>Username</p>
            <input 
            type="text" 
            value={unValue} 
            onChange={saveUserName}
             />
            <br /><br />
            <p>Password</p>
            <input 
            type="password" 
            value={pwValue} 
            onChange={savePassword}
             />
        </div>
        <div className='ErrText'>사용자 이름 또는 패스워드가 유효하지 않습니다.</div>
        <p>
            <button>heell</button>
        </p>    
    </div>
  )
}

export default Box