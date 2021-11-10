import Head from 'next/head'
import Header from '../components/Header'
import HyrjaImage from '../images/glob_home.png'
import Images from '../components/Image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Creo</title>
        <meta name="description" content="Creo - Digital Agency" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      <section className="home-hyrja container flex jc-center ai-center" >
        <Images src={HyrjaImage} alt="Colorful globe" />
        <p className="title fw-bold" >Crafted with love</p>
      </section>
    </>
  )
}
