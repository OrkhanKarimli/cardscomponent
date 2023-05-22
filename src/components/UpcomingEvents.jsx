import React from 'react'
import Card from "../components/Eventscard"
import img1 from "../image/renamevent.png"
import img2 from "../image/renamevent1.png"
import img3 from "../image/renamevent2.png"
import img4 from "../image/renamevent3.png"
const UpcomingEvents = () => {
  return (
    <div className="container-fluid upcoming-events-main">
        <h4>
        Upcoming Events
        </h4>
        <div className="row">
        <Card className={"col-md-3"} eventHead={"User Interface Design Basic"} eventLabel={" Essentials Principals"} eventImg={img1}/>
        <Card className={"col-md-3"} eventHead={"User Experience Design"} eventLabel={"BasicEssentials Principals"} eventImg={img2}/>
        <Card className={"col-md-3"} eventHead={"Product Design Basic "} eventLabel={"Essentials Principals"} eventImg={img3}/>
        <Card className={"col-md-3"} eventHead={"3D Design Basic Essentials"} eventLabel={" Principals"} eventImg={img4}/>
        </div>

    </div>
  )
}

export default UpcomingEvents