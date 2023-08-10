import styles from './page.module.css'
import MainPage from "../../components/MainPage"
import "./globals.css"
import Head from 'next/head'

export default function Home() {
    return (<>
      <Head>
       <title>Oxygen Token</title> 
      </Head>
    <main className={styles.main}>
      <MainPage/>     
    </main>
    </>
  )
}
