import Head from 'next/head'
import Logo from '../components/Logo/Logo'
import Stack from '../components/Stack/Stack'
import styles from '../styles/Home.module.css'
import socialLinks from '../data/socialLinks'
import SocialIcons from '../components/SocialIcons/SocialIcons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>What's Fresh @ CircleClick</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack>
        <Stack>
          <Logo/>
          <h1>What&apos;s Fresh</h1>
        </Stack>
        <Stack direction='row'>
          <SocialIcons socialLinks={socialLinks}/>
        </Stack>
      </Stack>
    </div>
  )
}
