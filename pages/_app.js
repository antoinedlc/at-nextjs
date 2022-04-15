import '../styles/globals.scss'

import Head from 'next/head'
import Nav from '../components/Nav'
import store from '../store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>AT-NEXTJS</title>
      </Head>
      <main className="main-container">
        <Nav />
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}

export default MyApp
