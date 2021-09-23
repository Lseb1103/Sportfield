import React from 'react';
import Carouselinfo from "../components/Carouselinfo";
import Services from "../components/Services";
import Course from "../components/Course";
import { Header } from 'antd/lib/layout/layout';
import MainMenu from "../components/MainMenu";


import sportFieldLogo from '../images/sportFieldLogo.jpg';
import '../styles/App.css';


const HomePage = () => {
    return (
        <>
            <Header className="main-header">
                <img src={sportFieldLogo} alt="SportField" />
                <MainMenu />
            </Header>

            <div className="imagesInfo">

                <Carouselinfo />
            </div>
            <div className="services">
                <h2>SERVICIOS</h2>
                <Services />
                <div className="curses">
                    <h2>CURSOS DISPONIBLES</h2>
                    <Course />
                </div>

            </div>
        </>
    );
};

export default HomePage;