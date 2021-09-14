import React from 'react';
import Carouselinfo from "./Carouselinfo";
import Services from "./Services";
import Course from "./Course";

const HomePage = () => {
    return (
        <>
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