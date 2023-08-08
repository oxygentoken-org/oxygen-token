import styles from './page.module.css'
import MainPage from "../../components/MainPage"
import "./globals.css"

export default function Home() {
    return (
    <main className={styles.main}>
      <MainPage/>     
    </main>
  )
}
