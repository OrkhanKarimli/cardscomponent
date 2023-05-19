import React from 'react'
import CourseList from './CourseList'
import img from "../image/image1118.png"
import img1 from "../image/image118.png"
import img2 from "../image/image119.png"
import img3 from "../image/image120.png"
import img4 from "../image/coursesprogress1.png"
import img5 from "../image/popularcourses.png"
const RecommendationCourses = () => {
  return (
    <div className="container-fluid recom-courses-main">
        <div className="row">
            <h4>
            Recommendation Courses
            </h4>
            <CourseList cardimg={img} cardHead={"UX Design Foundations"} className={"col-md-12"}/>
            <CourseList cardimg={img1} cardHead={"UX Design Terminology"} className={"col-md-12"}/>
            <CourseList cardimg={img2} cardHead={"Common Design Paterns"} className={"col-md-12"}/>
            <CourseList cardimg={img3} cardHead={"UI/UX Design Accessibility"} className={"col-md-12"}/>
            <CourseList cardimg={img4} cardHead={"UX Design Composition"} className={"col-md-12"}/>
            <CourseList cardimg={img5} cardHead={"13 Principles of Dark Mode Design"} className={"col-md-12"}/>
            <CourseList cardimg={img} cardHead={"UI/UX Color Psychology"} className={"col-md-12"}/>
        </div>
    </div>
)}

export default RecommendationCourses