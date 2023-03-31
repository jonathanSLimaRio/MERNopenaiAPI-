import styles from "../../styles/header.module.scss";

export default function Header() {
  return (
    <div className={styles.main}>
      <h2>RealAssist.AI</h2>
      <h5>This is private message, between you and Assistant.</h5>
    </div>
  );
}
