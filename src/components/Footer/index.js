
import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className="bg-light text-center text-lg-start" id="Contact">
      <ul className="text-center d-flex justify-content-evenly">
        <li>
          <a href="https://github.com/kasai-codes"
            ><i className="bi bi-github text-black"></i></a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/kasai-preston-b62167224/">
            <i className="bi bi-linkedin text-black" ></i></a>
        </li>

        <li>
          <a href="mailto:kasaicodes@gmail.com">
            <i className="bi bi-inbox text-black"> </i></a>
        </li>
      </ul>
    </footer>
    </div>
  )
}
