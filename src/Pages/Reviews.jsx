import React from 'react'
import style from './Reviews.module.scss'

import ReviewsSection from '../Sections/Reviews'


function Reviews() {

  const articles = [
    {
      id: 1,
      title: 'Пользуетесь нашей продукцией или ищете отзывы по товарам?',
      text: 'У каждого товара есть свой отзывы.'
    },
    {
      id: 2,
      title: 'Есть вопросы или нужна информация об оплате/доставке?',
      text: 'Мы с радостью ответим на все Ваши вопросы.'
    },
    {
      id: 3,
      title: 'Ищете отзывы о компании или хотите оставить свой?',
      text: 'Изучите подборку сохраненных!'
    }
  ]

  return (
    <main>
      <div className={style.top}>
        <p className='container'>Главная <span>Становимся лучше благодаря вам</span></p>
      </div>

      <section className={`container ${style.articles}`}>
        <h2 className='sr-only'>Вопросы</h2>
        {articles.map((item) => (
          <article key={item.id} className={style.articles__article}>
            <p className={style.articles__id}>0{item.id}</p>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <ReviewsSection />
    </main>
  )
}

export default Reviews