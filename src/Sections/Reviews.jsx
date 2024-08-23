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
    if (window.innerWidth > 1919) {
      setSlides(4);
    } else if (window.innerWidth > 1439) {
      setSlides(3);
    } else if (window.innerWidth > 767) {
      setSlides(2);
    } else {
      setSlides(1);
    }
  };

  useEffect(() => {
    fetch('/data/reviews.json')
      .then((resp) => {
        return resp.json();
      })
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error('There was a problem width fetch:', error);
      })

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
        <Swiper
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