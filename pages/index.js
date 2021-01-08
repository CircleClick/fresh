import Head from 'next/head'
import Logo from '../components/Logo/Logo'
import Stack from '../components/Stack/Stack'
import styles from '../styles/Home.module.css'
import socialLinks from '../data/socialLinks'
import SocialIcons from '../components/SocialIcons/SocialIcons'
import LinkRow from '../components/LinkRow/LinkRow'
import Container from '../components/Container/Container'
import { getLinks } from '../lib/links'

const siteTitle = "What's Fresh @ CircleClick";
const siteDescription = "Here are some of our latest blog posts and media appearances!";

export default function Home(props) {

  const {links: currentLinks} = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>{ siteTitle }</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content={ siteDescription }
        />
        <meta
          property="og:image"
          content="https://latest.circleclick.com/img/social-graphic.jpg"
        />
        <meta name="og:title" content={ siteTitle } />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Container>
        <Stack justify='between'>
          <Stack>
            <a href="https://www.circleclick.com/"><Logo/></a>
            <h1 style={{ fontStyle: 'italic' }}>What&apos;s Fresh</h1>
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
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  const links = await getLinks();

  return {
    props: {links}
  }
}