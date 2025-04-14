import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta key="description" name="description" content="Welcome to the official home of Creator Clash!" />
        <link key="favicon" rel="icon" href="/favicon.ico" />
        <meta key="charset" charSet="utf-8" />
        <meta key="theme-color" name="theme-color" content="#000000" />
        <meta key="keywords" name="keywords" content="Creator Clash" />
        <meta key="cache-control" httpEquiv="Cache-Control" content="max-age: 31536000, no-cache, no-store, must-revalidate" />
        <meta key="Pragma" httpEquiv="Pragma" content="no-cache" />
        <meta key="Expires" httpEquiv="Expires" content="0" />
        <meta key="og:title" property="og:title" content="Creator Clash" />
        <meta key="og:description" property="og:description" content="Welcome to the official home of Creator Clash!" />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:image" property="og:image" content="/assets/social-thumb.png" />
        <meta key="twitter:title" name="twitter:title" content="Creator Clash" />
        <meta key="twitter:description" name="twitter:description" content="Welcome to the official home of Creator Clash!" />
        <meta key="twitter:image" name="twitter:image" content="/assets/social-thumb.png" />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <link rel="stylesheet" href="https://use.typekit.net/atz0jdl.css" />
        {/* The Trade Desk (Programmatic) - Dep script (See tracking-codes.js) */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script key="ttd-script" src="https://js.adsrvr.org/up_loader.1.1.0.js" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
