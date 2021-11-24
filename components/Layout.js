import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keyword' content={keywords} />
      </Head>
      <Header />
      {/* need here cz has children components */}
      <div className={styles.container}>{children}</div>
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
