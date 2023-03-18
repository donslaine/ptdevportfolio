import Head from 'next/head'
import '../styles/globals.css'
const App = ({ Component, pageProps }) => {
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
