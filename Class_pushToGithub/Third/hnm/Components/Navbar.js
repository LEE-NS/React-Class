import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']

  return (
    <div id='wrap'>
        <div id='login-area'>
          <div className='login-button'>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
          </div>
        </div>
        {/* 로그인 영역 */}
        <div className='nav-section'>
          <img src="https://companieslogo.com/img/orig/HM-B.ST-7ca5d1a8.png?t=1651904377" />
        </div>
        <div className='menu-search-area'>
          <div className='menu-area'>
            <ul className='menu-list'>
              {menuList.map((menu) => (<li>{menu}</li>))}
            </ul>
          </div>
          {/* 메뉴 영역 */}
          <div className='search-area'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input type="text" placeholder='제품검색' />
          </div>
          {/* 검색 영역 */}
        </div>    
    </div>
  )
}

export default Navbar