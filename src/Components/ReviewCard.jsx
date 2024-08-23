import React, { Fragment } from 'react'

import style from './ReviewCard.module.scss'

import { FaStar } from "react-icons/fa"

function ReviewCard({name, job, title, text, stars, photo}) {

  const renderStars = () => {
    return Array.from({length: stars}, (_, index) => (
      <FaStar key={index}/>
    ))
  }

  return (
    <div className={`${style.swiper_slide}`}>
      <div className={`${style.swiper_slide__top}`}>
        <div className={`${style.swiper_slide__img}`}>
          <img src={photo} alt={name} />
        </div>
        <div className={`${style.swiper_slide__client_info}`}>
          <h3>{name}</h3>
          <p>{job}</p>
          <div className={`${style.swiper_slide__stars}`}>
            {renderStars()}
          </div>
        </div>
      </div>
      <h3 className={`${style.swiper_slide__h3}`}>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default ReviewCard