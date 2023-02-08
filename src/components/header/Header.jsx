import React from 'react'
import logo from '../../img/header/logo.svg'
import logoSecond from '../../img/header/logoSecond.svg'
import instagram from '../../img/header/instagram.svg'
import hz from '../../img/header/hz.svg'
import youtube from '../../img/header/youtube.svg'
import lang from '../../img/header/lang.svg'
import russian from '../../img/header/russian.svg'
import english from '../../img/header/english.svg'
import globe from '../../img/header/globe.svg'
import { useState } from 'react'
import { useTranslation } from "react-i18next";
import Burger from './Burger'

export const Header = () => {
    const [burgerLang, setBurgerLang] = useState(false)
    const [activeLang, setActiveLang] = useState("English")
    const [allLang, setAllLang] = useState([{
        lang:"Русский",
        flag: russian
    }, {
        lang:"English",
        flag: english
    }])

    const { t, i18n } = useTranslation();

    const chengeLang = (item) => {
        setActiveLang(item)
    }

    const changeLanguage = (language) => {
        language === "Русский" ?  i18n.changeLanguage("Russian") : i18n.changeLanguage(language)
    }

  return (
        <header className='header'>
            <div className="container">
                <div className="header-content">
                    <Burger />
                    <img src={logo} alt="logo" className="header-logo" />
                    <img src={logoSecond} alt="logo" className="header-logo-sec" />
                    <ul className="header-list">
                        <li className="header-item"><a href="#mission" className="header-list-link">{t("listOne")}</a></li>
                        <li className="header-item"><a href="#popular" className="header-list-link">{t("listTwo")}</a></li>
                        <li className="header-item"><a href="#blog" className="header-list-link">{t("listThree")}</a></li>
                        <li className="header-item"><a href="#photo" className="header-list-link">{t("listFour")}</a></li>
                        <li className="header-item"><a href="#reviews" className="header-list-link">{t("listFive")}</a></li>
                    </ul>
                    <div className="header-menu">
                        <div onClick={() => setBurgerLang(!burgerLang)} className={burgerLang ? 'header-language active' : 'header-language'}>
                            <div className="header-language-active">{activeLang} <img src={lang} alt="lang" className='header-language-icon' /></div>
                            <img src={globe} alt={globe} className="header-globe" />
                            <ul className="header-language-list">
                                {
                                    allLang.map((item) => (
                                        <li  onClick={() => {setBurgerLang(!burgerLang); chengeLang(item.lang); changeLanguage(item.lang)} } className="header-language-item"><img src={item.flag} alt={item.flag} /> {item.lang}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <ul className="header-cocial">
                            <li className="header-cocial-item"><a href="https://www.instagram.com/mountain.view.kg/" target="_blank" className="header-cocial-link"><img src={instagram} alt="instagram" /></a></li>
                            <li className="header-cocial-item"><a href="https://www.twitch.tv/" target="_blank" className="header-cocial-link"><img src={hz} alt="hz" /></a></li>
                            <li className="header-cocial-item"><a href="https://www.youtube.com/" target="_blank" className="header-cocial-link"><img src={youtube} alt="youtube" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
  )
}
