import Head from 'next/head'
import Header from '../components/Header'
import HyrjaImage from '../images/glob_home.png'
import Images from '../components/Image'

export default function Home() {
  return (
    <>
      <Header />
      <section className="home-hyrja container flex jc-center ai-center" >
        <Images src={HyrjaImage} alt="Colorful globe" />
        <p className="title fw-bold" >Crafted with love</p>
      </section>
    </>
  )
}
