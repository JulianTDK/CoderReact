

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

const ItemDetail = ({id,src,title,alt,description,price}) => {
  return (
    <Container className="pt-3 pb-5 mb-5">
      <Row>
        <Col>
          <div className="cardItemDetail d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-center mt-5">{title}</h1>
            <img className="mt-5 w-25" src={src} alt={alt} />
            <h2>{description}</h2>
            <h3>{price}</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
