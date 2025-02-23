import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Paul Truitt - Dev</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App