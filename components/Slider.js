import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styles from "@/styles/Slider.module.scss";

let productsp = [
    {
        id: 1,
        name: "Product Number 1",
        brandname: "Brand",
        brandlogourl: "/slider/Nike-Logo.png",
        brandtexthead: "Text",
        brandtextbody: "Generated through a natural language processing tool driven by AI technology",
        brandimgname: "Image",
        brandimgbody: "Generated through AI based Text to image technology",
        brandfinal: "Final",
        brandfinalbody: "The final is combined together and exported into a final element using an editing tool",
        imgurl: "/slider/slider-img.png",
    },

    {
        id: 2,
        name: "Product Number 1",
        brandname: "Brand",
        brandlogourl: "/slider/Nike-Logo.png",
        brandtexthead: "Text",
        brandtextbody: "Generated through a natural language processing tool driven by AI technology",
        brandimgname: "Image",
        brandimgbody: "Generated through AI based Text to image technology",
        brandfinal: "Final",
        brandfinalbody: "The final is combined together and exported into a final element using an editing tool",
        imgurl: "/slider/slider-img.png",
    },
];
var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

// This is for React JS, Remove this for Next.js
// import OwlCarousel from 'react-owl-carousel';

const Slider = () => {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        dots: true,
        autoplay: false,
        smartSpeed: 1000,
        navClass: ["owl-prev", "owl-next"],
        navText: [
            '',
            '',
        ],
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    };

    return (
        <div className={`${styles.carouselWraper}`}>
            <div
                className="bg-black"
                id="owl-carousel-products"
            >
                <h3 className={`${styles.carouselHeaderWrap} text-center pt-5`}>
                    <span className={`${styles.carouselHeader}`} >Creatives for your brand</span>
                </h3>
                <p className={`${styles.carouselTextWrap} text-center pb-5 `}>
                    <span className={`${styles.carouselText}`} >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt </span>
                </p>
                <div className={`${styles.carouselSliderWrap} `}>                    
                    <ul id="owl-carousel-ul" className={`${styles.carouselSliderUl} owl-carousel owl-loaded owl-drag pl-2`} >
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={4}
                        nav={true}
                        navText={[
                            '<img src="/images/Arrow_left.png" />',
                            '<img src="/images/Arrow_right.png" />',
                        ]}
                        dots={false}
                        animateIn={true}
                        {...options}
                    >
                        {productsp && productsp.length > 0
                            ? productsp.map((product) => {
                                return (
                                    <div
                                        id="featuredProducts"  className={`${styles.carouselSlider} item float-left w-100`}
                                        key={product.name}
                                    >
                                        <div className={`${styles.productListing} productListing row`}>
                                        <div className="col-3 d-flex flex-column justify-content-center ">
                                            <div className="d-none d-lg-block">
                                                <div className={`${styles.cardWrap} d-flex flex-column align-items-center justify-content-center mb-3`}>
                                                    <div className={`${styles.cardHeader}`}>
                                                        <h5>{product.brandname}</h5>
                                                    </div>
                                                    <div className={`${styles.cardBody}`}>
                                                        <img
                                                            src={product.brandlogourl}
                                                            alt={product.name}
                                                            title={product.name}
                                                        />
                                                    </div>
                                                </div>
                                                <div className={`${styles.cardWrap} d-flex flex-column align-items-center justify-content-center mb-3 text-center p-4`}>
                                                    <div className={`${styles.cardHeader}`}>
                                                        <h5>{product.brandtexthead}</h5>
                                                    </div>
                                                    <div className={`${styles.cardBody} `}>
                                                        <p>{product.brandtextbody}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-12 col-lg-6">
                                            <a href={product.url}>

                                                    <a className="product float-left">
                                                        <span className="image text-center">
                                                            <img
                                                                id={"img" + product.id}
                                                                src={product.imgurl}
                                                                alt={product.name}
                                                                title={product.name}
                                                            />
                                                        </span>
                                                        {/* <span className="w-100 text-center mt-1 ">
                                                            <h5 className="brand text-capitalize float-left">
                                                                {product.brand}
                                                            </h5>
                                                            <span className="name">{product.name}</span>
                                                            <strong className="itemPrice p-0">
                                                                Price: {product.price}
                                                            </strong>
                                                        </span> */}
                                                    </a>


                                            </a>
                                        </div>
                                        <div className=" col-lg-3 d-flex flex-column  justify-content-center    ">
                                            <div className="d-none d-lg-block">
                                                <div className={`${styles.cardWrap} d-flex flex-column align-items-center justify-content-center text-center p-4 mb-3`}>
                                                    <div className={`${styles.cardHeader}`}>
                                                        <h5>{product.brandimgname}</h5>
                                                    </div>
                                                    <div className={`${styles.cardBody}`}>
                                                        <p>{product.brandimgbody}</p>
                                                    </div>
                                                </div>
                                                <div className={`${styles.cardWrap} d-flex flex-column align-items-center justify-content-center text-center p-4 mb-3`}>
                                                    <div className={`${styles.cardHeader}`}>
                                                        <h5>{product.brandfinal}</h5>
                                                    </div>
                                                    <div className={`${styles.cardBody} `}>
                                                        <p>{product.brandfinalbody}</p>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                        </div>
                                            
                                        </div>
                                    </div>
                                );
                            })
                            : ""}
                    </OwlCarousel>
                    </ul>     
                </div>
            </div>
        </div>
    );
};
export default Slider;