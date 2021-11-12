import Head from 'next/head'
import Footer from '../../components/Footer'
import FooterTop from '../../components/FooterTop'
import Header from '../../components/Header'

export default function About() {
    return (
        <>
            <Head>
                <title>Creo - About</title>
            </Head>
            <Header />

            <FooterTop />
            <Footer />
        </>
    )
}