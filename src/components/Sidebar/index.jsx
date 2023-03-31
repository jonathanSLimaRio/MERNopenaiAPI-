import { Button } from '../../components/Button'
import styles from "../../styles/sidebar.module.scss";

export default function Sidebar() {
  return (
    <main className={styles.main}>
      <h1>Sidebar</h1>
      <div className={styles.sidebarFooter}>
        <div className={styles.divider}></div>
        <Button >
            <h1>1</h1>
        </Button>
      </div>
    </main>
  );
}
