import React from 'react'
import Images from '../../../components/Image'
import Project1 from '../../../images/project-1.jpg'
import Project2 from '../../../images/project-2.jpg'
import Project3 from '../../../images/project-3.jpg'
export default function Projects() {
    return (
        <div className="projects" >
            <div className="categories flex ai-center">
                <p className="cat active">All</p>
                <p className="cat">Branding</p>
                <p className="cat">Website</p>
                <p className="cat">E-Commerce</p>
                <p className="cat">Application</p>
            </div>
            <div className="items">
                <div className="item">
                    <Images src={Project1} />
                </div>
                <div className="item">
                    <Images src={Project2} />
                </div>
                <div className="item">
                    <Images src={Project3} />
                </div>
                <div className="item">
                    <Images src={Project2} />
                </div>
                <div className="item">
                    <Images src={Project3} />
                </div>
                <div className="item">
                    <Images src={Project1} />
                </div>
                <div className="item">
                    <Images src={Project3} />
                </div>
                <div className="item">
                    <Images src={Project2} />
                </div>
                <div className="item">
                    <Images src={Project1} />
                </div>
                <div className="item">
                    <Images src={Project3} />
                </div>
                <div className="item">
                    <Images src={Project1} />
                </div>
            </div>
        </div>
    )
}
