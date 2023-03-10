import React, { useRef, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/header/Header";
import "./index.scss";
import block from "./img/mission/block.webp";
import missionFon from "./img/mission/fon.png";
import check from "./img/model/check.svg";
import map from "./img/tours/map.svg";
import line from "./img/tours/line.svg";
import fon from "./img/popular/fon.svg";
import popularImgOne from "./img/popular/imgOne.png";
import pdf from "./img/popular/icon.png";
import decoration from "./img/reviews/decoration.svg";

import vaOne from "./img/reviews/vaOne.jpg";
import vaTwo from "./img/reviews/vaTwo.jpg";

import imgOne from "./img/slider/people/imgOne.webp";
import imgTwo from "./img/slider/people/imgTwo.webp";
import imgThree from "./img/slider/people/imgThree.webp";
import imgFive from "./img/slider/people/imgFive.webp";
import imgSix from "./img/slider/people/imgSix.webp";
import imgEight from "./img/slider/people/imgEight.webp";
import imgTen from "./img/slider/people/imgTen.webp";

import NimgOne from "./img/slider/nature/imgOne.webp";
import NimgTwo from "./img/slider/nature/imgTwo.webp";
import NimgThree from "./img/slider/nature/imgThree.webp";
import NimgFour from "./img/slider/nature/imgFour.webp";
import NimgFive from "./img/slider/nature/imgFive.webp";
import NimgSix from "./img/slider/nature/imgSix.webp";
import NimgSeven from "./img/slider/nature/imgSeven.webp";
import NimgEight from "./img/slider/nature/imgEight.webp";
import NimgNine from "./img/slider/nature/imgNine.webp";
import NimgTen from "./img/slider/nature/imgTen.webp";
import NimgEleven from "./img/slider/nature/imgEleven.webp";
import NimgTwelf from "./img/slider/nature/imgTwelf.webp";

import insta from "./img/photo/insta.svg";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import modelClose from "./img/model/modelClose.svg";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

function App() {
    const form = useRef();
    const { t, i18n } = useTranslation();
    const [missionShow, setMissionShow] = useState(false);
    const [model, setModel] = useState(false);
    const images = [
        imgOne,
        imgTwo,
        imgThree,
        imgFive,
        imgSix,
        imgEight,
        imgTen,
    ];
    const imagesNature = [
        NimgOne,
        NimgTwo,
        NimgThree,
        NimgFour,
        NimgFive,
        NimgSix,
        NimgSeven,
        NimgEight,
        NimgNine,
        NimgTen,
        NimgEleven,
        NimgTwelf,
    ];
    const [send, setSend] = useState(false);
    const [sendSec, setSendSec] = useState(false);
    const [reviewsOne, setReviewsOne] = useState(false);
    const [reviewsTwo, setReviewsTwo] = useState(false);

    if (model) {
        document.querySelector("body").style.overflow = "hidden";
    } else {
        document.querySelector("body").style.overflow = "unset";
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setSend(true);
        emailjs
            .sendForm(
                "service_eyag9rg", //YOUR_SERVICE_ID
                "template_38546ac", // YOUR_TEMPLATE_ID
                form.current,
                "-jbATkprbge7Ao0hh" // YOUR_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    const sendEmailSec = (e) => {
        e.preventDefault();
        setSendSec(true);
        emailjs
            .sendForm(
                "service_eyag9rg", //YOUR_SERVICE_ID
                "template_38546ac", // YOUR_TEMPLATE_ID
                form.current,
                "-jbATkprbge7Ao0hh" // YOUR_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    console.log(i18n.language);

    return (
        <div className="App">
            <div
                onClick={() => setModel(!model)}
                className={model ? "model-wrapp active" : "model-wrapp"}
            ></div>
            <div className={model ? "model active" : "model"}>
                <img
                    onClick={() => setModel(!model)}
                    src={modelClose}
                    alt="modelClose"
                    className="model-close"
                />
                <h2 className="model-title">{t("modelTitle")} </h2>
                <form ref={form} onSubmit={sendEmail}>
                    <label className="model-label">
                        {t("modelNameDescr")}
                        <input
                            type="text"
                            name="user_name"
                            className="model-input"
                            required
                            placeholder={t("modelName")}
                        />
                    </label>
                    <label className="model-label">
                        {t("modelNumDescr")}
                        <input
                            type="number"
                            name="user_email"
                            className="model-input"
                            required
                            placeholder={t("modelNum")}
                        />
                    </label>
                    {send ? (
                        <button className="model-send btn center">
                            <img src={check} alt="check" />
                        </button>
                    ) : (
                        <button className="model-send btn center">
                            {t("modelSend")}
                        </button>
                    )}
                </form>
            </div>

            <div className="wrapper-fon">
                <Header />
                <section className="hero">
                    <h1 className="hero-title">{t("heroTitle")}</h1>
                    <a href="#popular" className="hero-btn btn">
                        {t("heroBtn")}
                    </a>
                </section>
            </div>
            <section id="mission" className="mission">
                <div className="container">
                    <div className="mission-content">
                        <img
                            src={block}
                            alt="imgBlcok"
                            className="mission-block"
                        />
                        <div className="mission-wrapper">
                            <img
                                src={missionFon}
                                alt="fon"
                                className="mission-fon"
                            />
                            <h2 className="mission-title">
                                {t("missionTitle")}
                            </h2>
                            {missionShow ? (
                                <p className="mission-descr">
                                    {t("missionDescrTrue")}
                                    <span
                                        onClick={() =>
                                            setMissionShow(!missionShow)
                                        }
                                    >
                                        {" "}
                                        {t("hide")}
                                    </span>
                                </p>
                            ) : (
                                <p className="mission-descr">
                                    {t("missionDescrFalse")}
                                    <span
                                        onClick={() =>
                                            setMissionShow(!missionShow)
                                        }
                                    >
                                        {" "}
                                        {t("missionBtnFalse")}
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <section id="video" className="video">
                <iframe
                    className="video-video"
                    width="auto"
                    height="auto"
                    src="https://www.youtube.com/embed/fEuw4Hl04hU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                ></iframe>
            </section>
            <section className="tours">
                <div className="container">
                    <div className="tours-content">
                        <img src={map} alt="mapKG" className="tours-map" />
                        <span className="tours-name">{t("toursName")}</span>
                        <h2 className="tours-title">{t("toursTitle")}</h2>
                        <div className="tours-wrapper">
                            <div className="tours-block">
                                <span className="tours-number">1</span>
                                <img
                                    src={line}
                                    alt="line"
                                    className="tours-line"
                                />
                                <p className="tours-descr">
                                    {t("toursDescrOne")}
                                </p>
                            </div>
                            <div className="tours-block">
                                <span className="tours-number">2</span>
                                <img
                                    src={line}
                                    alt="line"
                                    className="tours-line"
                                />
                                <p className="tours-descr">
                                    {t("toursDescrTwo")}
                                </p>
                            </div>
                            <div className="tours-block">
                                <span className="tours-number">3</span>
                                <img
                                    src={line}
                                    alt="line"
                                    className="tours-line"
                                />
                                <p className="tours-descr">
                                    {t("toursDescrThree")}
                                </p>
                            </div>
                            <div className="tours-block">
                                <span className="tours-number">4</span>
                                <img
                                    src={line}
                                    alt="line"
                                    className="tours-line"
                                />
                                <p className="tours-descr">
                                    {t("toursDescrFour")}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="popular" className="popular">
                <img src={fon} alt="fon" className="popular-fon" />
                <div className="container">
                    <div className="popular-content">
                        <div className="popular-head">
                            <span className="popular-name">
                                {t("popularName")}
                            </span>
                            <h2 className="popular-title title">
                                {t("popularTitle")}
                            </h2>
                            <p className="popular-text description">
                                {t("popularText")}
                            </p>
                        </div>
                        <a
                            href="https://www.instagram.com/mountain.view.kg/"
                            target="_blank"
                            className="popular-btn btn"
                        >
                            {t("popularbtn")}
                        </a>
                    </div>
                    <div className="popular-wrapper">
                        <div className="popular-block">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Issyk-Kulmeer.jpg"
                                alt="img"
                                className="popular-bg"
                            />
                            <div className="popular-info">
                                <span className="popular-time">
                                    {t("popularTimeOne")}
                                </span>
                                <h4 className="popular-subtitle">
                                    {t("popularSubtitleOne")}
                                </h4>
                                {i18n.language === "English" ? (
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://docs.google.com/document/d/1TegYoTbNjmqRHtrv_BntgIzWQyXX-Adr/edit?usp=sharing&ouid=102442844624283755627&rtpof=true&sd=true"
                                        className="popular-som"
                                    >
                                        <img
                                            src={pdf}
                                            alt="pdf"
                                            className="popular-pdf"
                                        />
                                        {t("view")}
                                    </a>
                                ) : (
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://docs.google.com/document/d/1ep7jQmejgXiYJJlDogyP9bJSHBjidRJN/edit?usp=sharing&ouid=102442844624283755627&rtpof=true&sd=true"
                                        className="popular-som"
                                    >
                                        <img
                                            src={pdf}
                                            alt="pdf"
                                            className="popular-pdf"
                                        />
                                        {t("view")}
                                    </a>
                                )}

                                <button
                                    onClick={() => setModel(!model)}
                                    className="popular-view btn"
                                >
                                    {t("popularView")}
                                </button>
                            </div>
                        </div>
                        <div className="popular-block">
                            <img
                                src={NimgSix}
                                alt="img"
                                className="popular-bg"
                            />
                            <div className="popular-info">
                                <span className="popular-time">
                                    {t("popularTimeTwo")}
                                </span>
                                <h4 className="popular-subtitle">
                                    {t("popularSubtitleTwo")}
                                </h4>

                                {i18n.language === "English" ? (
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://docs.google.com/document/d/1e9ySfTGljxTufui9YgZ0_BcAMljpLPna/edit?usp=sharing&ouid=102442844624283755627&rtpof=true&sd=true"
                                        className="popular-som"
                                    >
                                        <img
                                            src={pdf}
                                            alt="pdf"
                                            className="popular-pdf"
                                        />
                                        {t("view")}
                                    </a>
                                ) : (
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://docs.google.com/document/d/1iiiVa4DohYrLcqqucKB2kMsJmDPMlUSL/edit?usp=sharing&ouid=102442844624283755627&rtpof=true&sd=true"
                                        className="popular-som"
                                    >
                                        <img
                                            src={pdf}
                                            alt="pdf"
                                            className="popular-pdf"
                                        />
                                        {t("view")}
                                    </a>
                                )}

                                <button
                                    onClick={() => setModel(!model)}
                                    className="popular-view btn"
                                >
                                    {t("popularView")}
                                </button>
                            </div>
                        </div>
                        <div className="popular-block">
                            <img
                                src="https://i.pinimg.com/originals/e0/51/84/e05184dffb69817245cb78916edbf252.png"
                                alt="img"
                                className="popular-bg"
                            />
                            <div className="popular-info">
                                <span className="popular-time">
                                    {t("popularTimeThree")}
                                </span>
                                <h4 className="popular-subtitle">
                                    {t("popularSubtitleThree")}
                                </h4>
                                {i18n.language === "English" ? (
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://docs.google.com/document/d/1smYXGAKAXRYcvyXF_C0AZnc8J9OY01si/edit?usp=sharing&ouid=102442844624283755627&rtpof=true&sd=true"
                                        className="popular-som"
                                    >
                                        <img
                                            src={pdf}
                                            alt="pdf"
                                            className="popular-pdf"
                                        />
                                        {t("view")}
                                    </a>
                                ) : (
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://docs.google.com/document/d/1BfzVRcxq7vcGjijxn8bQ6yEbjrDykqlw/edit?usp=sharing&ouid=102442844624283755627&rtpof=true&sd=true"
                                        className="popular-som"
                                    >
                                        <img
                                            src={pdf}
                                            alt="pdf"
                                            className="popular-pdf"
                                        />
                                        {t("view")}
                                    </a>
                                )}
                                <button
                                    onClick={() => setModel(!model)}
                                    className="popular-view btn"
                                >
                                    {t("popularView")}
                                </button>
                            </div>
                        </div>
                        <div className="popular-block">
                            <img
                                src="https://www.youlinmagazine.com/articles/heavenly-lake-in-mid-tian-shan-mountains.jpg"
                                alt="img"
                                className="popular-bg"
                            />
                            <div className="popular-info">
                                <span className="popular-time">
                                    {t("popularTimeFour")}
                                </span>
                                <h4 className="popular-subtitle">
                                    {t("popularSubtitleFour")}
                                </h4>
                                {i18n.language === "English" ? (
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://docs.google.com/document/d/1Ei_HD47-3SYX6E1npTIhHcrxiPSHETFe/edit?usp=sharing&ouid=102442844624283755627&rtpof=true&sd=true"
                                        className="popular-som"
                                    >
                                        <img
                                            src={pdf}
                                            alt="pdf"
                                            className="popular-pdf"
                                        />
                                        {t("view")}
                                    </a>
                                ) : (
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://docs.google.com/document/d/1v1Lby8DgCGeb8tgDxQchnUmvOUbOehTl/edit?usp=sharing&ouid=102442844624283755627&rtpof=true&sd=true"
                                        className="popular-som"
                                    >
                                        <img
                                            src={pdf}
                                            alt="pdf"
                                            className="popular-pdf"
                                        />
                                        {t("view")}
                                    </a>
                                )}

                                <button
                                    onClick={() => setModel(!model)}
                                    className="popular-view btn"
                                >
                                    {t("popularView")}
                                </button>
                            </div>
                        </div>
                    </div>
                    <button className="popular-btn-another btn">
                        {t("popularbtn")}
                    </button>
                </div>
            </section>
            <section id="photo" className="photo">
                <div className="photo-wrapper container">
                    <div className="photo-haad">
                        <span className="photo-name">{t("photoName")}</span>
                        <h2 className="photo-title title">{t("photoTitle")}</h2>
                        <p className="photo-text description">
                            {t("photoText")}
                        </p>
                    </div>
                    <a
                        href="https://www.instagram.com/mountain.view.kg/"
                        target="_blank"
                        className="photo-btn btn"
                        rel="noreferrer"
                    >
                        {t("photoBtn")} <img src={insta} alt="instagram" />
                    </a>
                </div>
                <div className="photo-content">
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            reverseDirection: true,
                        }}
                        modules={[Autoplay]}
                    >
                        {images.map((item) => (
                            <SwiperSlide>
                                <img src={item} key={item} alt="img" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {imagesNature.map((item) => (
                            <SwiperSlide>
                                <img src={item} key={item} alt="img" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <a
                    href="https://www.instagram.com/mountain.view.kg/"
                    target="_blank"
                    className="photo-btn-another btn"
                    rel="noreferrer"
                >
                    {t("photoBtn")} <img src={insta} alt="instagram" />
                </a>
            </section>
            <section id="reviews" className="reviews">
                <img
                    src={decoration}
                    alt="decoration"
                    className="reviews-decoration"
                />
                <div className="container">
                    <div className="reviews-content">
                        <h2 className="reviews-title title">
                            {t("reviewsTitle")}
                        </h2>
                        <div className="reviews-wrapper">
                            <div className="reviews-block">
                                <div className="reviews-ava-wrapper">
                                    <img
                                        src={vaOne}
                                        alt="avatar"
                                        className="reviews-ava"
                                    />
                                </div>
                                <div className="reviews-info">
                                    <div className="reviews-more">
                                        <span className="reviews-subtitle">
                                            Begay A.
                                        </span>
                                    </div>
                                    {reviewsOne ? (
                                        <p className="reviews-descr">
                                            {t("reviewsDescOneFull")}{" "}
                                            <span
                                                onClick={() =>
                                                    setReviewsOne(!reviewsOne)
                                                }
                                            >
                                                {t("hide")}
                                            </span>
                                        </p>
                                    ) : (
                                        <p className="reviews-descr">
                                            {t("reviewsDescOne")}{" "}
                                            <span
                                                onClick={() =>
                                                    setReviewsOne(!reviewsOne)
                                                }
                                            >
                                                {t("reviewsMore")}
                                            </span>
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="reviews-block">
                                <div className="reviews-ava-wrapper">
                                    <img
                                        src={vaTwo}
                                        alt="avatar"
                                        className="reviews-ava"
                                    />
                                </div>

                                <div className="reviews-info">
                                    <div className="reviews-more">
                                        <span className="reviews-subtitle">
                                            Zhanat M.
                                        </span>
                                    </div>
                                    {reviewsTwo ? (
                                        <p className="reviews-descr">
                                            {t("reviewsDescTwoFull")}{" "}
                                            <span
                                                onClick={() =>
                                                    setReviewsTwo(!reviewsTwo)
                                                }
                                            >
                                                {t("hide")}
                                            </span>
                                        </p>
                                    ) : (
                                        <p className="reviews-descr">
                                            {t("reviewsDescTwo")}{" "}
                                            <span
                                                onClick={() =>
                                                    setReviewsTwo(!reviewsTwo)
                                                }
                                            >
                                                {t("reviewsMore")}
                                            </span>
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="help">
                <div className="container">
                    <div className="help-unskil">
                        <div className="help-content">
                            <h2 className="help-title">{t("helpTitle")}</h2>
                            <p className="help-text">{t("helpText")}</p>
                            <form ref={form} onSubmit={sendEmailSec}>
                                <div className="help-wrapper">
                                    <input
                                        type="text"
                                        className="help-input"
                                        required
                                        placeholder={t("helpName")}
                                    />
                                    <input
                                        type="number"
                                        className="help-input help-input-num"
                                        required
                                        placeholder={t("helpPhone")}
                                    />
                                </div>
                                {sendSec ? (
                                    <button className="help-send center">
                                        <img src={check} alt="check" />
                                    </button>
                                ) : (
                                    <button className="help-send center btn">
                                        {t("helpSend")}
                                    </button>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default App;
