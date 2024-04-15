import React from 'react'
import "./HeaderSlider.css";
import Slider_1 from "../../assets/images/Slider_1.jpg";
import Slider_2 from "../../assets/images/Slider_2.jpg";
import Slider_3 from "../../assets/images/Slider_3.png";
import Shopping from "../../assets/images/Shooping.png";
import Sale from '../../assets/images/Sale.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Slider_4 from '../../assets/images/slider_4.jpg';
const HeaderSlider = () => {
    let settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='slider' >
            <div className='container row'>
                <div className='col-4 px-5'>
                    <img src={Shopping} alt="images"/>
                </div>
                <div className='slider-content overflow-x-hidden col-8'>
                    <Slider {...settings}>
                        <div className='slider-item'>
                            <img src={Slider_1}  alt=""></img>
                        </div>
                        <div className='slider-item'>
                            <img src={Slider_2} alt="" />
                        </div>
                        <div className='slider-item'>
                            <img src={Slider_3} alt=""></img>
                        </div>
                        <div className='slider-item'>
                            <img src={Sale} alt="" />
                        </div>
                        <div className='slider-item'>
                            <img src={Slider_4} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
};

export default HeaderSlider;