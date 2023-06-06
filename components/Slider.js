import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import styles from "@/styles/Slider.module.scss";

let productsp = [
    {
        id: 1,
        name: "Product Number 1",
        brand: "Brand Name",
        url: "products-number-1",
        price: 100,
        imgurl: "/slider/slider-img.png",
    },

    {
        id: 1,
        name: "Product Number 2",
        brand: "Brand Name",
        url: "products-number-2",
        price: 100,
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
                <h3 className={`${styles.carouselHeaderWrap} text-center`}>
                    <span className={`${styles.carouselHeader}`} >Featured Products</span>
                </h3>
                <p className={`${styles.carouselTextWrap} text-center `}>
                    <span className={`${styles.carouselText}`} >Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt </span>
                </p>
                <div className={`${styles.carouselSliderWrap} `}>                    
                    <ul id="owl-carousel-ul" className="owl-carousel owl-loaded owl-drag">
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
                                        id="featuredProducts"
                                        className="item float-left w-100"
                                        key={product.name}
                                    >
                                        <div className="productListing row">
                                        <div className="col-3">
                                            <div className="cardWrap">
                                                <div className="cardHeader">
                                                    <h5>Brand</h5>
                                                </div>
                                                <div className="cardBody">
                                                    <p>nike</p>
                                                </div>
                                            </div>
                                            <div className="cardWrap">
                                                <div className="cardHeader">
                                                    <h5>Brand</h5>
                                                </div>
                                                <div className="cardBody">
                                                    <p>nike</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
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
                                                        <span className="w-100 text-center mt-1 ">
                                                            <h5 className="brand text-capitalize float-left">
                                                                {product.brand}
                                                            </h5>
                                                            <span className="name">{product.name}</span>
                                                            <strong className="itemPrice p-0">
                                                                Price: {product.price}
                                                            </strong>
                                                        </span>
                                                    </a>
                                            </a>
                                        </div>
                                        <div className="col-3">
                                            One of three columns
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