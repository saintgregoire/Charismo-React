import React from 'react'

import style from './Solutions.module.scss'
import woman from '../assets/images/woman.png'
import man from '../assets/images/man.png'
import woman2 from '../assets/images/face.png'

import { FaArrowRight } from "react-icons/fa"
import { Link } from 'react-router-dom'


function Solutions() {
  return (
    <section className={`${style.solutions} container`}>
      <h2>Эффективные решения</h2>
      <p>Bосстановления, питания и активации роста</p>

      <div className={`${style.solutions__box}`}>
        <article>
          <div className={`${style.solutions__img}`}>
            <img src={woman} alt="девушка с красивыми волосами" />
          </div>
          <h3>Для волос и головы</h3>
          <p>Восстановление, питание и активация роста волос на голове</p>
          <Link to="/shop">Посмотреть товары <FaArrowRight /></Link>
        </article>

        <article>
          <div className={`${style.solutions__img}`}>
            <img src={woman2} alt="девушка с красивыми бровями" />
          </div>
          <h3>Для волос бровей</h3>
          <p>Густые и шикарные брови за 30-90 дней с гарантией результата</p>
          <Link to="/shop">Посмотреть товары <FaArrowRight /></Link>
        </article>
        
        <article>
          <div className={`${style.solutions__img}`}>
            <img src={man} alt="мужчина с красивой бородой" />
          </div>
          <h3>Для волос бороды</h3>
          <p>Эффективные решения для активации роста бороды</p>
          <Link to="/shop">Посмотреть товары <FaArrowRight /></Link>
        </article>
      </div>
    </section>
  )
}

export default Solutions