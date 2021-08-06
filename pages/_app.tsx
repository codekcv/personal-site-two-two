import '../styles/globals.css'

import type { AppProps } from 'next/app'

import Footer from '../components/Footer'
import Header from '../components/Header'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <div className="flex flex-col justify-center items-center min-h-screen max-w-screen-md mx-auto">
    <div className="flex-1">
      <Header />
      <Component {...pageProps} />
    </div>

    <Footer />
  </div>
)

export default MyApp
