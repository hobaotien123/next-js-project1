import React from "react";
import style from "./style.module.scss";
import { StepBackwardOutlined,CaretRightOutlined,StepForwardOutlined } from '@ant-design/icons';
import { Progress } from 'antd';
const AudioPlay = () => {
    return(
        <div className={style.all_audio_wrapper}>
            <div className={style.info}>
                <div className={style.thum_audio}>
                    <img src="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/e/e/e/c/eeecd2e14cc730b0f748d5362723723a.jpg" alt="image"/>
                </div>
                <div className={style.info_audio}>
                    <p className={style.title_audio}>Look What Do Made Me Do</p>
                    <span className={style.singer_audio}>Taylor</span>
                </div>
            </div>
            <div className={style.play_list_audio}>
                {/* <audio id="myAudio" autoPlay controls>
                    <source src="https://cdn.nhacdj.vn/file/nhacdj-data/music/NhacDJ.vn_5f7c876aef5da.mp3" type="audio/ogg" />
                </audio>  */}
                <div className={style.all_icon_audio}>
                    <StepBackwardOutlined />
                    <CaretRightOutlined className={style.icon_play} style={{margin: '0px auto',}}/>
                    <StepForwardOutlined />
                </div>
                <div className={style.progress_audio}>
                    <Progress strokeWidth={3} percent={100} showInfo={false} />
                </div>
            </div>
        </div>
    );
}
export default AudioPlay;