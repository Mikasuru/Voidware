import Image from "next/image";
import { Merriweather } from 'next/font/google';
import styles from "./page.module.css";
import Link from 'next/link'; 

const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <nav className={styles.nav}>
        <p className={styles.largeFont}>Voidware</p>
          <ul className={styles.navList}>
            <li>About us</li>
              <li>Our Apps</li>
                <li>Feedback</li>
                  <li>Community</li>
                    <li>Support</li>
          </ul>
          <div className={styles.profile}>
            
          </div>
        </nav>
      </header>

      <main className={styles.main}>
        <div className={styles.leftSection}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src="/nira.jpg"
              alt="Nira Image"
              layout="fill"
              priority
            />
          </div>
        </div>
        <div className={styles.rightSection}>
          <h1 className={`${styles.title} ${merriweather.className}`}>N.I.R.A - Neural Interactive Responsive Agent</h1>
          <p className={styles.description}>An advanced interactive agent that adapts to user needs and preferences.</p>
          <Link href="/learn-more" passHref>
            <button className={styles.cta}>Learn More</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
