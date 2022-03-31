import React from 'react'
import projectItems from '../../data/projects.json'


export default function Projects() {
  return (
   
    <div className="container p-3" id='Projects'>
        <div className="row g-3">
            {projectItems.map(({ id, title, url, image, description }) => (
                <div className="col-lg-6" key={id}>
                    <div className="card h-100">
                        <img src={image} className="card-img-top" alt={`${title} project`} />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                        <div className="card-footer text-start">
                            <a href={url} target="_blank" className="btn btn-dark">View the repo on Github</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>

  )
}
