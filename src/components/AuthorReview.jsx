import React from "react";
import { ReactComponent as Stars } from "../icons/IconReview.svg";
import Card from "../components/TestimonialCard";
import img from "../image/authorimg1.png"
import img1 from "../image/authorimg2.png"
import img2 from "../image/authorimg4.png"
import img3 from "../image/authorimg6.png"
const AuthorReview = () => {
  return (
    <div className="container-fluid author-review-main">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-11 author-title-rating">
              <h4>Review's</h4>
              <div className="author-stars-verall">
                <h5>4.8</h5>

                <Stars />
                <span>(122)</span>
              </div>
            </div>
            <Card className={"col-md-5 mb-5 me-5"} avatarImg={img} authorName={"Sukran Memis"} authorPosition={"Site Reliability Engineer"} cardContent={"I have always relied on EdTech to help me understand my studies. I can always count on him to get me through difficult subjects. with edtech my learning is easier without any obstacles."}/>
            <Card className={"col-md-5 mb-5"} avatarImg={img1} authorName={"Sukran Memis"} authorPosition={"Site Reliability Engineer"} cardContent={"I have always relied on EdTech to help me understand my studies. I can always count on him to get me through difficult subjects. with edtech my learning is easier without any obstacles."}/>
            <Card className={"col-md-5 me-5"} avatarImg={img2} authorName={"Sukran Memis"} authorPosition={"Site Reliability Engineer"} cardContent={"I have always relied on EdTech to help me understand my studies. I can always count on him to get me through difficult subjects. with edtech my learning is easier without any obstacles."}/>
            <Card className={"col-md-5"} avatarImg={img3} authorName={"Sukran Memis"} authorPosition={"Site Reliability Engineer"} cardContent={"I have always relied on EdTech to help me understand my studies. I can always count on him to get me through difficult subjects. with edtech my learning is easier without any obstacles."} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorReview;
