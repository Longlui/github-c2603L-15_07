import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const fetchProductDetail = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );

    setProduct(response.data);
  };

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  return (
    <div>
      <h1>Product Detail page</h1>

      <p>Product id: {id}</p>

      {product && (
        <div>
          <p>Title: {product.title}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>

          <img
            src={product.image}
            alt={product.title}
            width="150"
          />
        </div>
      )}

      <br />

      <Link to="/products">
        Quay lại danh sách
      </Link>
    </div>
  );
}

export default ProductDetail;