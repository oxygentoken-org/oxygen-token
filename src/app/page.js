import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import MainPage from '../../pages/home/MainPage'
import "./globals.css"




export default function Home() {
  return (
    <main className={styles.main}>
     <Head>
      <title>Oxygen Token</title>
      <meta name='description' content='Reduci tus emisiones de CO2 con Oxygen'/>
      <link rel='icon' href='./favicon.ico'/>
      
      </Head> 

      <MainPage/>


      {/*<div className='anteSala'>
      <h1>Paremos la desforestación</h1>
      <a href='/home'>Parar</a> 
  </div>*/}
  
     
    </main>
  )
}
