import styles from './page.module.css'
import MainPage from "../../components/MainPage"
import "./globals.css"
import Head from 'next/head'

export const metadata = {
  title: 'Oxygen Token',
  description: 'Reducí tus emisiones de CO2 con Oxygen',
}
 
 

export default function Home() {
    return (<>
      
    <main className={styles.main}>
      <MainPage/>     
    </main>
    </>
  )
}
