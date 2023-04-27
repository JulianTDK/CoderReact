import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ItemList from "./ItemList";
import { mFetch } from "./mFetch";

export function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { cat } = useParams()

  useEffect(() => {
    if (!cat) {
      mFetch()
      .then( res=> { 
        setProductos(res)
    })
        .catch( error => console.log(error) )
        .finally(() => setIsLoading(false))
    } else {
      mFetch()
      .then( resultado=> { 
        setProductos(resultado.filter(productos => productos.category === cat ))
    })
    
    .catch( error => console.log(error) )
    .finally(()=> setIsLoading(false))

}
}, [cat])



  return (   
    <Container fluid className="Hero">
    <Row className="mt-5">
      {isLoading ? (
        <div className="text-center display-5">Cargando...</div>
      ) : (
        <ItemList productos={productos} />
      )}
    </Row>
  </Container>
      
  )
}





export default ItemListContainer;





