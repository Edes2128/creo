import React from 'react'
import Images from './Image'
import FooterLogo from '../images/footer_logo.png'

export default function Footer() {
    return (
        <footer className="footer container flex ai-center jc-spaceb" >
            <div className="info">
                <p className="fw-bold">creodigital ©2021. All Rights Reserved</p>
                <p className="fw-bold">+49 1633618737  info@creodigital.de</p>
            </div>
            <div className="logo">
                <Images src={FooterLogo} alt="Logo" />
            </div>
            <div className="links flex ">
                <p className="fw-bold" >Linkedin</p>
                <p className="fw-bold" >Linkedin</p>
                <p className="fw-bold" >Linkedin</p>
                <p className="fw-bold">Linkedin</p>
            </div>
        </footer>
    )
}
