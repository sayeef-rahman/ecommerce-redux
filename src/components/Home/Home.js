import React from 'react';
import './Home.css'
import Products from './Products';
import Slider from './Slider/Slider';
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Products></Products>
        </div>
    );
};

export default Home;