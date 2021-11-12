import HyrjaImage from '../../../images/about_hyrja.png'
import Images from '../../../components/Image'

export default function AboutHyrja() {
    return (
        <section className="about-hyrja container flex jc-center ai-center" >
            <Images src={HyrjaImage} />
            <div className="texts">
                <p className="fw-regular subtitle" >Who we are</p>
                <p className="fw-bold title" >
                    We help brands grow <br />
                    in a digital world.
                </p>
                <p className="fw-regular text" >
                    With a smart combination of creativity, strategy and technology we help <br />
                    our ambitious clients to grow every day again.
                </p>
            </div>
        </section>
    )
}
