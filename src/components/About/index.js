import './style.css'
import React from 'react'
import  selfPortrait  from '../../images/walkingkasai.jpg'



export default function About() {
  return (
    <div id='About'>

      <div>
      <div className="mt-5 pb-5 container" data-aos="fade-down" data-aos-duration="1">
      <div className="post-heading text-center">
        <h3 className="display-4 font-weight-bold pt-5">Kasai Preston</h3>
        <hr className="w-50 mx-auto pb-2" hr/>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
        <div className="col-lg-6 col-md-6 col-12">
          <img
            src={selfPortrait}
            className="img-fluid kasai"
      
            alt="self portrait"
          />
        </div>
        </div>

        <div className="col-lg-6 col-md-6 col-12" data-aos="fade-right" data-aos-duration="1">
          <h2>Want to get to know me?</h2>
          <hr />
          <p>
          I entered the workforce with rough framing at a young age and
            excelled to doing different types of construction based work
            including finish work, minor plumbing, remodels, equipment
            operating, and much more. From there I decided I wanted to do
            something a little different so I took a sales position at AT&T
            where through hard work honing in my customer service and sales
            skills I advanced to a Business Account Representative role. For the
            past 6 years I've been a certified mechanic and even had my own shop
            that was afermarket subaru application specific. Now im an aspiring
            web developer and currently enrolled in University of Washington's
            coding bootcamp.
          </p>

    
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}
