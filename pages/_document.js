import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta key="description" name="description" content="Welcome to the official home of Creator Clash!" />
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
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
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
