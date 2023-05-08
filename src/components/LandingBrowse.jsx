import React from 'react'
import LandingNav from './LandingNav';
import { ReactComponent as Pattern } from "../icons/PaternBrowse.svg";
const LandingBrowse = () => {
  return (
    <div className="container-fluid landing-browse-main">
        <Pattern />
        <div className="row justify-content-center">
        <LandingNav landingClass={"col-md-11 navpos"}/>
        </div>
    </div>
  )
}

export default LandingBrowse