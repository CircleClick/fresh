import {useEffect} from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import '../styles/variables.css'
import '../styles/reset.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  /* Set a viewport height variable to avoid ugly 100vh issues on mobile */
  const {height} = useWindowDimensions();
  useEffect(() => {
    document.documentElement.style.setProperty('--viewportHeight', `${height}px`);
  }, [height]);

  // Set the HTML lang to pass Lighthouse audits
  useEffect(() => {
    document.documentElement.lang = 'en-us';
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
