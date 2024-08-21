import React from 'react'
import style from './Principles.module.scss'

import { FaEarthAmericas } from "react-icons/fa6"
import { GiCycle } from "react-icons/gi"
import { FaHandPaper } from "react-icons/fa"

function Principles() {
  return (
    <section className={`${style.princ} container`}>
      <h2>Принципы Charismo</h2>
      <p className={`${style.princ__par}`}>7 лет мы создаем работающие решения для терапии структуры и корней волос. Благодаря принципам работы нас рекомендуют врачи и профессионалы индустрии красоты.</p>
      <div className={`${style.princ__box}`}>
        <article>
          <div className={`${style.princ__ico}`}>
            <FaEarthAmericas />
          </div>
          <h3>Натуральность</h3>
          <p>Мы не используем гормоны — забудьте о синдроме отмены и проблемах со здоровьем из-за побочных эффектов</p>
        </article>
          
        <article>
          <div className={`${style.princ__ico}`}>
          <GiCycle />
          </div>
          <h3>Эффективность</h3>
          <p>Проверена клиническими исследованиями в США, Европе и Украине, и тысячами довольных клиентов</p>
        </article>

        <article>
          <div className={`${style.princ__ico}`}>
            <FaHandPaper />
          </div>
          <h3>Безопасность</h3>
          <p>Производится в США на сертифицированном FDA производстве из ингредиентов, прошедших GMP аттестацию</p>
        </article>
      </div>
    </section>
  )
}

export default Principles