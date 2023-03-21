import React, { Fragment } from 'react'
import './Box.css'

const Box = () => {
  return (
    <form>
        <div className='inf'>
            <p>Username</p>
            <input />
            <br /><br />
            <p>Password</p>
            <input type={'password'} />
        </div>
        <p>
            <input type={'submit'} value='Submit' />
        </p>
    </form>
  )
}

export default Box