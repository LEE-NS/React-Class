import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    console.log(searchQuery);
    let url = `http://localhost:3500/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json()
    setProductList(data);
  };
  /* 간이 상품 API */
  
  useEffect(() => {
    getProducts();
  }, [query]);
  
  return (
    <div>
        <Container>
          <Row>
            {productList.map((item) => (
              <Col lg={3}>
                <ProductCard item={item}/>
              </Col>  
            ))}
          </Row>
        </Container>
    </div>
  )
}

export default ProductAll

/* api 안의 상품 정보들을 각 상품들에 적용시켜 본다. */
/* useEffect의 두 번째 파라미터가 비어있지 않다면 컴포넌트가 처음 나타날 때만 실행되는 것이 아니라. 두 번째 파라미터가 업데이트 될 때 마다 실행된다(두 번째 파라미터를 주시한다) */
