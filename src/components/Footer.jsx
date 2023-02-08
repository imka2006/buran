import React from "react";
import logo from "../img/footer/logo.svg";
import instagram from "../img/footer/instagram.svg";
import hz from "../img/footer/hz.svg";
import youtube from "../img/footer/youtube.svg";
import fon from "../img/footer/fon.svg";
import { useTranslation } from "react-i18next";

export const Footer = () => {

    const { t, i18n } = useTranslation();


    return (
        <footer className="footer">
          <img src={fon} alt="fon" className="footer-fon" />
            <div className="container">
                <div className="footer-content">
                    <img src={logo} alt="logo" className="footer-logo" />
                    <ul className="footer-list">
                        <li className="footer-item"><a href="#mission" className="footer-link">{t("listOne")}</a></li>
                        <li className="footer-item"><a href="#popular" className="footer-link">{t("listTwo")}</a></li>
                        <li className="footer-item"><a href="#blog" className="footer-link">{t("listThree")} </a></li>
                        <li className="footer-item"><a href="#photo" className="footer-link">{t("listFour")}</a></li>
                        <li className="footer-item"><a href="#reviews" className="footer-link">{t("listFive")}</a></li>
                    </ul>
                    <ul className="footer-another-info">
                        <li className="footer-another-item"><h2 className="footer-mini-title">{t("footerAnotherTitle")}</h2></li>
                        <li className="footer-another-item"><a href="tell:+996700000000" className="footer-another-tell">+996 700 00 00 00</a></li>
                        <li className="footer-another-item"><a href="tell:+996700010101" className="footer-another-tell">+996 700 01 01 01</a></li>
                        <li className="footer-another-item">{t("footerAnotherText")}</li>
                    </ul>
                    <ul className="footer-info-wrapper">
                      <li className="footer-info">{t("footerAddress")}</li>
                      <li className="footer-info"><a href="tel:+996700000000" className="footer-contact">+996 700 00 00 00</a></li>
                      <li className="footer-info"><a href="mailto:mountainview@gmail.com" className="footer-contact">mountainview@gmail.com</a></li>
                    </ul>
                    <div className="footer-cocial-wrapper">
                      <p className="footer-text">{t("footerText")}</p>
                      <ul className="footer-cocial">
                            <li className="footer-cocial-item"><a href="https://www.instagram.com/mountain.view.kg/" target="_blank" className="footer-cocial-link"><img src={instagram} alt="instagram" /></a></li>
                            <li className="footer-cocial-item"><a href="https://www.twitch.tv/" target="_blank" className="footer-cocial-link"><img src={hz} alt="hz" /></a></li>
                            <li className="footer-cocial-item"><a href="https://www.youtube.com/" target="_blank" className="footer-cocial-link"><img src={youtube} alt="youtube" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};
