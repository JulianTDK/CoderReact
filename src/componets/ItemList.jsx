import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Items from "./Items"


const ItemList = ({ productos }) => {
    return (
      <Container fluid>
        <Row>
          {productos.map((dt) => {
            return (
              <Col className=" py-3" sm={6} lg={3} xl={3} key={dt.id}>
                <Items
                  id={dt.id}
                  src={dt.src}
                  alt={dt.alt}
                  title={dt.title}
                  description={dt.description}
                  price={dt.price}
                  
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  };



export default ItemList
