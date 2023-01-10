import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientsSlide = () => {
    return (
        // <div className="clients-slide-container">
        <div className="clients-slide">
            <h3 className="subheading">
                <span>CLIENTS</span>
            </h3>
            {/* owl */}
            <div style={{ maxWidth: "1050px" }}>
                <Slider
                    dots={false}
                    slidesToShow={5}
                    slidesToScroll={1}
                    arrows={false}
                >
                    <div className="slide-container">
                        <div className="client-logo">
                            {" "}
                            <a href="#">
                                {" "}
                                <img
                                    decoding="async"
                                    src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/client2.png"
                                    alt="Client 2"
                                />{" "}
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="client-logo">
                            {" "}
                            <a href="#">
                                {" "}
                                <img
                                    decoding="async"
                                    src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/client3.png"
                                    alt="Client 3"
                                />{" "}
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="client-logo">
                            {" "}
                            <a href="#">
                                {" "}
                                <img
                                    decoding="async"
                                    src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/client4.png"
                                    alt="Client 4"
                                />{" "}
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="client-logo">
                            {" "}
                            <a href="#">
                                {" "}
                                <img
                                    decoding="async"
                                    src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/client5.png"
                                    alt="Client 5"
                                />{" "}
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="client-logo">
                            {" "}
                            <a href="#">
                                {" "}
                                <img
                                    decoding="async"
                                    src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/client6.png"
                                    alt="Client 6"
                                />{" "}
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="client-logo">
                            {" "}
                            <a href="#">
                                {" "}
                                <img
                                    decoding="async"
                                    src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/client1.png"
                                    alt="Client 1"
                                />{" "}
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="client-logo">
                            {" "}
                            <a href="#">
                                {" "}
                                <img
                                    decoding="async"
                                    src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/client2.png"
                                    alt="Client 2"
                                />{" "}
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="client-logo">
                            {" "}
                            <a href="#">
                                {" "}
                                <img
                                    decoding="async"
                                    src="https://watson.cosmos-themes.com/dark/wp-content/uploads/2021/05/client7.png"
                                    alt="Client 7"
                                />{" "}
                            </a>
                        </div>
                    </div>
                </Slider>
            </div>
            {/* owl */}
            {/* <div className="owl-nav disabled">
                    <button
                        type="button"
                        role="presentation"
                        className="owl-prev"
                    >
                        <span aria-label="Previous">‹</span>
                    </button>
                </div> */}
        </div>
        // </div>
    );
};

export default ClientsSlide;
