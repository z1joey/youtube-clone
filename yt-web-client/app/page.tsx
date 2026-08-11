import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started with Next.js 13.0.0 by creating a new project.
          <code className={styles.code}>app/page.tsx</code>
        </p>
      </div>
    </main>
  );
}
