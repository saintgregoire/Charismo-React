import React, {useRef, useEffect} from 'react'

import style from './Post.module.scss';

import { RiTimerFill } from "react-icons/ri";

function Post({img, alt, category, title, text, date, dateTxt}) {

  const desc = useRef(null);

  useEffect(() => {
    const originalText = desc.current.innerText;
    const maxLength = 130;
    if(originalText.length > maxLength){
      desc.current.innerText = originalText.slice(0, maxLength) + '...'
    }
  },[text])
  
  return (
    <article className={style.post}>
      <div className={style.post__img}>
        <img src={img} alt={alt} />
      </div>
      <div className={style.post__second}>
        <p className={style.post__category}>{category}</p>
        <h2>{title}</h2>
        <p ref={desc} className={style.post__text}>{text}</p>
        <time dateTime={date}><RiTimerFill /> {dateTxt}</time>
      </div>
    </article>
  )
}

export default Post