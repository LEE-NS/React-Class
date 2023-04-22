import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutpage = () => {
    const navigate = useNavigate();
    const gotohomepage = () => {
        navigate('/');
    };
    const gotoproductpage = () => {
        navigate('/Productpage')
    };

  return (
    <div>
        <h1>Aboutpage</h1>
        <p><button onClick={gotohomepage}>Homepage로 이동하는 링크</button></p>
        <p><button onClick={gotoproductpage}>Productpage로 이동하는 링크</button></p>
    </div>
  )
}

export default Aboutpage

//produt page 와 product detail page

//homepage - aboutpage
// |            |
// ------|------
//  product page
//      |
//  product detail page