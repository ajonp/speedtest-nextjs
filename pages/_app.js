import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { GTM_ID, pageview } from '../lib/gtm'
import { Partytown } from "@builder.io/partytown/react";

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
      {/* Google Tag Manager - Global base code */}
      <Script
        id="googl-tag-manager"
        strategy="afterInteractive"
        type='text/partytown'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
        }}
      />
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