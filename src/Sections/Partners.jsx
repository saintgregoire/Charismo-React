import React from 'react'

import 'swiper/css';
import 'swiper/css/autoplay';
import style from './Partners.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import amway from '../assets/images/amway-vector-logo.png'
import bio from '../assets/images/Bio-Rad_Laboratories-ON2uTt4bn_brandlogos.net.svg'
import watsons from '../assets/images/Watsons logo - Brandlogos.net.svg'
import chugai from '../assets/images/Chugai_Pharmaceutical.svg'
import devoted from '../assets/images/Devoted Health logo - Brandlogos.net.svg'
import dove from '../assets/images/Dove logo.svg'
import jj from '../assets/images/Johnson & Johnson logo - Brandlogos.net.svg'
import oriflame from '../assets/images/oriflame-vector-logo.png'
import rexona from '../assets/images/rexona-vector-logo.png'
import vhi from '../assets/images/Vhi Healthcare logo - Brandlogos.net.svg'


function Partners() {

  let slides = 3;
  let space = 50;

  if(window.innerWidth > 767){
    slides = 4;
  }
  if(window.innerWidth > 1439){
    slides = 5;
    space = 80;
  }
  if(window.innerWidth > 1919){
    slides = 6;
  }


  return (
    <section className={`${style.partners} container`}>
      <h2>
      Наши партнёры
      </h2>
      <p>признанные лидеры в своих областях</p>
      <Swiper
      modules={[Autoplay]}
      spaceBetween={space}
      slidesPerView={slides}
      loop={true}
      autoplay={{
        delay: 1200,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
    >
      <SwiperSlide className={`${style.partners__slide}`}>
        <div className={`${style.partners__image}`}>
          <img src={amway} alt="Лого партнера" />
        </div>
      </SwiperSlide>
      <SwiperSlide className={`${style.partners__slide}`}>
        <div className={`${style.partners__image}`}>
          <img src={bio} alt="Лого партнера" />
        </div>
      </SwiperSlide>
      <SwiperSlide className={`${style.partners__slide}`}>
        <div className={`${style.partners__image}`}>
          <img src={watsons} alt="Лого партнера" />
        </div>
      </SwiperSlide>
      <SwiperSlide className={`${style.partners__slide}`}>
        <div className={`${style.partners__image}`}>
          <img src={chugai} alt="Лого партнера" />
        </div>
      </SwiperSlide>
      <SwiperSlide className={`${style.partners__slide}`}>
        <div className={`${style.partners__image}`}>
          <img src={devoted} alt="Лого партнера" />
        </div>
      </SwiperSlide>
      <SwiperSlide className={`${style.partners__slide}`}>
        <div className={`${style.partners__image}`}>
          <img src={dove} alt="Лого партнера" />
        </div>
      </SwiperSlide>
      <SwiperSlide className={`${style.partners__slide}`}>
        <div className={`${style.partners__image}`}>
          <img src={jj} alt="Лого партнера" />
        </div>
      </SwiperSlide>
      <SwiperSlide className={`${style.partners__slide}`}>
        <div className={`${style.partners__image}`}>
          <img src={oriflame} alt="Лого партнера" />
        </div>
      </SwiperSlide>
      <SwiperSlide className={`${style.partners__slide}`}>
        <div className={`${style.partners__image}`}>
          <img src={rexona} alt="Лого партнера" />
        </div>
      </SwiperSlide>
      <SwiperSlide className={`${style.partners__slide}`}>
        <div className={`${style.partners__image}`}>
          <img src={vhi} alt="Лого партнера" />
        </div>
      </SwiperSlide>
    </Swiper>

    </section>
  )
}

export default Partners