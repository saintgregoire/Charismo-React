import React, {useContext} from 'react'
import style from './Cart.module.scss'

import { Link } from 'react-router-dom'

import { CartContext } from '../Services/Context';

import { IoIosClose } from 'react-icons/io';
import CartItem from './CartItem';


function Cart() {

  const {cartItems, cartValue, setCartValue } = useContext(CartContext);

  const cartClose = () => {setCartValue(false)};

  const totalPrice = cartItems.reduce((total, item) => total + (item.value * item.price), 0);

  if (!cartValue) return null;

  return (
    <div className={style.cart}>
      <div onClick={cartClose} className={style.cart__close}>
        <IoIosClose />
      </div>
      <h2>Корзина</h2>
      <div className={style.cart__products}>
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            index={index}
            name={item.name}
            value={item.value}
            price={item.price}
            img={item.img}
            />
        ))}
      </div>
      <p>Итого: <span>{totalPrice} UAH</span></p>
      <Link to='#'>Оформить заказ</Link>
    </div>
  )
}

export default Cart