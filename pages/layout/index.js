import React, { useEffect } from "react";
import style from "./style.module.scss";

const Layout = () => {
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
                <div className={style.div1}>

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
        </div>
    );
}
export default Layout;