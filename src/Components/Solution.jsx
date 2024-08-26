import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa"

import style from './Solution.module.scss'

function Solution({img, alt, title, text}) {
  return (
    <article className={`${style.solutions}`}>
      <div className={`${style.solutions__img}`}>
        <img src={img} alt={alt} />
      </div>
        <h3>{title}</h3>
        <p>{text}</p>
        <div className={`${style.solutions__link_container}`}>
          <Link to="/shop" className={`${style.solutions__link}`}>Посмотреть товары <FaArrowRight /></Link>
        </div>
    </article>
  )
}

export default Solution