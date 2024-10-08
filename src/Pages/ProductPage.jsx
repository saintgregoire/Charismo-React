import React, { useState, useRef, useEffect, useContext } from 'react'

import { useLocation } from 'react-router-dom'
import { CartContext } from '../Services/Context';

import style from './ProductPage.module.scss'


function ProductPage() {

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const charact = useRef(null);

  const img = query.get('img');
  const name = query.get('name');
  const desc = query.get('desc');
  const price = query.get('price');
  const mainDesc = query.get('description');
  const category = query.get('category');
  const characteristics = query.get('characteristics');

  useEffect(() => {
    charact.current.innerHTML = characteristics;
  }, [characteristics]);

  const [value, setValue] = useState(1);

  const { addToCart } = useContext(CartContext);

  const addValue = () => {
    setValue((prev) => prev + 1);
  }

  const takeValue = () => {
    if(value > 1){
      setValue((prev) => prev - 1);
    }
  }

  const handleAddToCart = () => {
    const item = { name, value, price, img };
    addToCart(item);
};

  return (
    <main>
      <div className={style.top}>
        <p className='container'>Главная <span>{category}</span><span className={style.top__second}>{name} - {desc}</span></p>
      </div>

      <section className='container'>
        <h2 className='sr-only'>Product description</h2>
        <article className={style.card}>
          <div className={style.card__img}>
            <img src={img} alt={name} />
          </div>
          <div className={style.card__block}>
            <h2>{name}</h2>
            <p className={style.card__price}>{price} UAH</p>
            <p className={style.card__desc}>{mainDesc}</p>
            <div className={style.card__btns_block}>
              <div className={style.card__counter}>
                <button type='button' className={style.card__btn} onClick={takeValue}>-</button>
                <p className={style.card__value}>{value}</p>
                <button type='button' className={style.card__btn} onClick={addValue}>+</button>
              </div>
              <button type='button' className={style.card__add} onClick={handleAddToCart}>В корзину</button>
            </div>
            <p className={style.card__category}>Категория: <span>{category}</span></p>
          </div>
        </article>
      </section>

      <section className='container'>
        <h2 className={style.char__title}>Характеристики</h2>
        <p ref={charact} className={style.char__par}></p>
      </section>

    </main>
  )
}

export default ProductPage