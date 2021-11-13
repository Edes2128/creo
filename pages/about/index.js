import Head from 'next/head'
import Footer from '../../components/Footer'
import FooterTop from '../../components/FooterTop'
import Header from '../../components/Header'
import AboutHyrja from './components/AboutHyrja'
import AboutServices from './components/AboutServices'
import Clients from './components/Clients'

export default function About() {
    return (
        <>
            <Head>
                <title>Creo - About</title>
            </Head>
            <Header />
            <AboutHyrja />
            <AboutServices />
            <Clients />
            <FooterTop />
            <Footer />
        </>
    )
}
