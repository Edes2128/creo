import React from 'react'
import Client1 from '../../../images/1.png'
import Client2 from '../../../images/2.png'
import Client3 from '../../../images/3.png'
import Client4 from '../../../images/4.png'
import Client5 from '../../../images/5.png'
import Client6 from '../../../images/6.png'
import Client7 from '../../../images/7.png'
import Client8 from '../../../images/8.png'
import Images from '../../../components/Image'

export default function Clients() {
    return (
        <section className="about-clients container" >
            <p className="title fw-medium">Our Clients</p>
            <div className="items">
                <div className="item">
                    <Images src={Client1} alt="Client 1" />
                </div>
                <div className="item">
                    <Images src={Client2} alt="Client 2" />
                </div>
                <div className="item">
                    <Images src={Client3} alt="Client 3" />
                </div>
                <div className="item">
                    <Images src={Client4} alt="Client 4" />
                </div>
                <div className="item">
                    <Images src={Client5} alt="Client 5" />
                </div>
                <div className="item">
                    <Images src={Client6} alt="Client 6" />
                </div>
                <div className="item">
                    <Images src={Client7} alt="Client 7" />
                </div>
                <div className="item">
                    <Images src={Client8} alt="Client 8" />
                </div>
            </div>
        </section>
    )
}
