import Head from 'next/head'
import Logo from '../components/Logo/Logo'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>What's Fresh @ CircleClick</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Logo/>
      <h1>What&apos;s Fresh</h1>
    </div>
  )
}
