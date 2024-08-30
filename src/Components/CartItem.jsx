import React from 'react'
import style from 'CartItem.module.scss'

function CartItem({name, value, price, img}) {
  return(
    <div className={style.item}>
      <div>
        <p className={style.item__name}>{name}</p>
        <p className={style.cart__price}>{value} X {price} UAH</p>
      </div>
      <div className={style.cart__img}>
        <img src={img} alt={name} />
      </div>
    </div>
  )
}

export default CartItem