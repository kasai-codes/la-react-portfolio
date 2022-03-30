import React from "react";
import tutorTea from "../../images/TutorTea"


export default function ProjectCard() {
  return (
    <div>
      <div className="col-lg-4 col-sm-6 h-100">
            <h3 className="img-caption">Park Sky</h3>
            <a href="https://github.com/kasai-codes/tutortea">
                <img src="{tutorTea}"
                    alt={"TutorTea"}/>
            </a>
            <p className="portfolioText">Veiw the repo on Github <a
                href="https://github.com/kasai-codes/tutortea"
                target="blank">GitHub</a>!</p>
        </div>
    </div>
  );
}
