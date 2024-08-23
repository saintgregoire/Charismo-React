import React from 'react'
import {Link} from 'react-router-dom'
import style from './Banner.module.scss'

import woman from '../assets/images/banner_girl.png'

function Banner() {
  return (
    <section className={`${style.banner}`}>
      <div className={`${style.banner__container} container`}>
        <h1 className={`${style.banner__title}`}>Инновации на службе
      ваших волос</h1>
        <p>Эффективные решения против выпадения и для роста волос, рекомендуемые профессионалами.</p>
        <div className={`${style.banner__img}`}>
          <img src={woman} alt="Happy woman" />
        </div>
        <Link to='/shop'>В магазин</Link>
      </div>
    </section>
  )
}

export default Banner