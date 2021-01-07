import Head from 'next/head'
import Logo from '../components/Logo/Logo'
import Stack from '../components/Stack/Stack'
import styles from '../styles/Home.module.css'
import socialLinks from '../data/socialLinks'
import currentLinks from '../data/links'
import SocialIcons from '../components/SocialIcons/SocialIcons'
import LinkRow from '../components/LinkRow/LinkRow'

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
          <Stack align='stretch'>
          {currentLinks.map((link, index) => (
            <LinkRow href={link.url} key={index}>{link.name}</LinkRow>
          ))}
          </Stack>
        </Stack>
        <Stack direction='row' justify='even' fullWidth={true}>
          <SocialIcons socialLinks={socialLinks}/>
        </Stack>
      </Stack>
    </div>
  )
}
