import React, { useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames";
const todos = () => {
    const arr = [ "Ăn cơm", "Đá bóng", "Học bài"];
    const [complete,setComplete] = useState(false);
    const onClick = (e,index) => {
        console.log("index",index);
        setComplete(!complete);
    }
    return(
        <ul className={style.ul}>
            {
            arr.map((item,index) => {
                console.log(index);
            return <li key={index} onClick={(e,index)=> onClick(e,index)} className={classNames(style.li, { complete: complete === true })} >{item}</li>
            })
        }
        </ul>
    );
}
export default todos;