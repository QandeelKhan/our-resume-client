import React from "react";
import Masonry from "react-masonry-css";

const PortfolioProject: React.FC = (props) => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        900: 2,
        700: 1,
    };
    return (
        <div className="projects-area">
            <div className="menu-div">
                <ul>
                    <li>
                        <a href="/">ALL</a>
                    </li>
                    <li>
                        <a href="/">GRAPHIC</a>
                    </li>
                    <li>
                        <a href="/">DESIGN</a>
                    </li>
                    <li>
                        <a href="/">BRAND</a>
                    </li>
                </ul>
            </div>
            <Masonry
                className="masonry-grid"
                columnClassName="masonry-grid_column"
                breakpointCols={breakpointColumnsObj}
            >
                <div className="grid-item">
                    <a className="card-wrapper" href="#">
                        <div className="overlay">
                            <span>Book Design</span>
                            <span>Graphic</span>
                            <i className="fa-solid fa-file"></i>
                        </div>
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-1.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="card-container">
                    <a className="card-wrapper" href="#">
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-10.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="card-container">
                    <a className="card-wrapper" href="#">
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-9.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="card-container">
                    <a className="card-wrapper" href="#">
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-8.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="card-container">
                    <a className="card-wrapper" href="#">
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-11.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="card-container">
                    <a className="card-wrapper" href="#">
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-6.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="card-container">
                    <a className="card-wrapper" href="#">
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-5.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="card-container">
                    <a className="card-wrapper" href="#">
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-7.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="card-container">
                    <a className="card-wrapper" href="#">
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-3.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="card-container">
                    <a className="card-wrapper" href="#">
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-2.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
                <div className="card-container">
                    <a className="card-wrapper" href="#">
                        <img
                            className="card-image"
                            src="images/portfolio/portfolio-4.jpg"
                            alt="img-1"
                        />
                    </a>
                </div>
            </Masonry>
        </div>
    );
};

export default PortfolioProject;
