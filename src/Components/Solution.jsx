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
        <Link to="/shop">Посмотреть товары <FaArrowRight /></Link>
    </article>
  )
}

export default Solution