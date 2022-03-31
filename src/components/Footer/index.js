import { BsGithub, BsLinkedin, BsMailbox  } from "react-icons/bs";
import React from 'react'
import './style.css'

export default function Footer() {
  return (
    <div>
        <footer className="bg-light text-center text-lg-start" >
      <ul className="text-center d-flex justify-content-evenly">
        <li >
          <a className="text-black fs-1" href="https://github.com/kasai-codes"
            > <BsLinkedin/></a>
        </li>

        <li>
          <a className="text-black fs-1" href="https://www.linkedin.com/in/kasai-preston-b62167224/">
           <BsGithub/></a>
        </li>

        <li>
          <a className="text-black fs-1" href="mailto:kasaicodes@gmail.com">
          <BsMailbox/></a>
        </li>
      </ul>
    </footer>
    </div>
  )
}
