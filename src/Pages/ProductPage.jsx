import React, { useState } from 'react'

import { useLocation } from 'react-router-dom'

import style from './ProductPage.module.scss'


function ProductPage() {

  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const img = query.get('img');
  const name = query.get('name');
  const desc = query.get('desc');
  const price = query.get('price');
  const mainDesc = query.get('description');
  const category = query.get('category');
  const characteristics = query.get('characteristics');

  const [value, setValue] = useState(1);

  const addValue = () => {
    setValue((prev) => prev + 1);
  }

  const takeValue = () => {
    if(value > 1){
      setValue((prev) => prev - 1);
    }
  }

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
              <button type='button' className={style.card__add}>В корзину</button>
            </div>
            <p className={style.card__category}>Категория: <span>{category}</span></p>
          </div>
        </article>
      </section>

    </main>
  )
}

export default ProductPage