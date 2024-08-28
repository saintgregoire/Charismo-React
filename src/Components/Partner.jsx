import React from 'react'

import style from './Partner.module.scss'

function Partner({img}) {
  return (
    <div className={`${style.partners__image}`}>
      <img src={img} alt="Лого партнера" />
    </div>
  )
}

export default Partner