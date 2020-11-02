import React, { useEffect, useState } from "react";
import Link from 'next/link';
// import "../../../styles/style.scss";s
// import { GetStaticProps } from 'next'

import router from 'next/router';
// import '../styles/globals.css'

function newPage({ posts }) {
    console.log("posts",posts);
    const [state,setState]  = useState(false);
    const clickTest = () => {
        console.log("hi");
        setState(!state);
    }
    useEffect( () => {
        var x = document.getElementById("myAudio");
        x.addEventListener("play", () => {
            console.log("hihi")
            var test12 = document.getElementById("test12");
            test12.classList.add("abc");
            test12.setAttribute("style","animation-play-state : running;");
        })
        x.addEventListener("pause", () => {
            console.log("hehe");
            var test12 = document.getElementById("test12");
            test12.setAttribute("style","animation-play-state : paused;");
        })
        // var test12 = document.getElementById("test12");
        // x.addEventListener(playAudio, ()=>{
        //     console.log(123);
        // })
        // const playAudio = () => {
        //     console.log("12");
            // test12.classList.add("abs")
        // }
        // playAudio()
    })
  return(
    <>
        {
          posts !== undefined && posts.map( (item,index) => <p key={index}>{item.title}</p>)
        }
        <div id="test12" style={{ width : 50, height  : 50, backgroundImage : "https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/e/e/e/c/eeecd2e14cc730b0f748d5362723723a.jpg", borderRadius : "50%" }}>

        </div>
        <audio id="myAudio" controls>
            <source src="https://cdn.nhacdj.vn/file/nhacdj-data/music/NhacDJ.vn_5f7c876aef5da.mp3" type="audio/ogg" />
        </audio>
        <h1 className="hihi">Test1</h1>
        <Link href="/">
            <h2>Link</h2>
        </Link>
        {
            state && <p>Toggle</p>
        }
        {
            console.log("Component render")
        }
        <button onClick={clickTest}>Click me</button>
        <Link href="/">aaaa</Link>
    </>
  );
}
export async function getStaticProps(next) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('http://localhost:8082/posts');
    console.log("res",res);
    const posts = await res.json();
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
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
