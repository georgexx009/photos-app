import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider as AuthProvider } from 'next-auth/client'
import { IconContext } from 'react-icons'
import { SideBar } from '@components'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider session={pageProps.session}>
        <div className='pb-6'>
          <IconContext.Provider value={{ style: {fontSize: '35px' }}}>
            {/* <SideBar /> */}
            <Component {...pageProps} />
          </ IconContext.Provider>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default MyApp
