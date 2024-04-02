import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  let { id } = useParams();
  const product = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();
  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col md="6" className="product-image">
          <img src={product?.img} />
        </Col>
        <Col md="6">
          <div className="fz-20">{product?.title}</div>
          <div className="fz-20 fw-bold">₩ {product?.price}</div>
          <div className="choice-text fw-bold mb-20">
            {product?.choice == true ? "Conscious choice" : ""}
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
