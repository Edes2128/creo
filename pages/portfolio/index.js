import Header from '../../components/Header'
import FooterTop from '../../components/FooterTop'
import Footer from '../../components/Footer'
import Projects from './components/Projects'
import Head from 'next/head'

export default function Portfolio() {
    return (
        <>
            <Head>
                <title>Creo - Portfolio</title>
            </Head>
            <Header />
            <section className="portfolio container">
                <p className="title fw-bold">
                    We build amazing digital products for <br />
                    amazing people
                </p>
                <Projects />
            </section>
            <FooterTop />
            <Footer />
        </>
    )
}
