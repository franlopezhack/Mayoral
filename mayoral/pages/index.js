import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>

      <Head>
        <title>Mayoral</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/products">
          <a>
            PRODUCTOS
          </a>
        </Link>


      </main>


    </div>
  )
}
