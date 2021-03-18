import Hero from '../components/Hero'
import Navbar from '../components/navbar'
import '../styles/index.css'

function MyApp({Component, pageProps}) {

    return <> 
      <Navbar /> 
      <Component {...pageProps} /> 
    </>
}

export default MyApp
