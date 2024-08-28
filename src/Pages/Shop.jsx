import React, {useEffect, useState} from 'react'
import style from './Shop.module.scss'

import Product from '../Components/Product.jsx';


function Shop() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('/data/products.json');
        if(!response.ok){
          throw new Error('Ошибка получения данных');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error){
        console.error('Проблема с fetch:', error);
      }
    } 
    fetchData();
  },[]);


  return (
    <main>
      <p className={style.top}>
        Главная <span>Магазин</span>
      </p>

      <section className={`container ${style.products}`}>
        <h2 className='sr-only'>Продукты</h2>
        {data.map((item) => (
          <Product 
          key={item.id}
          img={item.img}
          name={item.name}
          desc={item.description}
          price={item.price}
          />
        ))}
      </section>
    </main>
  )
}

export default Shop