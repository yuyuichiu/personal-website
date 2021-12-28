import '../styles/globals.scss'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import LoadingWidget from '../components/LoadingWidget';

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const routeChangeStartHandler = (url: string) => {
      setIsLoading(true);
    }

    const routeChangeEndHandler = (url: string) => {
      setIsLoading(false);
    }

    router.events.on('routeChangeStart', routeChangeStartHandler)
    router.events.on('routeChangeComplete', routeChangeEndHandler)
  }, [])

  return <>
    <LoadingWidget loading={isLoading}/>
    <Component {...pageProps} />
  </>
}

export default MyApp
