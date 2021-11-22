import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
    <div className={styles["container"]}>
      <div className={styles["message"]}>
        <h1>MEET THE TEAM</h1>
        <p>
          We have a small and dedicated team of employees and it is a wonderful privilege to work
          with them every single day. We are great at what we do because of our team and we thank
          them for their dedication and work.
        </p>
      </div>
      <div className={styles["image"]}>
        <img
          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGFzc2lvbiUyMGxlZCUyMHVzJTIwaGVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          className={styles["img"]}
        ></img>
      </div>
    </div>
  </>
  )
}
