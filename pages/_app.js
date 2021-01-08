import {useEffect} from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import '../styles/variables.css'
import '../styles/reset.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const {height} = useWindowDimensions();
  useEffect(() => {
    document.documentElement.style.setProperty('--viewportHeight', `${height}px`);
  }, [height]);

  return <Component {...pageProps} />
}

export default MyApp
