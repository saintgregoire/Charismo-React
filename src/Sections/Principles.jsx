import React from 'react'
import style from './Principles.module.scss'

import { FaEarthAmericas } from "react-icons/fa6"
import { GiCycle } from "react-icons/gi"
import { FaHandPaper } from "react-icons/fa"

import PrinsipesCard from '../Components/PrinsipesCard.jsx'

function Principles() {

  const info = [
    {
      id: 1,
      img: <FaEarthAmericas />,
      title: 'Натуральность',
      text: 'Мы не используем гормоны — забудьте о синдроме отмены и проблемах со здоровьем из-за побочных эффектов'
    },
    {
      id: 2,
      img: <GiCycle />,
      title: 'Эффективность',
      text: 'Проверена клиническими исследованиями в США, Европе и Украине, и тысячами довольных клиентов'
    },
    {
      id: 3,
      img: <FaHandPaper />,
      title: 'Безопасность',
      text: 'Производится в США на сертифицированном FDA производстве из ингредиентов, прошедших GMP аттестацию'
    }
  ];

  return (
    <section className={`${style.princ} container`}>
      <h2>Принципы Charismo</h2>
      <p className={`${style.princ__par}`}>7 лет мы создаем работающие решения для терапии структуры и корней волос. Благодаря принципам работы нас рекомендуют врачи и профессионалы индустрии красоты.</p>
      <div className={`${style.princ__box}`}>
        {info.map((item) => (
          < PrinsipesCard 
          key={item.id} 
          img={item.img}
          title={item.title}
          text={item.text}
          />
        ))}

      </div>
    </section>
  )
}

export default Principles