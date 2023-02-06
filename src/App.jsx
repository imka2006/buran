import React, { useRef, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/header/Header";
import "./index.scss";
import block from "./img/mission/block.png";
import check from "./img/model/check.svg";
import map from "./img/tours/map.svg";
import line from "./img/tours/line.svg";
import fon from "./img/popular/fon.svg";
import diagram from "./img/popular/diagram.svg";
import bg from "./img/popular/bg.svg";
import photo from "./img/blog/photo.png";
import ava from "./img/reviews/ava.svg";
import decoration from "./img/reviews/decoration.svg";
import imgOne from "./img/photo/imgOne.png";
import imgTwo from "./img/photo/imgTwo.png";
import imgThree from "./img/photo/imgThree.png";
import imgFour from "./img/photo/imgFour.png";
import imgFive from "./img/photo/imgFive.png";
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
        imgFour,
        imgFive,
        imgOne,
        imgTwo,
        imgThree,
        imgFour,
        imgFive,
    ];
    const imagesRew = [
        imgFive,
        imgFour,
        imgThree,
        imgTwo,
        imgOne,
        imgFive,
        imgFour,
        imgThree,
        imgTwo,
        imgOne,
    ];
    const [send, setSend] = useState(false);
    const [sendSec, setSendSec] = useState(false);
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
                "template_fazdwlj", // YOUR_TEMPLATE_ID
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
                "template_fazdwlj", // YOUR_TEMPLATE_ID
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
                    <a href="#" className="hero-btn btn">
                        {t("heroBtn")}
                    </a>
                </section>
            </div>
            <section className="mission">
                <div className="container">
                    <div className="mission-content">
                        <img
                            src={block}
                            alt="imgBlcok"
                            className="mission-block"
                        />
                        <div className="mission-another">
                            <div className="mission-wrapper">
                                <span className="mission-name">
                                    OUR MISSION
                                </span>
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
                </div>
            </section>
            <section className="video">
                <iframe
                    className="video-video"
                    width="auto"
                    height="auto"
                    src="https://www.youtube.com/embed/z9LV1sf2eus"
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
            <section className="popular">
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
                        <button className="popular-btn btn">
                            {t("popularbtn")}
                        </button>
                    </div>
                    <div className="popular-wrapper">
                        <div className="popular-block">
                            <img src={bg} alt="img" className="popular-bg" />
                            <div className="popular-info">
                                <span className="popular-time">
                                    {t("popularTime")}
                                </span>
                                <h4 className="popular-subtitle">
                                    {t("popularSubtitle")}
                                </h4>
                                <div className="popular-difficulty">
                                    <img
                                        src={diagram}
                                        alt="diagram"
                                        className="popular-diagram"
                                    />
                                    {t("popularDifficulty")}
                                </div>
                                <p className="popular-descr">
                                    {t("popularDescr")}
                                </p>
                                <div className="popular-price">
                                    <span className="popular-dollar">500$</span>
                                    <span className="popular-som">
                                        40000{t("popularSom")}
                                    </span>
                                </div>
                                <button
                                    onClick={() => setModel(!model)}
                                    className="popular-view btn"
                                >
                                    {t("popularView")}
                                </button>
                            </div>
                        </div>
                        <div className="popular-block">
                            <img src={bg} alt="img" className="popular-bg" />
                            <div className="popular-info">
                                <span className="popular-time">
                                    {t("popularTime")}
                                </span>
                                <h4 className="popular-subtitle">
                                    {t("popularSubtitle")}
                                </h4>
                                <div className="popular-difficulty">
                                    <img
                                        src={diagram}
                                        alt="diagram"
                                        className="popular-diagram"
                                    />
                                    {t("popularDifficulty")}
                                </div>
                                <p className="popular-descr">
                                    {t("popularDescr")}
                                </p>
                                <div className="popular-price">
                                    <span className="popular-dollar">500$</span>
                                    <span className="popular-som">
                                        40000{t("popularSom")}
                                    </span>
                                </div>
                                <button
                                    onClick={() => setModel(!model)}
                                    className="popular-view btn"
                                >
                                    {t("popularView")}
                                </button>
                            </div>
                        </div>
                        <div className="popular-block">
                            <img src={bg} alt="img" className="popular-bg" />
                            <div className="popular-info">
                                <span className="popular-time">
                                    {t("popularTime")}
                                </span>
                                <h4 className="popular-subtitle">
                                    {t("popularSubtitle")}
                                </h4>
                                <div className="popular-difficulty">
                                    <img
                                        src={diagram}
                                        alt="diagram"
                                        className="popular-diagram"
                                    />
                                    {t("popularDifficulty")}
                                </div>
                                <p className="popular-descr">
                                    {t("popularDescr")}
                                </p>
                                <div className="popular-price">
                                    <span className="popular-dollar">500$</span>
                                    <span className="popular-som">
                                        40000{t("popularSom")}
                                    </span>
                                </div>
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
            <section className="blog">
                <div className="container">
                    <div className="blog-content">
                        <div className="blog-head">
                            <span className="blog-name">{t("blogName")}</span>
                            <div className="blog-title title">
                                {t("blogTitle")}
                            </div>
                        </div>
                        <button className="blog-btn btn">{t("blogBtn")}</button>
                    </div>
                    <div className="blog-wrapper">
                        <div className="blog-block">
                            <img
                                src={photo}
                                alt="photo"
                                className="block-photo"
                            />
                            <div className="blog-info">
                                <h2 className="blog-subtitle">
                                    {t("blogSubtitle")}
                                </h2>
                                <span className="blog-time">
                                    {t("blogTime")}
                                </span>
                                <p className="blog-descr">{t("blogDescr")}</p>
                                <button className="blog-view">
                                    {t("blogView")}
                                </button>
                            </div>
                        </div>
                        <div className="blog-block">
                            <img
                                src={photo}
                                alt="photo"
                                className="block-photo"
                            />
                            <div className="blog-info">
                                <h2 className="blog-subtitle">
                                    {t("blogSubtitle")}
                                </h2>
                                <span className="blog-time">
                                    {t("blogTime")}
                                </span>
                                <p className="blog-descr">{t("blogDescr")}</p>
                                <button className="blog-view">
                                    {t("blogView")}
                                </button>
                            </div>
                        </div>
                        <div className="blog-block">
                            <img
                                src={photo}
                                alt="photo"
                                className="block-photo"
                            />
                            <div className="blog-info">
                                <h2 className="blog-subtitle">
                                    {t("blogSubtitle")}
                                </h2>
                                <span className="blog-time">
                                    {t("blogTime")}
                                </span>
                                <p className="blog-descr">{t("blogDescr")}</p>
                                <button className="blog-view">
                                    {t("blogView")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="photo">
                <div className="photo-wrapper container">
                    <div className="photo-haad">
                        <span className="photo-name">{t("photoName")}</span>
                        <h2 className="photo-title title">{t("photoTitle")}</h2>
                        <p className="photo-text description">
                            {t("photoText")}
                        </p>
                    </div>
                    <a
                        href="https://www.instagram.com/kettik.kg/"
                        target="_blank"
                        className="photo-btn btn"
                    >
                        {t("photoBtn")} <img src={insta} alt="instagram" />
                    </a>
                </div>
                <div className="photo-content">
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        autoplay={{
                            delay: 4000,
                            reverseDirection: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {images.map((item) => (
                            <SwiperSlide>
                                <img src={item} alt="img" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={30}
                        autoplay={{
                            delay: 4000,
                            reverseDirection: true,
                        }}
                        modules={[Autoplay]}
                    >
                        {imagesRew.map((item) => (
                            <SwiperSlide>
                                <img src={item} alt="img" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <a
                    href="https://www.instagram.com/kettik.kg/"
                    target="_blank"
                    className="photo-btn-another btn"
                >
                    {t("photoBtn")} <img src={insta} alt="instagram" />
                </a>
            </section>
            <section className="reviews">
                <img
                    src={decoration}
                    alt="decoration"
                    className="reviews-decoration"
                />
                <div className="container">
                    <div className="reviews-content">
                        <span className="reviews-name">{t("reviewsName")}</span>
                        <h2 className="reviews-title title">
                            {t("reviewsTitle")}
                        </h2>
                        <p className="reviews-text description">
                            {t("reviewsText")}
                        </p>
                        <div className="reviews-wrapper">
                            <div className="reviews-block">
                                <img
                                    src={ava}
                                    alt="avatar"
                                    className="reviews-ava"
                                />
                                <div className="reviews-info">
                                    <div className="reviews-more">
                                        <span className="reviews-subtitle">
                                            Sophia A.
                                        </span>
                                        <span className="reviews-time">
                                            {t("reviewsCountry")}
                                        </span>
                                    </div>
                                    <p className="reviews-descr">
                                        {t("reviewsDesccr")}{" "}
                                        <span>{t("reviewsMore")}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="reviews-block">
                                <img
                                    src={ava}
                                    alt="avatar"
                                    className="reviews-ava"
                                />
                                <div className="reviews-info">
                                    <div className="reviews-more">
                                        <span className="reviews-subtitle">
                                            Sophia A.
                                        </span>
                                        <span className="reviews-time">
                                            {t("reviewsCountry")}
                                        </span>
                                    </div>
                                    <p className="reviews-descr">
                                        {t("reviewsDesccr")}{" "}
                                        <span>{t("reviewsMore")}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="reviews-block">
                                <img
                                    src={ava}
                                    alt="avatar"
                                    className="reviews-ava"
                                />
                                <div className="reviews-info">
                                    <div className="reviews-more">
                                        <span className="reviews-subtitle">
                                            Sophia A.
                                        </span>
                                        <span className="reviews-time">
                                            {t("reviewsCountry")}
                                        </span>
                                    </div>
                                    <p className="reviews-descr">
                                        {t("reviewsDesccr")}{" "}
                                        <span>{t("reviewsMore")}</span>
                                    </p>
                                </div>
                            </div>
                            <div className="reviews-block">
                                <img
                                    src={ava}
                                    alt="avatar"
                                    className="reviews-ava"
                                />
                                <div className="reviews-info">
                                    <div className="reviews-more">
                                        <span className="reviews-subtitle">
                                            Sophia A.
                                        </span>
                                        <span className="reviews-time">
                                            {t("reviewsCountry")}
                                        </span>
                                    </div>
                                    <p className="reviews-descr">
                                        {t("reviewsDesccr")}{" "}
                                        <span>{t("reviewsMore")}</span>
                                    </p>
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
