import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";

// Render server side
export default function Navbar() {
  return (
    <nav className={styles.nav}>
        <Link href="/">
          <Image src="/next.svg" alt="logo" width={90} height={20} />
        </Link>
    </nav>
  );
}