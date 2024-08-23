import React from 'react'

import style from './Solutions.module.scss'

import Solution from '../Components/Solution.jsx'

import woman from '../assets/images/woman.png'
import woman2 from '../assets/images/face.png'
import man from '../assets/images/man.png'

function Solutions() {

  const solutions = [
    {
      id: 1,
      url: woman,
      alt: "девушка с красивыми волосами",
      title: 'Для волос и головы',
      text: 'Восстановление, питание и активация роста волос на голове'
    },
    {
      id: 2,
      url: woman2,
      alt: "девушка с красивыми бровями",
      title: 'Для волос бровей',
      text: 'Густые и шикарные брови за 30-90 дней с гарантией результата'
    },
    {
      id: 3,
      url: man,
      alt: "мужчина с красивой бородой",
      title: 'Для волос бороды',
      text: 'Эффективные решения для активации роста бороды'
    }
  ]

  return (
    <section className={`${style.solutions} container`}>
      <h2>Эффективные решения</h2>
      <p>Bосстановления, питания и активации роста</p>

      <div className={`${style.solutions__box}`}>
        {solutions.map((item) => (
          < Solution 
            key={item.id}
            img={item.url}
            alt={item.alt}
            title={item.title}
            text={item.text}
          />
        ))}
      </div>
    </section>
  )
}

export default Solutions