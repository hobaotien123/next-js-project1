import React from "react";
import style from "./style.module.scss";
import AudioPlay from "../../component/AudioPlay";
import Link from "next/link";
const music = ({posts}) => {
    return(
        <>
            <div className={style.container}>
                <AudioPlay />
            </div>
            <Link href="/newPage">
            sss
            </Link>
            { 
                posts && posts.map(item => {
                    return <p>{item.title}</p>
                })
            }
        </>
    );
}

export async function getStaticProps(next) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    console.log("hehehee");
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

export default music;
