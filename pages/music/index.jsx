import React from "react";
import style from "./style.module.scss";
import AudioPlay from "../../component/AudioPlay";
const music = () => {
    return(
        <>
            <div className={style.container}>
                <AudioPlay />
            </div>
        </>
    );
}

export default music;
