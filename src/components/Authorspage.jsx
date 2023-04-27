import React from "react";
import Author from "./Author";
import "bootstrap/dist/css/bootstrap.css";
import { ReactComponent as Pattern2 } from "../icons/Patern2.svg";
import { ReactComponent as Cpu } from "../icons/Cpu.svg";
import { ReactComponent as Gitfork } from "../icons/GitFork.svg";
import { ReactComponent as Pennib } from "../icons/PenNib.svg";
import { ReactComponent as Cube } from "../icons/Cube.svg";
import { ReactComponent as Database } from "../icons/Database.svg";
import { ReactComponent as Gamecontroller } from "../icons/GameController.svg";
import authorimg1 from "../image/authorimg1.png";
import authorimg2 from "../image/authorimg2.png";
import authorimg3 from "../image/authorimg3.png";
import authorimg4 from "../image/authorimg4.png";
import authorimg5 from "../image/authorimg5.png";
import authorimg6 from "../image/authorimg6.png";

const Authorspage = () => {
  return (
    <div className="container-fluid authors_page_main">
      <i>
        <Pattern2 />
      </i>
      <div className="row">
        <div className="col-md-6 authorpage-left">
          <ul>
            <li>
              <h2>Meet Our Authors</h2>
            </li>
            <li>
              <p>
                Our authors are so good that they will teach you all you need to
                know to advance your career in the technology field, even if you
                have zero experience.
              </p>
            </li>

            <button>More Authors</button>
          </ul>
        </div>
        <div className="col-md-6 authorpage-right">
          <div className="row">
            <Author
              authorCourses={"16 Courses"}
              authorName={"Ahmet Cetin"}
              authorPayment={"$100"}
              authorIcon={<Cube/>}
              authorHourses={"hours"}
              authorSpeciality={"3D Design"}
              imgSrc={authorimg1}
              authorClass={"col-md-6 borderupleft addborder"}
            />
            <Author
              authorCourses={"16 Courses"}
              authorName={"Ahmet Cetin"}
              authorPayment={"$100"}
              authorIcon={<Pennib/>}
              authorHourses={"hours"}
              authorSpeciality={"Graphci Desgin"}
              imgSrc={authorimg2}
              authorClass={"col-md-6 borderupright addborder"}
            />
            <Author
              authorCourses={"16 Courses"}
              authorName={"Ahmet Cetin"}
              authorPayment={"$100"}
              authorIcon={<Cpu/>}
              authorHourses={"hours"}
              authorSpeciality={"Front-End"}
              imgSrc={authorimg3}
              authorClass={"col-md-6 borderfix addborder"}
            />
            <Author
              authorCourses={"16 Courses"}
              authorName={"Ahmet Cetin"}
              authorPayment={"$100"}
              authorIcon={<Database/>}
              authorHourses={"hours"}
              authorSpeciality={"Back-End"}
              imgSrc={authorimg4}
              authorClass={"col-md-6 borderfix addborder"}
            />
            <Author
              authorCourses={"16 Courses"}
              authorName={"Ahmet Cetin"}
              authorPayment={"$100"}
              authorIcon={<Gamecontroller/>}
              authorHourses={"hours"}
              authorSpeciality={"Game Design"}
              imgSrc={authorimg5}
              authorClass={"col-md-6 borderdownleft addborder"}
            />
            <Author
              authorCourses={"16 Courses"}
              authorName={"Ahmet Cetin"}
              authorPayment={"$100"}
              authorIcon={<Gitfork/>}
              authorHourses={"hours"}
              authorSpeciality={"IOT"}
              imgSrc={authorimg6}
              authorClass={"col-md-6 borderdownright addborder"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Authorspage;
