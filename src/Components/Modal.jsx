import React from 'react'
import style from './Modal.module.scss'

import { IoIosClose } from 'react-icons/io';


function Modal() {

  return (
    <div className={`${style.modal}`}>
      <div className={`${style.modal__window}`}>
        <div className={`${style.modal__close}`}>
          <IoIosClose />
        </div>
        <p className={`${style.modal__welcome}`}>Добро пожаловать в семью</p>
        <h2>Напишите нам</h2>
        <p className={`${style.modal__par}`}>Делаем бизнес без обмана и пустых обещаний, помогая людям быть красивее и немного счастливее. Если вы из нашей сферы и разделяете наши ценности — заполните форму ниже, и мы найдем точки соприкосновения:</p>
        <form action="">
          <fieldset>
            <label htmlFor="contactName">Имя</label>
            <input type="text" id='contactName' placeholder='Ваше имя' />
          </fieldset>
          <fieldset>
            <label htmlFor="contactPhone">телефон</label>
            <input type="tel" id="contactPhone" placeholder='Телефон' />
          </fieldset>
          <fieldset>
            <label htmlFor="contactEmail">E-mail</label>
            <input type="email" id="contactEmail" placeholder='E-mail' />
          </fieldset>
          <fieldset>
            <label htmlFor="contactMessage">Сообщение</label>
            <textarea name="text" id="contactMessage" placeholder='Сообщение' rows='4'></textarea>
          </fieldset>
          <button type='submit'>Отправить</button>
        </form>
      </div>
    </div>
  )
}

export default Modal