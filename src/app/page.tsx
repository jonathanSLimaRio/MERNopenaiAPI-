import Sidebar from '../components/Sidebar'
import styles from '../styles/page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <div>
        <h1>MAIN</h1>
      </div>
    </main>
  )
}
