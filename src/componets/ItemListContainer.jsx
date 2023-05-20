import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import {collection,getDocs, getFirestore,  query,  where,} from "firebase/firestore";



const ItemListContainer = () => {
  const [productos, guardarProductos] = useState([]);
  const [estaCargando, guardarEstaCargando] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryCollection = collection(dbFirestore, "productos");

    if (!cid) {
      setTimeout(async () => {
        getDocs(queryCollection)
          .then((resp) =>
            guardarProductos(
              resp.docs.map((productos) => ({
                id: productos.id,               
                ...productos.data(),
              })),
              
            )
          )
          .catch((err) => console.log(err))
          .finally(() => guardarEstaCargando(false));
      }, 2500);
    } else {
      const queryFiltrada = query(
        queryCollection,
        where("category", "==", cid)
      );

      getDocs(queryFiltrada)
        .then((resp) =>
          guardarProductos(
            resp.docs.map((productos) => ({
              id: productos.id,
              ...productos.data(),
            }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => guardarEstaCargando(false));
      
    }
  }, [cid]);




  return (   
    <Container fluid className="Hero">
    <Row className="mt-5">
      {estaCargando ? (
        <div className="text-center display-5">Cargando...</div>
      ) : (
        <ItemList productos={productos} />
      )}
    </Row>
  </Container>
      
  )
}


export default ItemListContainer;





