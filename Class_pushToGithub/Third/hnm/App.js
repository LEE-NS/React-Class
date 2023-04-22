import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductAll from './Page/ProductAll';
import Login from './Page/Login';
import ProductDetail from './Page/ProductDetail';


function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;

/* 
쇼핑몰 예제 만들기

1. 전체 상품 페이지, 로그인 페이지, 상품 상세 페이지

2. 전체 상품 페이지에서는 전체 상품을 볼 수 있음
3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
4. 상품 디테일 페이지를 눌렀는데, 로그인이 안되어 있다면 로그인 페이지가 우선 출력
5. 로그인 되어있다면 상품 상세 페이지를 볼 수 있음.
6. 로그아웃 버튼 클릭시 로그아웃됨
7. 로그아웃 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지가 보임
8. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
9. 상품을 검색할 수 있음.
*/


/* 
참조 사이트
fontawesome (아이콘 import 사이트)
*/