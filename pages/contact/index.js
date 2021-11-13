import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Form from './components/Form'
import Info from './components/Info'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Creo - Contact</title>
            </Head>
            <Header />
            <section className="contact container" >
                <p className="title fw-bold">Get in touch</p>
                <div className="info flex ai-start" >
                    <div className="left">
                        <Info />
                    </div>
                    <div className="right">
                        <Form />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
