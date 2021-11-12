import Head from 'next/head'
import Header from '../components/Header'
import HyrjaImage from '../images/glob_home.png'
import BgSection from '../images/home_section_bg.jpg'
import Images from '../components/Image'
import Project1 from '../images/project-1.jpg'
import Project2 from '../images/project-2.jpg'
import Project3 from '../images/project-3.jpg'
import FooterTop from '../components/FooterTop'
import Footer from '../components/Footer';

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
        <div className="home-projects-container container flex fd-column ai-center" >
          <p className="title fw-bold">Our Projects</p>

          <div className="home-projects-container-items">
            <div className="home-projects-container-items-item" >
              <Images src={Project1} />
            </div>
            <div className="home-projects-container-items-item" >
              <Images src={Project2} />
            </div>
            <div className="home-projects-container-items-item" >
              <Images src={Project3} />
            </div>
            <div className="home-projects-container-items-item" >
              <Images src={Project2} />
            </div>
            <div className="home-projects-container-items-item" >
              <Images src={Project3} />
            </div>
            <div className="home-projects-container-items-item" >
              <Images src={Project1} />
            </div>
          </div>

          <a className="all fw-regular flex ai-center " href="#"  >
            All Work
            <svg xmlns="http://www.w3.org/2000/svg" width="19.592" height="19.385" viewBox="0 0 19.592 19.385">
              <g id="arrow-down-left" transform="translate(9.692 25.956) rotate(-135)">
                <path id="Path_6" data-name="Path 6" d="M5,8V18H15" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth-width="1" />
                <line id="Line_2" data-name="Line 2" y1="13" x2="13" transform="translate(5 5)" fill="none" stroke="#000" strokeMiterlimit-miterlimit="10" strokeWidth="1" />
              </g>
            </svg>
          </a>
        </div>
      </section>
      <FooterTop />
      <Footer />
    </>
  )
}
