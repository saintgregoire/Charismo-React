import React from 'react'
import style from './Product.module.scss'

function Product({img, name, desc, price}) {
  return (
    <article className={style.product}>
      <div className={style.product__img}>
        <img src={img} alt={name} />
      </div>
      <h2>{name}</h2>
      <p className={style.product__desc}>{desc}</p>
      <p className={style.product__price}>{price}</p>
      <div className={style.product__btn_container}>
        <button type='button'>В корзину</button>
      </div>
    </article>
  )
}

export default Product