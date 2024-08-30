import React from 'react'

import { useLocation } from 'react-router-dom'

import style from './Post.module.scss'

import { RiTimerFill } from "react-icons/ri";


function Post() {

  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const title = query.get('title');
  const img = query.get('img');
  const alt = query.get('alt');
  const text = query.get('text');
  const date = query.get('date');
  const dateTxt = query.get('dateTxt');

  return (
    <main>
      <div className={style.top}>
        <p className='container'>Главная <span>Блог</span><span className={style.top__second}>{title}</span></p>
      </div>
      <article className={`container ${style.post}`}>
        <div className={style.post__img}>
          <img src={img} alt={alt} />
        </div>
        <h2>{title}</h2>
        <time dateTime={date}><RiTimerFill />  {dateTxt}</time>
        <p className={style.post__txt}>{text}</p>
      </article>
    </main>
  )
}

export default Post