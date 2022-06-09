import type { AppProps } from 'next/app'

import { AuthProvider } from '../hooks/useAuth'

import '../styles/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
