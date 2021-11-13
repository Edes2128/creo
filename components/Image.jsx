import React from 'react'
import Image from 'next/image'

export default function Images({ src, alt , priority }) {
    return (
        <div className="flex" >
            <Image src={src} className="img-res" alt={alt} priority={priority} />
        </div>
    )
}
