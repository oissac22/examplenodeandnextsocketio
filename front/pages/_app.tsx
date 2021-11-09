import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Socket Example</title>
      {/* <script src="http://localhost:4554/socket.io/socket.io.js"></script> */}
      {/* <script type='text/javascript'>
        const socket = io();
      </script> */}
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
