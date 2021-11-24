import Head from 'next/head';
import styles from '@/styles/Layout.module.css';
import { useRouter } from 'next/router';
import Header from './Header';
import Showcase from './Showcase';
import Footer from './Footer';

// create props title,keyword,etc and will passing on bottom code
export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      {/* head biasanya menggunakan title, meta name desc, and keyword */}
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keyword' content={keywords} />
      </Head>
      {/* header */}
      <Header />
      {/* gunakan router.path krna kita ingin mnampilkan hnya di home saja bukan untuk keseluruhan pages, jika router.pathname equal home (/) just showing only for home if not don't! */}
      {router.pathname === '/' && <Showcase />}
      {/* need here cz has children components */}
      <div className={styles.container}>{children}</div>
      {/* footer */}
      <Footer />
    </div>
  );
}

// passing data props here
Layout.defaultProps = {
  title: 'DJ Events',
  description: 'find the latest dj and event musics',
  keywords: 'music,dj,dj-events,event music',
};
