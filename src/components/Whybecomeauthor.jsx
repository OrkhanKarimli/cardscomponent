import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import {ReactComponent as Student} from "../icons/Student.svg";
import {ReactComponent as Money} from "../icons/Money.svg"
import {ReactComponent as Chalk} from "../icons/ChalkboardTeacher.svg"

const WhyBecomeAuthor = () => {
  return (
<div className="container-fluid becomeauthor_main">
<div className="row">
    <div className="col-md-12">
        <h2>
        So Many Reasons to Start
        </h2>
        <p>
        You've come to the correct place if you're a qualified professional <br /> wanting to produce and distribute online courses.
        </p>
        <ul>
            <li>
                <Chalk/>
                <h5>Teach Your Way</h5>
                <p>
                Publish the courses you choose, in the format you desire, and have complete control over your material for our students.
                </p>
            </li>
            <li>
                <Student/>
                <h5>Help Learners Growth</h5>
            <p>
            Teach what you know and assist students in exploring their interests and advancing their professions.
            </p>
            </li>
            <li>
                <Money/> 
                <h5>Earn Money</h5>
            <p>
            Increase your professional network, acquire experience by sharing knowledge, and benefit from each course purchase.
            </p>
            </li>
        </ul>
    </div>
</div>
</div>
  )
}

export default WhyBecomeAuthor