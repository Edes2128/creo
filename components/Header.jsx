import React from 'react'
import Images from './Image'
import Logo from '../images/logo.png'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="header container flex jc-spaceb ai-center" >
            <Link href="/" >
                <a >
                    <Images src={Logo} alt="Logo" />
                </a>

            </Link>
            <svg style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" width="34" height="10" viewBox="0 0 34 10">
                <g id="Group_21" data-name="Group 21" transform="translate(-1738.89 -58)">
                    <rect id="Rectangle_3" data-name="Rectangle 3" width="34" height="2" transform="translate(1738.89 58)" fill="#fff" />
                    <rect id="Rectangle_35" data-name="Rectangle 35" width="34" height="2" transform="translate(1738.89 66)" fill="#fff" />
                </g>
            </svg>
        </header>
    )
}
