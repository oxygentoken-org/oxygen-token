import Image from 'next/image'
import styles from './page.module.css'
import MainPage from "../../pages/home/MainPage"
import Head from 'next/head'



export default function Home() {
  return (
    <main className={styles.main}>
     <Head>
      <title>Oxygen Token</title>
      <meta name='description' content='Reduci tus emisiones de CO2 con Oxygen'/>
      <link rel='icon' href='./favicon.ico'/>
      
      </Head> 

      <MainPage/>
  
     
    </main>
  )
}
