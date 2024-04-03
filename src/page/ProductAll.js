/* eslint-disable */
import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
// import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/reducers/productSlice";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    dispatch(fetchProducts(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, [query]); // query 변경시 useEffect호출되도록

  return (
    <div>
      <Container>
        <Row>
          {/* 총합 12이므로 4개의 이미지는 값 = 3 */}
          {productList?.map((item) => (
            <Col lg={3}>
              <ProductCard item={item} key={item.id} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
