import Head from 'next/head'
import Header from '../components/Header'
import HyrjaImage from '../images/glob_home.png'
import BgSection from '../images/home_section_bg.jpg'
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
      <section className="home-info">
        <div className="content container flex jc-spaceb" >
          <div className="left ">
            <p className="fw-bold" >
              We define problems, shape <br />
              opportunities and realize <br />
              the experience
            </p>
          </div>
          <div className="right flex jc-end">
            <p className="fw-regular" >
              Founded in 2021 Creo was born as a multi-disciplinary team of creatives.<br />
              We are devoted to making a difference through design and technology.<br />
              Located in Tirana, Albania and Bremen Germany, we have partnered with<br />
              various top-tier companies to create best-in-class digital products and <br />
              experiences. The digital world never stands still, tomorrow will be <br />
              different from today.
            </p>
          </div>
        </div>
      </section>
      <section className="home-bg flex ai-center jc-center">
        <Images src={BgSection} alt="Image Background" />
        <p className="fw-bold" >We craft (y)our design</p>
      </section>
      <section className="home-projects" >
            <div className="home-projects-container container" >
              <p className="title fw-bold">Our Projects</p>      

            <div className="home-projects-container-items"> 

            </div>

            </div>
      </section>
    </>
  )
}
