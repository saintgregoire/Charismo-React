import React from 'react'

import style from './PrincipesCard.module.scss'

function PrinsipesCard({img, title, text}) {
  return (
    <article className={`${style.princ}`}>
          <div className={`${style.princ__ico}`}>
            {img}
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
  )
}

export default PrinsipesCard