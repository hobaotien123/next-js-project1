import React, { useEffect, useState } from "react";
import style from "./test1.module.scss";
import Link from 'next/link';
import FormData from "form-data";
// import "../../../styles/style.scss";s
// import { GetStaticProps } from 'next'

import router from 'next/router';
// import '../styles/globals.css'

function newPage({ posts }) {
    console.log("posts",posts);
    const [music,setMusic] = useState(false);
    // const [state,setState]  = useState(false);
    // const [state2,setState2] = useState(null);
    // const clickTest = () => {
    //     console.log("hi");
    //     setState(!state);
    // }
    useEffect( () => {
        if(music === true){
          var x = document.getElementById("myAudio");
          x.addEventListener("play", () => {
              // console.log()
              var test12 = document.getElementById("test1_my_music__2lip_");
              test12.classList.add("abc");
              test12.setAttribute("style","animation-play-state : running;");
          })
          x.addEventListener("pause", () => {
              console.log("hehe");
              var test12 = document.getElementById("test1_my_music__2lip_");
              test12.setAttribute("style","animation-play-state : paused;");
          })
        }
    })
    const clickPlayMusic = () => {
      setMusic(!music);
    }
  return(
    <>
        {/* {
          posts !== undefined && posts.map( (item,index) => <p key={index}>{item.title}</p>)
        } */}
        
        {/* <h1 className="hihi">Test1</h1>
        <Link href="/">
            <h2>Link</h2>
        </Link>
        {
            state && <p>Toggle</p>
        }
        {
            console.log("Component render")
        } */}


        {/* <div id="test12" style={{ width : 50, height  : 50, backgroundImage : "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/e/e/e/c/eeecd2e14cc730b0f748d5362723723a.jpg", borderRadius : "50%" }}>

        </div> */}
        <div id={style.my_music}>
            <img onClick={clickPlayMusic} className={style.play_icon} src="/play-button.svg" />
        </div>
        { music && <div className={style.all_music}>
          <audio id="myAudio" autoPlay controls>
              <source src="https://cdn.nhacdj.vn/file/nhacdj-data/music/NhacDJ.vn_5f7c876aef5da.mp3" type="audio/ogg" />
          </audio> 
        </div>
        } 
        {
         music && <div className={style.video}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gEb3lAjbRYU?autoplay=1&mute=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>}



    </>
  );
}
export async function getStaticProps(next) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const res = await fetch('http://localhost:8082/posts');
    // console.log("res",res);
    // const posts = await res.json();
  
    // // By returning { props: posts }, the Blog component
    // // will receive `posts` as a prop at build time
    var posts = ["1","2"]
    return {
      props: {
        posts,
      },
    }
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { index : '1' } } // See the "paths" section below
    ],
    fallback: false // See the "fallback" section below
  };
}
export default newPage;
