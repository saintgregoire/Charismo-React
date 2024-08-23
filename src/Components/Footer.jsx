import React from 'react'
import {Link} from 'react-router-dom'

import style from './Footer.module.scss'

import logo from '../assets/images/logo.png'

import { FaInstagram } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"


function Footer() {
  return (
    <footer className={`${style.footer}`}>
      <section className={`${style.footer__container}`}>
      <Link to='/' className={`${style.footer__logo}`}>
        <img src={logo} alt="logo" />
      </Link>
      <p className={`${style.footer__text}`}>Инновационные решения для восстановления, питания и уходу за волосами головы, бровей и бороды</p>
      <h2 className={`${style.footer__h2}`}>Следите за нами в соц сетях</h2>
      <div className={`${style.footer__social}`}>
        <a href="https://www.facebook.com/" target='_blank' className={`${style.footer__ico}`}>
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/maksym-voznichka/" target='_blank' className={`${style.footer__ico}`}>
          <FaLinkedinIn />
        </a>
        <a href="https://x.com/?lang=ru" target='_blank' className={`${style.footer__ico}`}>
          <FaXTwitter />
        </a>
        <a href="https://web.whatsapp.com/" target='_blank' className={`${style.footer__ico}`}>
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/" target='_blank' className={`${style.footer__ico}`}>
          <FaInstagram />
        </a>
      </div>
      <p className={`${style.footer__copy}`}>Copyright &copy; 2024 VOZNICHKA Maksym</p>
      </section>

      <section className={`${style.footer__list}`}>
        <h2>Страницы</h2>
        <nav>
          <ul>
            <li>
              <Link to='/'>Главная</Link>
            </li>
            <li>
              <Link to='/shop'>Магазин</Link>
            </li>
            <li>
              <Link to='/blog'>Блог</Link>
            </li>
            <li>
              <Link to='/faq'>Вопросы и ответы</Link>
            </li>
            <li>
              <Link to='/reviews'>Отзывы</Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className={`${style.footer__list}`}>
        <h2>Продукты</h2>
        <nav>
          <ul>
            <li>
              <Link to=''>Dekobrow</Link>
            </li>
            <li>
              <Link to=''>DekoHair</Link>
            </li>
            <li>
              <Link to=''>DekoPill</Link>
            </li>
            <li>
              <Link to=''>DekoBeard</Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className={`${style.footer__form}`}>
        <h2>Будьте в курсе всех новостей</h2>
        <form action="">
          <label htmlFor="email"></label>
          <input type="email" id='email' placeholder='Ваш E-mail' required/>
          <button type='submit'>Подписаться</button>
        </form>
      </section>
      
    </footer>
  )
}

export default Footer