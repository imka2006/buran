import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import instagram from '../../img/burger/instagram.svg'
import whatsapp from '../../img/burger/whatsapp.svg'
import mail from '../../img/burger/mail.svg'
import bg from '../../img/burger/bg.png'

const Burger = () => {
    const { t, i18n } = useTranslation();
    const [burger, setBurger] = useState(false)

  return (
    <div className='burger'>
        <div className={burger ? 'burger-menu active' : "burger-menu"} onClick={() => setBurger(!burger)}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
        </div>
        <div className={burger ? 'burger-wrapper active' : "burger-wrapper"} >
            <ul className="burger-list">
                <li className="burger-item"><a href="#mission" className="burger-link">{t("listOne")}</a></li>
                <li className="burger-item"><a href="#popular" className="burger-link">{t("listTwo")}</a></li>
                <li className="burger-item"><a href="#photo" className="burger-link">{t("listFour")}</a></li>
                <li className="burger-item"><a href="#reviews" className="burger-link">{t("listFive")}</a></li>
                <li className="burger-item burger-item-another">
                <a href="https://www.instagram.com/mountain.view.kg/" target="_blank" className="burger-cocial-link"><img src={instagram} alt="instagram" /></a>
                <a href="https://api.whatsapp.com/send?phone=996501008988" target="_blank" className="burger-cocial-link"><img src={whatsapp} alt="whatsapp" /></a>
                <a href="mailto:mview.office@gmail.com" target="_blank" className="burger-cocial-link"><img src={mail} alt="mail" /></a>
                </li>
            </ul>
            <img src={bg} alt="bg" className='burger-bg' />
        </div>
    </div>
  )
}

export default Burger