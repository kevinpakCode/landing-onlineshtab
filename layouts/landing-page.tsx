
import  Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import AlertCookie from '../components/alert-cookie/alert-cookie'

const LandingPage = ({children}) => {
  return (
    <>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/images/uploads/favshtab.png" />
        </Head>
        
          <div className="wrapper">
            <Header/>
            <main className="main">
              {children}
            </main>
            <Footer/>
          </div>
          <AlertCookie/>
        
    </>
  )

}

export default LandingPage