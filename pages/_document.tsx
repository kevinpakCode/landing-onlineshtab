import Document, { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/header'
import Footer from '../components/footer'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/images/uploads/favshtab.png" />
        </Head>
        <body className="linding-page">
          <div className="wrapper">
            <Header/>
            <main className="main">
              <Main />
            </main>
            <Footer/>
          </div>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument