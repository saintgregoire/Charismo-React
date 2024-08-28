import React, {useContext} from 'react'
import style from './Cart.module.scss'
import { Link } from 'react-router-dom'

import { CartContext } from '../Services/Context';

import { IoIosClose } from 'react-icons/io';


function Cart() {

  const {setCartValue } = useContext(CartContext);

  const cartClose = () => {setCartValue(false)};

  return (
    <div className={style.cart}>
      <div onClick={cartClose} className={style.cart__close}>
        <IoIosClose />
      </div>
      <h2>Корзина</h2>
      <div className={style.cart__products}>

      </div>
      <p>Итого: <span>333</span></p>
      <Link to='#'>Оформить заказ</Link>
    </div>
  )
}

export default Cart