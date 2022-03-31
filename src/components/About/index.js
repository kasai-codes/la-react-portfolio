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
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste sunt laudantium, quas, quia molestiae iusto error pariatur iure omnis cum, eaque corrupti facere! Harum deleniti qui quis tempore dolores! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut enim reprehenderit ratione ipsum maxime accusantium? Delectus minima eaque natus facilis ea consectetur molestias dolor ipsum. Exercitationem, ea. Aut, quos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perferendis eius incidunt quod dolorum, quis at a quisquam saepe accusantium ut error obcaecati, quia mollitia sequi harum labore tempora ipsum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut enim reprehenderit ratione ipsum maxime accusantium? Delectus minima eaque natus facilis ea consectetur molestias dolor ipsum. Exercitationem, ea. Aut, quos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perferendis eius incidunt quod dolorum, quis at a quisquam saepe accusantium ut error obcaecati, quia mollitia sequi harum labore tempora ipsum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ut enim reprehenderit ratione ipsum maxime accusantium? Delectus minima eaque natus facilis ea consectetur molestias dolor ipsum. Exercitationem, ea. Aut, quos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perferendis eius incidunt quod dolorum, quis at a quisquam saepe accusantium ut error obcaecati, quia mollitia sequi harum labore tempora ipsum?
          </p>

    
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}
