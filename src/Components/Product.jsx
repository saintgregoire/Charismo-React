import React, {useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'

import style from './Product.module.scss'

import { CartContext } from '../Services/Context';

function Product({img, name, desc, price, mainDesc, category, characteristics}) {

  const { addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const handleClick = () => {
    const queryParams = new URLSearchParams({
      img: img,
      name: name,
      price: price,
      desc: desc,
      description: mainDesc,
      category: category,
      characteristics: characteristics
    }).toString();

    navigate(`/product?${queryParams}`);
  }

  const handleAddToCart = () => {
    const item = { name, value:1, price, img };
    addToCart(item);
  };

  return (
    <article className={style.product}>
      <div className={style.product__img}>
        <img src={img} alt={name} />
      </div>
      <h2>{name}</h2>
      <p className={style.product__desc}>{desc}</p>
      <p className={style.product__price}>{price} UAH</p>
      <div className={style.product__btn_container}>
        <button type='button' onClick={handleAddToCart}>В корзину</button>
        <button type='button' onClick = {handleClick}>Подробнее</button> 
      </div>
    </article>
  )
}

export default Product