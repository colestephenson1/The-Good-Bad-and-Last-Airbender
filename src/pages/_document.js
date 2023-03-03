import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" style={{scrollBehavior:'smooth'}}>
      <title>The Good, The Bad, and The Last Airbender</title>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
