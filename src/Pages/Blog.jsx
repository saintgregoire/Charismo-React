import React, {useEffect, useState} from 'react'
import style from './Blog.module.scss'

import Post from '../Components/Post.jsx';


function Blog() {

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const getData = async () => {
      try{
        const resp = await fetch('/data/postsContent.json');
        if(!resp.ok){
          throw new Error('Ошибка получения данных');
        }
        const jsonData = await resp.json();
        setPosts(jsonData);
      } catch (error){
        console.error('Проблема с fetch:', error);
      }
    }

    getData();
  },[])

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main>
      <div className={style.top}>
        <p className='container'>Главная <span>Блог</span></p>
      </div>
      <section className={`container ${style.posts}`}>
        <ul>
          {currentPosts.map((item) => (
            <li key={item.id}>
              <Post 
                img={item.img}
                alt={item.alt}
                category={item.category}
                title={item.title}
                text={item.text}
                date={item.date}
                dateTxt={item.dateTxt}
              />
            </li>
          ))}
        </ul>

        <div className={style.posts__pagination}>
        {[...Array(Math.ceil(posts.length / postsPerPage)).keys()].map((number) => (
          <button key={number} onClick={() => paginate(number + 1)} className={style.posts__btn}>
            {number + 1}
          </button>
        ))}
      </div>
      </section>
    </main>
  )
}

export default Blog