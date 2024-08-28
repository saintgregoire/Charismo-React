import { useContext, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ModalContext, CartContext } from '../Services/Context.jsx';

import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosClose } from 'react-icons/io';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import {FaCartShopping, FaXTwitter} from "react-icons/fa6";
import {IoCall} from "react-icons/io5"; 

import style from './Header.module.scss';
import logo from '/src/assets/images/logo.png';


function Header() {
  const { setValue } = useContext(ModalContext);
  const { setCartValue } = useContext(CartContext);
  const navMenu = useRef(null);

  const openBurger = () => {
    navMenu.current.classList.add(style.show);
  };

  const closeBurger = () => {
    navMenu.current.classList.remove(style.show);
  };

  const popUpShow = () => {
    setValue(prevValue => !prevValue);
  };

  const cartShow = () => {
    setCartValue(prevValue => !prevValue);
  }

  return (
      <header className={style.header}>
        <div className={`${style.header__container} container`}>
          <Link to='/' className={style.header__logo}>
            <img src={logo} alt="logo" />
          </Link>

          <div onClick={openBurger} className={style.header__burger_menu}>
            <RxHamburgerMenu />
          </div>

          <nav ref={navMenu} className={style.header__nav}>
            <div onClick={closeBurger} className={style.header__close}>
              <IoIosClose />
            </div>

            <ul className={style.header__list}>
              <li>
                <NavLink to='/' onClick={closeBurger}>Главная</NavLink>
              </li>
              <li>
                <NavLink to='/shop' onClick={closeBurger}>Магазин</NavLink>
              </li>
              <li>
                <NavLink to='/blog' onClick={closeBurger}>Блог</NavLink>
              </li>
              <li>
                <NavLink to='/faq' onClick={closeBurger}>Вопросы и ответы</NavLink>
              </li>
              <li>
                <NavLink to='/reviews' onClick={closeBurger}>Отзывы</NavLink>
              </li>
              <li className={style.header__cart}>
                <button type="button" onClick={() => {cartShow(); closeBurger()}}><span>Корзина</span> <FaCartShopping /></button>
              </li>
              <li className={style.header__call}>
                <button type="button" onClick={() => {popUpShow(); closeBurger();}}>Перезвоните мне <span><IoCall /></span></button>
              </li>
            </ul>
            <div className={style.header__social}>
              <a href="https://www.facebook.com/" target='_blank'><FaFacebookF /></a>
              <a href="https://www.linkedin.com/in/maksym-voznichka/" target='_blank'><FaLinkedinIn /></a>
              <a href="https://x.com/?lang=ru" target='_blank'><FaXTwitter /></a>
              <a href="https://web.whatsapp.com/" target='_blank'><FaWhatsapp /></a>
              <a href="https://www.instagram.com/" target='_blank'><FaInstagram /></a>
            </div>
          </nav>
        </div>
      </header>
  );
}

export default Header