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
      <div className={`${style.footer__container}`}>
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
      </div>
    </footer>
  )
}

export default Footer