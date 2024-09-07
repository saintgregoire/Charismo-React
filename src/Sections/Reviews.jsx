import React, {useEffect, useState} from 'react'
import ReviewCard from '../Components/ReviewCard.jsx';

import 'swiper/css'
import 'swiper/css/pagination';
import style from './Reviews.module.scss'

import { Swiper, SwiperSlide  } from 'swiper/react'
import { Pagination } from 'swiper/modules'


function Reviews() {

  const [data, setData] = useState([]);
  const [slides, setSlides] = useState(1);

  const updateSlides = () => {
    switch(true){
      case( window.innerWidth > 1919):
        return setSlides(4);
      case( window.innerWidth > 1439):
        return setSlides(3);
      case( window.innerWidth > 767):
        return setSlides(2);
      default:
        return setSlides(1);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('/data/reviews.json');
        const jsonData = await resp.json();
        setData(jsonData);
      } catch (error) {
        console.error('There was a problem with fetch:', error);
      }
    };
  
    fetchData();
  
    updateSlides();
  
    window.addEventListener('resize', updateSlides);
  
    return () => {
      window.removeEventListener('resize', updateSlides);
    };
  }, []);
  

  return (
    <section className={`${style.reviews}`}>
      <div className= 'container'>
        <h2>Честные отзывы</h2>
        <p className={`${style.reviews__par}`}>клиентов, партнёров и профессионалов</p>
        <Swiper id='swiper_reviews'
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={slides}
          pagination={{ clickable: true }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <ReviewCard 
              name={item.name}
              job={item.job}
              title={item.reviewTitle}
              text={item.review}
              stars={item.stars}
              photo={item.photo}
            />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </section>
  )
}

export default Reviews