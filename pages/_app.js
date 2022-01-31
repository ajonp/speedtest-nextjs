import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { GTM_ID, pageview } from '../lib/gtm'
import { Partytown, GoogleTagManagerNoScript } from "@builder.io/partytown/react";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview)
    return () => {
      router.events.off('routeChangeComplete', pageview)
    }
  }, [router.events])

  return (
    <>
      <GoogleTagManagerNoScript containerId={GTM_ID} />
      <Partytown
        debug={true}
        resolveUrl={(url) => {
          if ([
            'www.google-analytics.com', 
            'www.googleadservices.com',
          ].some(a => a == url.hostname)) {
            var proxyUrl = new URL('/api/corsproxy');
            proxyUrl.searchParams.append('url', url);
            return proxyUrl;
          }
        }}
      />
      <script type='text/partytown' dangerouslySetInnerHTML={{ __html: `console.log('Partytown is setup')` }} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp