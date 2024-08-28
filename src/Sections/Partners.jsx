import React, {useState, useEffect} from 'react'

import 'swiper/css';
import 'swiper/css/autoplay';
import style from './Partners.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import Partner from '../Components/Partner';

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

  const partnersImgs = [amway, bio, watsons, chugai, devoted, dove, jj, oriflame, rexona, vhi];

  const [slides, setSlides] = useState(3);
  const [space, setSpace] = useState(50);

  const updateSwiperValues = () => {
    if(window.innerWidth > 1919){
      setSlides(6);
    }
    else if(window.innerWidth > 1439){
      setSlides(5);
      setSpace(80);
    }
    else if(window.innerWidth > 767){
      setSlides(4);
    }
    else{
      setSlides(3);
      setSpace(50);
    }
  }

  useEffect(() => {

    updateSwiperValues();
    window.addEventListener('resize', updateSwiperValues);
    return () => {
      window.removeEventListener('resize', updateSwiperValues);
    };
  }, [])


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

      {partnersImgs.map((item, index) => (
        <SwiperSlide key={index} className={`${style.partners__slide}`}>
          <Partner img={item} />
        </SwiperSlide>
      ))}
      
    </Swiper>

    </section>
  )
}

export default Partners