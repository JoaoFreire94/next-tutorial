import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="bg-red-50">
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to our website!</h1>
        <p className={styles.description}>The house of movies.</p>
      </main>
    </div>
  );
}
