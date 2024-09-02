import React, {useContext} from 'react'
import style from './CartItem.module.scss'

import { IoIosClose } from 'react-icons/io';
import { CartContext } from '../Services/Context';

function CartItem({index, name, value, price, img}) {

  const { removeFromCart } = useContext(CartContext);

  const handleRemove = () => {
    removeFromCart(index);
  };

  return(
    <div className={style.item}>
      <div className={style.item__delete} onClick={handleRemove}>
        <IoIosClose />
      </div>
      <div className={style.item__block}>
        <p className={style.item__name}>{name}</p>
        <p className={style.item__price}>{value} X {price} UAH</p>
      </div>
      <div className={style.item__img}>
        <img src={img} alt={name} />
      </div>
    </div>
  )
}

export default CartItem