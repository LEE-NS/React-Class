import React from 'react'
import { useNavigate } from 'react-router-dom';

const Aboutpage = () => {
    const navigate = useNavigate();
    const gotohomepage = () => {
        navigate('/');
    };

  return (        
    <div>
        <h1>Aboutpage</h1>
        <button onClick={gotohomepage}>홈페이지로 이동</button>
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

//위와 같은 구조로 만들어보기