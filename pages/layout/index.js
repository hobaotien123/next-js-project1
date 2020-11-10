import React, { useEffect } from "react";
import style from "./style.module.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Layout = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        // autoplay : true
    };
    useEffect(() =>{
        const backTop = document.getElementById(`${style.back_top_top}`);
        const backDiv = document.getElementById(`${style.div2}`);
        console.log(backDiv.offsetTop + 100);
        backTop.addEventListener("click", function(){
            window.scrollTo({top: backDiv.offsetTop - 12, behavior: 'smooth'});
            // document.documentElement.scrollTop = 0;
        });
    },[])
    return(
        <div className={style.container}>
            <div className={style.all_layout}>
                <div className={style.div1}>

                </div>
                <div className={style.div1}>

                </div>
                <div className={style.div1}>

                </div>
                <div className={style.div1}>

                </div>
                <div id={style.div2}>

                </div>
                <div className={style.div1}>

                </div>
                <div className={style.div1}>

                </div>
                <div className={`${style.div1-123}`}>

                </div>
                <div className={style.div1}>

                </div>
                <div className={style.div1}>

                </div>
                <div className={style.div1}>

                </div>
            </div>
            <div id={`${style.back_top_top}`}>
                Back
            </div>
            <div>
                <h2> Single Item</h2>
            <Slider {...settings}>
                    <div className={style.slide}>
                        <h3>1</h3>
                    </div>
                    <div className={style.slide}>
                        <h3>2</h3>
                    </div>
                    <div className={style.slide} >
                        <h3>3</h3>
                    </div>
                    <div className={style.slide}>
                        <h3>4</h3>
                    </div>
                    <div className={style.slide}>
                        <h3>5</h3>
                    </div>
                    <div className={style.slide}>
                        <h3>6</h3>
                    </div>
            </Slider>
            </div>
        </div>
    );
}
export default Layout;