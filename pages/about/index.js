import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quri Test App | About</title>
        <meta name="description" content="Quri Test App | About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hey, Welcome To the About Page!</h1>
      <Link href="/">Go back to Landing page!</Link>
    </div>
  )
}
