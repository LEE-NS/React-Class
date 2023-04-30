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