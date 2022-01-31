import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GTM_ID } from '../lib/gtm'
import { Partytown, GoogleTagManager } from "@builder.io/partytown/react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
      {/* Google Tag Manager - Global base code */}
      <GoogleTagManager containerId={GTM_ID} />
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
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}