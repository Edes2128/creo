import React from 'react'
import Images from './Image'
import FooterLogo from '../images/footer_logo.png'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer container flex ai-center jc-spaceb" >
            <div className="info">
                <p className="fw-regular">creodigital ©2021. All Rights Reserved</p>
                <p className="fw-regular">+49 1633618737  info@creodigital.de</p>
            </div>
            <Link href="/">
                <a className="logo">
                    <Images src={FooterLogo} alt="Logo" />
                </a>
            </Link>
            <div className="links flex ">
                <p className="fw-bold" >Linkedin</p>
                <p className="fw-bold" >Linkedin</p>
                <p className="fw-bold" >Linkedin</p>
                <p className="fw-bold">Linkedin</p>
            </div>
        </footer>
    )
}
