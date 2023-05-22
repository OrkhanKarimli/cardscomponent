import React from 'react'
import LearnerDash from "../components/LearnerDash"
import {ReactComponent as Plus} from "../icons/Plus.svg"
const PlayCoursesHead = () => {
  return (
    <>
    <LearnerDash learnerClass={"col-md-12 fixposition"}/>
    <div className="container-fluid play-head-main">

        <div className="col-md-8 play-head-left">
          <h3>
          UX Design Principles
          </h3>
          <p>
          UX Design Foundations: Lesson 4/6
          </p>
        </div>
        <div className="col-md-4 play-head-right">
        <p>
         <i> <Plus/></i>  Schedule Learning Time
        </p>
        </div>
       </div>
    </>
  )
}

export default PlayCoursesHead