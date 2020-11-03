import React, { useEffect, useState } from "react";
import Link from 'next/link';
import style from "./newPage.module.css"

function newPage({ posts }) {
    console.log("posts",posts);
    const [state,setState]  = useState(false);
    const clickTest = () => {
        console.log("hi");
        setState(!state);
    }
    useEffect( () => {
        console.log("Use Effect");
    })
  return(
    <>
        {
          posts !== undefined && posts.map( (item,index) => <p className={style.text} key={index}>{item.title}</p>)
        }
        <h1>Hehe</h1>
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
// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { index : '1' } } // See the "paths" section below
//     ],
//     fallback: false // See the "fallback" section below
//   };
// }
export default newPage;
