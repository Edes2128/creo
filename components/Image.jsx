import React from 'react'
import Image from 'next/image'

export default function Images({ src, alt }) {
    return (
        <div className="flex" >
            <Image src={src} className="img-res" alt={alt} />
        </div>
    )
}
