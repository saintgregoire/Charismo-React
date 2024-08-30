import React from 'react'

import { useNavigate } from 'react-router-dom'

import style from './Product.module.scss'

function Product({img, name, desc, price, mainDesc, category,characteristics}) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product', {
      state: {
        img: {img},
        name: {name},
        price: {price},
        desc: {desc},
        description: {mainDesc},
        category: {category},
        characteristics: {characteristics}
      }
    })
  }

  return (
    <article className={style.product}>
      <div className={style.product__img}>
        <img src={img} alt={name} />
      </div>
      <h2>{name}</h2>
      <p className={style.product__desc}>{desc}</p>
      <p className={style.product__price}>{price} UAH</p>
      <div className={style.product__btn_container}>
        <button type='button'>В корзину</button>
        <button type='button' onClick = {handleClick}>Подробнее</button>
      </div>
    </article>
  )
}

export default Product