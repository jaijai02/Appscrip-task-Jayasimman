"use client";
import { useEffect, useState } from "react";
import Styles from "./ProductCard.module.css";

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const toggleLike = (productid) => {
    setLiked(
      (prevLiked) =>
        prevLiked.includes(productid)
          ? prevLiked.filter((id) => id !== productid) 
          : [...prevLiked, productid]
    );
  };
  return (
    <>
      {products.map((product) => (
        <article className={Styles.products} key={product.id}>
          <figure className={Styles.imgsection}>
            <img src={product.image} alt={product.title} />
          </figure>

          <div className={Styles.product_name_likebtn_div}>
            <h2 className={Styles.product_name}>{product.title}</h2>
            <button
              className={Styles.like_btn}
              aria-label="Add to wishlist"
              onClick={()=>toggleLike(product.id)}
            >
              <i
                className={liked.includes(product.id) ? "bi bi-heart-fill icon" : "bi bi-heart icon"}
                style={{ color: liked.includes(product.id) ? "red" : "black" }}
              ></i>
            </button>
          </div>

          <p className={Styles.product_price}>$ {product.price}</p>

          <div className={Styles.product_btns}>
            <button className={Styles.add_to_cart}>Add to Cart</button>
            <button className={Styles.buy_btn}>Buy Now</button>
          </div>
        </article>
      ))}
    </>
  );
}

export default ProductCard;
