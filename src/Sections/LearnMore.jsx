import React from 'react'
import style from './LearnMore.module.scss'

function LearnMore() {
  return (
    <section className={`${style.prof}`}>
      <div className={`${style.prof__container} container`}>
        <h2>Вы профессионал индустрии красоты?</h2>
        <p>Узнайте, как увеличить свой доход при помощи партнёрства с надёжной компанией</p>
        <button type='button'>Узнать подробнее</button>
      </div>
    </section>
  )
}

export default LearnMore