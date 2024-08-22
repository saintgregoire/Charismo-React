import React from 'react'

import 'swiper/css'
import 'swiper/css/pagination';
import style from './Reviews.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import { FaStar } from "react-icons/fa"
import maksym from '../assets/images/Maksym.webp'
import emily from '../assets/images/Emily.webp'
import john from '../assets/images/John.webp'
import gael from '../assets/images/gael.webp'


function Reviews() {

  let slides = 1;

  if (window.innerWidth > 767){
    slides = 2
  }
  if(window.innerWidth > 1439){
    slides = 3
  }
  if(window.innerWidth > 1919){
    slides = 4
  }

  return (
    <section className={`${style.reviews}`}>
      <div className= 'container'>
        <h2>Честные отзывы</h2>
        <p className={`${style.reviews__par}`}>клиентов, партнёров и профессионалов</p>
        <Swiper
          className={`${style.swiper}`}
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={slides}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className={`${style.swiper__slide}`}>
            <div className={`${style.swiper__top}`}>
              <div className={`${style.swiper__img}`}>
                <img src={maksym} alt="фото клиента" />
              </div>
              <div className={`${style.swiper__client_info}`}>
                  <h3>Максим Возничка</h3>
                  <p>Веб Разработчик</p>
                  <div className={`${style.swiper__stars}`}>
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
              </div>
            </div>
            <h3 className={`${style.swiper__h3}`}>Прекрасно себя показал</h3>
            <p>«Использую Декопил в своей практике несколько лет»</p>
          </SwiperSlide>
          <SwiperSlide className={`${style.swiper__slide}`}>
            <div className={`${style.swiper__top}`}>
              <div className={`${style.swiper__img}`}>
                <img src={emily} alt="фото клиента" />
              </div>
              <div className={`${style.swiper__client_info}`}>
                  <h3>Эмили Довольная</h3>
                  <p>Косметолог</p>
                  <div className={`${style.swiper__stars}`}>
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
              </div>
            </div>
            <h3 className={`${style.swiper__h3}`}>Прекрасно себя показал</h3>
            <p>«Использую Декопил в своей практике несколько лет»</p>
          </SwiperSlide>
          <SwiperSlide className={`${style.swiper__slide}`}>
            <div className={`${style.swiper__top}`}>
              <div className={`${style.swiper__img}`}>
                <img src={john} alt="фото клиента" />
              </div>
              <div className={`${style.swiper__client_info}`}>
                  <h3>Джон Пижон</h3>
                  <p>Кинолог</p>
                  <div className={`${style.swiper__stars}`}>
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
              </div>
            </div>
            <h3 className={`${style.swiper__h3}`}>Прекрасно себя показал</h3>
            <p>«Использую Декопил в своей практике несколько лет»</p>
          </SwiperSlide>
          <SwiperSlide className={`${style.swiper__slide}`}>
            <div className={`${style.swiper__top}`}>
              <div className={`${style.swiper__img}`}>
                <img src={gael} alt="фото клиента" />
              </div>
              <div className={`${style.swiper__client_info}`}>
                  <h3>Гаёль Фелюкс</h3>
                  <p>Актер</p>
                  <div className={`${style.swiper__stars}`}>
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
              </div>
            </div>
            <h3 className={`${style.swiper__h3}`}>Прекрасно себя показал</h3>
            <p>«Использую Декопил в своей практике несколько лет»</p>
          </SwiperSlide>
        </Swiper>
      </div>
      
    </section>
  )
}

export default Reviews