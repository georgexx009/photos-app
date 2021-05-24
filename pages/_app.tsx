import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider as AuthProvider } from 'next-auth/client'
import { SideBar } from '@components'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider session={pageProps.session}>
        <div className='pb-6'>
          <SideBar />
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default MyApp
