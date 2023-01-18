import React, { useEffect } from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import "./portfolio-detail.css";
import {
    setAnimate,
    setCardClicked,
    setCrossClicked,
    setMyClassName,
} from "../redux/eventsSlice";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const PortfolioDetail = (props: any) => {
    const { cardClicked, crossClicked, myClassName, animate } = useSelector(
        (state: RootState) => state.events
    );

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setCardClicked(false));
        dispatch(setCrossClicked(true));
        setMyClassName("deactive");
        console.log(myClassName, cardClicked, crossClicked);
    };

    return (
        <div className={`default-position ${myClassName}`}>
            <div className="header-fix">
                <i
                    onClick={handleClick}
                    className="fa-solid fa-circle-xmark"
                ></i>
            </div>
            <div className="main-container">
                {props.children}
                <div className="left-content">
                    <ul>
                        <span className="heading">BOOK DESIGN</span>
                        <li>
                            <span className="second-heading">Project Info</span>
                        </li>
                        <li>
                            <span className="key">Created By </span>
                            <span>:</span>
                            <span> Qandeel Khan</span>
                        </li>
                        <li>
                            <span className="key">Client </span>
                            <span>:</span>
                            <span> Qandeel Khan</span>
                        </li>
                        <li>
                            <span className="key">Date </span>
                            <span>:</span>
                            <span> 16/1/2023</span>
                        </li>
                        <li>
                            <span className="key">Category </span>
                            <span>:</span>
                            <span> Development</span>
                        </li>
                    </ul>
                </div>
                <div className="right-content">
                    <span className="project-description">
                        Project Description
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Sem nulla pharetra diam sit amet nisl.
                        Eget est lorem ipsum dolor sit. Tincidunt tortor aliquam
                        nulla facilisi cras fermentum odio eu. Odio aenean sed
                        adipiscing diam. Adipiscing tristique risus nec feugiat.
                        Laoreet suspendisse interdum consectetur libero. Sem
                        fringilla ut morbi tincidunt augue interdum velit
                        euismod in. Amet volutpat consequat mauris nunc congue
                        nisi vitae suscipit tellus. Elementum facilisis leo vel
                        fringilla est ullamcorper eget nulla facilisi. Platea
                        dictumst vestibulum rhoncus est pellentesque. Aliquet
                        nibh praesent tristique magna. Senectus et netus et
                        malesuada fames ac turpis egestas integer. Rutrum tellus
                        pellentesque eu tincidunt tortor aliquam.
                    </p>
                    <span className="view-live">View Live Version</span>
                </div>
                <div className="footer">
                    <div className="images-area">
                        <img src="img-1.jpg" alt="responsive" />
                        <img
                            src="img-2.jpg"
                            alt="responsive"
                            className="right-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetail;
