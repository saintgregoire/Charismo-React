import React, { useRef } from 'react'
import {Link} from 'react-router-dom'

import style from './Header.module.scss'

import logo from '../assets/images/logo.png'

import { FaCartShopping } from "react-icons/fa6"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoIosClose } from "react-icons/io"
import { IoCall } from "react-icons/io5"
import { FaInstagram } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"


function Header() {

  const navMenu = useRef(null);

  const openBurger = () => {
    navMenu.current.classList.add(style.show);
  };

  const closeBurger = () => {
    navMenu.current.classList.remove(style.show);
  }

  return (
      <header className= {style.header}>
        <div className={`${style.header__container} container`}>
          <div className={style.header__logo}>
            <img src={logo} alt="logo"/>
          </div>

          <div onClick={openBurger} className={style.header__burger_menu}>
            <RxHamburgerMenu />
          </div>

          <nav ref={navMenu} className={`${style.header__nav}`}>

            <div onClick={closeBurger} className={style.header__close}>
              <IoIosClose />
            </div>

            <ul className={`${style.header__list}`}>
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
              <li className={`${style.header__cart}`}>
                <button type={"button"}>Корзина <FaCartShopping/></button>
              </li>
              <li className={`${style.header__call}`}>
                <button type={"button"}>Перезвоните мне <IoCall /></button>
              </li>
            </ul>
            <div className={`${style.header__social}`}>
              <a href="https://www.facebook.com/" target='_blank'><FaFacebookF /></a>
              <a href="https://www.linkedin.com/in/maksym-voznichka/" target='_blank'><FaLinkedinIn /></a>
              <a href="https://x.com/?lang=ru" target='_blank'><FaXTwitter /></a>
              <a href="https://web.whatsapp.com/" target='_blank'><FaWhatsapp /></a>
              <a href="https://www.instagram.com/" target='_blank'><FaInstagram /></a>
            </div>
          </nav>

        </div>
      </header>
  )
}

export default Header