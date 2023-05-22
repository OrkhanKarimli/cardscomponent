import React from 'react'
import Author from "../components/Author"
import img from "../image/authorimg1.png"
import img2 from "../image/authorimg2.png"
import img3 from "../image/authorimg3.png"
import img4 from "../image/authorimg4.png"
import { ReactComponent as Cube } from "../icons/Cube.svg";
import { ReactComponent as Database } from "../icons/Database.svg";
import { ReactComponent as Pennib } from "../icons/PenNib.svg";
import { ReactComponent as Cpu } from "../icons/Cpu.svg";
const TopAuthors = () => {
  return (
    <div className="container-fluid top-authors-main">
        <h4>
        Top Authors  
        </h4>
        <div className="row">
      <Author authorColor={"author-color-style"}
      authorColor1={"author-color-style1"} imgSrc={img} authorClass={"col-md-3 top-author-style"} authorCourses={"16 Courses"} authorHourses={"hours"} authorIcon={<Cube/>} authorName={"Ahmet Cetin"} authorPayment={"$100"} authorSpeciality={"3D Design"}/>
      <Author authorColor={"author-color-style"}
      authorColor1={"author-color-style1"} imgSrc={img2} authorClass={"col-md-3 top-author-style"} authorCourses={"16 Courses"} authorHourses={"hours"} authorIcon={<Pennib/>} authorName={"Ahmet Cetin"} authorPayment={"$100"} authorSpeciality={"Graphic Design"}/>
      <Author authorColor={"author-color-style"}
      authorColor1={"author-color-style1"} imgSrc={img3} authorClass={"col-md-3 top-author-style"} authorCourses={"16 Courses"} authorHourses={"hours"} authorIcon={<Cpu/>} authorName={"Ahmet Cetin"} authorPayment={"$100"} authorSpeciality={"Front-Edn"}/>
      <Author authorColor={"author-color-style"}
      authorColor1={"author-color-style1"} imgSrc={img4} authorClass={"col-md-3 top-author-style"} authorCourses={"16 Courses"} authorHourses={"hours"} authorIcon={<Database/>} authorName={"Ahmet Cetin"} authorPayment={"$100"} authorSpeciality={"Back-End"}/>
        </div>
    </div>
  )
}

export default TopAuthors