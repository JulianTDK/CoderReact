import React from "react";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { mFetch } from "./mFetch";

const ItemDetailContainer = () => {
  const [productos, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getProductsById = async (productId) => {
      const res = await mFetch();
      const productFind = res.find((productos) => productos.id === parseInt(productId));
      setProduct(productFind);
    };
    getProductsById(id);
  }, [id]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...productos} />
    </div>
  );
};

export default ItemDetailContainer;
