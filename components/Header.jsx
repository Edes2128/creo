import React from 'react'
import Images from './Image'
import Logo from '../images/logo.png'

export default function Header() {
    return (
        <header className="header container flex jc-spaceb ai-center" >
            <Images src={Logo} alt="Logo" />
        </header>
    )
}
