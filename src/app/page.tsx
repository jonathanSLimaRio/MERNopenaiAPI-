import Sidebar from '../components/Sidebar'
import Main from '../views/main'
import styles from '../styles/page.module.scss'

export default function Home() {
  return (
    <div className={styles.main}>
      <Sidebar />
      <Main />
    </div>
  )
}
