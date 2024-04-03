import React, { useEffect } from "react";
import { Col, Container, Dropdown, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductDetail } from "../redux/reducers/productSlice";

const ProductDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedItem);

  const getProductDetail = async () => {
    dispatch(fetchProductDetail(id));
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col md="6" className="product-image">
          <img src={product?.img} alt="상품이미지" />
        </Col>
        <Col md="6">
          <div className="fz-20">{product?.title}</div>
          <div className="fz-20 fw-bold">₩ {product?.price}</div>
          <div className="choice-text fw-bold mb-20">
            {product?.choice === true ? "Conscious choice" : ""}
          </div>
          <Dropdown className="mb-40">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              Size
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product?.size.length > 0 &&
                product.size.map((item) => (
                  <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark" className="add-button">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
