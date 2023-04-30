import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../Page/ProductDetail'

const PrivateRoute = ({authenticate}) => {
    /* authenticate 의 불린 값에 따라 Login.js 를 렌더링 할지 상품 디테일 페이지를 렌더링 할 지 결정 */
    return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
}

export default PrivateRoute