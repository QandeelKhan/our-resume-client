import React, { ReactNode } from "react";
import "./button.css";
import { useNavigate } from "react-router-dom";

export const Button = ({
    NavBtnIcon,
    NavBtnHref,
    NavBtnTitle,
    navigateTo,
}: any) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`${navigateTo}`);
    };
    return (
        <div className="nav-btn" onClick={handleNavigate}>
            {NavBtnIcon}
            <a href={NavBtnHref} className="nav-btn-link">
                {NavBtnTitle}
            </a>
        </div>
    );
};
