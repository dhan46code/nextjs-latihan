import Layout from '@/components/Layout';
import Link from 'next/link';
import styles from '@/styles/Error.module.css';

// here nextJS automatic will create 404 just create 404.js
// https://nextjs.org/docs/advanced-features/custom-error-page
export default function NotFoundPage() {
  return (
    <Layout title='error page'>
      <div className={styles.error}>
        <h1>404</h1>
        <h3>this error page, your page not found</h3>
        <Link href='/'>
          <a>Please Back To Home</a>
        </Link>
      </div>
    </Layout>
  );
}
