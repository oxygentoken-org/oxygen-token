"use client"; 
import styles from './page.module.css'
import Head from 'next/head'
import MainPage from '../../pages/home/MainPage'
import "./globals.css"
import TagManager, {TagManagerArgs} from 'react-gtm-module'
import { useEffect } from 'react'


export default function Home() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "";

  const tagManagerArgs = {
    gtmId: gtmId,
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

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
