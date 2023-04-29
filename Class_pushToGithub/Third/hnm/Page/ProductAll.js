import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../Components/ProductCard';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:3500/products`;
    let response = await fetch(url);
    let data = await response.json()
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
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