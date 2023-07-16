import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      <title>movie-stan</title>
      <link rel="icon" type="image/png" href="/movie-log.png"/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
