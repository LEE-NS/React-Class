import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/LEE-NS/front-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(()=>{
    getProductDetail()
  }, []);

  return (
    <Container>
      <Row>
        <Col className='product-dtl-img'>
          <img src={product?.img} />
        </Col>
        <Col className='product-dtl-info'>
          <div className='info-t'>{product?.title}</div>
          <div className='info-p'>￦{product?.price}</div>
          <div className='info-ch'>{product?.choice == true ? "Conscious Choice" : ""}</div>
          <Dropdown className='dd'>
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>{product?.size[0]}</Dropdown.Item>
              <Dropdown.Item>{product?.size[1]}</Dropdown.Item>
              <Dropdown.Item>{product?.size[2]}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className='d-grid gap-1'>
            <Button variant="dark" className='btn'>장바구니에 담기</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
