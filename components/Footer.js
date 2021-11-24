import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

// footer for footer on all web page
export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p>DJ Events | copyright 2021 &copy;</p>
        <Link href='/about'>
          <a>About DJ Events</a>
        </Link>
      </footer>
    </div>
  );
}
