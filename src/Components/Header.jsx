import React, { useRef, useState, useContext } from 'react'
import { ModalContext } from './ModalContext.jsx'
import {NavLink} from 'react-router-dom'

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

  const {setValue} = useContext(ModalContext);
  const navMenu = useRef(null);
  const [popUp, setPopUp] = useState(false);

  const openBurger = () => {
    navMenu.current.classList.add(style.show);
  };

  const closeBurger = () => {
    navMenu.current.classList.remove(style.show);
  }

  const popUpShow = () => {
      setPopUp(!popUp)
      setValue(popUp);
    };

  return (
      <header className= {style.header}>
        <div className={`${style.header__container} container`}>
          <NavLink to='/' className={style.header__logo}>
            <img src={logo} alt="logo"/>
          </NavLink>

          <div onClick={openBurger} className={style.header__burger_menu}>
            <RxHamburgerMenu />
          </div>

          <nav ref={navMenu} className={`${style.header__nav}`}>

            <div onClick={closeBurger} className={style.header__close}>
              <IoIosClose />
            </div>

            <ul className={`${style.header__list}`}>
              <li>
                <NavLink to='/'>Главная</NavLink>
              </li>
              <li>
                <NavLink to='/shop'>Магазин</NavLink>
              </li>
              <li>
                <NavLink to='/blog'>Блог</NavLink>
              </li>
              <li>
                <NavLink to='/faq'>Вопросы и ответы</NavLink>
              </li>
              <li>
                <NavLink to='/reviews'>Отзывы</NavLink>
              </li>
              <li className={`${style.header__cart}`}>
                <button type={"button"}><span>Корзина</span> <FaCartShopping/></button>
              </li>
              <li className={`${style.header__call}`}>
                <button type={"button"} onClick={popUpShow}>Перезвоните мне <span><IoCall /></span></button>
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