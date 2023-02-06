import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import instagram from '../../img/burger/instagram.svg'
import hz from '../../img/burger/hz.svg'
import youtube from '../../img/burger/youtube.svg'
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
                <li className="burger-item">{t("listOne")}</li>
                <li className="burger-item">{t("listTwo")}</li>
                <li className="burger-item">{t("listThree")}</li>
                <li className="burger-item">{t("listFour")}</li>
                <li className="burger-item">{t("listFive")}</li>
                <li className="burger-item burger-item-another">
                <a href="https://www.instagram.com/" target="_blank" className="burger-cocial-link"><img src={instagram} alt="instagram" /></a>
                <a href="https://www.twitch.tv/" target="_blank" className="burger-cocial-link"><img src={hz} alt="hz" /></a>
                <a href="https://www.youtube.com/" target="_blank" className="burger-cocial-link"><img src={youtube} alt="youtube" /></a>
                </li>
            </ul>
            <img src={bg} alt="bg" className='burger-bg' />
        </div>
    </div>
  )
}

export default Burger