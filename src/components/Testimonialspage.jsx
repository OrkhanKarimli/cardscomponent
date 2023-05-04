import React from "react";
import Testimonialcard from "./Testimonialcard";
import Authorimg from "../image/Avatarimg.png";
import Authorimg1 from "../image/testmon1.png";
import Authorimg2 from "../image/testmon2.png";
import Authorimg3 from "../image/testmon3.png";
import Authorimg4 from "../image/testmon4.png";

const TestimonialsPage = () => {
  return (
    <div className="container-fluid monials_page_main">
      <div className="col-md-12 col-test-mon-left">
        <h2>What Our Students Say <br /> About Us</h2>
      </div>
      <div className="col-md-12 col-test-mon-right">
        <div className="row">
          <Testimonialcard authorName={"Sukran Memis"} cardContent={"I have always relied on EdTech to help me understand my studies. I can always count on him to get me through difficult subjects. with edtech my learning is easier without any obstacles."} authorPosition={"Site Reliability Engineer"} avatarImg={Authorimg} className={"col-md-5 fixingsize"}/> 
        <Testimonialcard authorName={"Atika Yuksel"} cardContent={"I have always relied on EdTech to help me understand my studies. I can always count on him to get me through difficult subjects. with edtech my learning is easier without any obstacles."} authorPosition={"Site Reliability Engineer"} avatarImg={Authorimg1} className={"col-md-5 fixingsize"}/> 
        <Testimonialcard authorName={"Fattum Bozok"} cardContent={"I have always relied on EdTech to help me understand my studies. I can always count on him to get me through difficult subjects. with edtech my learning is easier without any obstacles."} authorPosition={"Site Reliability Engineer"} avatarImg={Authorimg2} className={"col-md-5 fixingsize changeposright"}/>
        <Testimonialcard authorName={"Misel Coron"} cardContent={"I have always relied on EdTech to help me understand my studies. I can always count on him to get me through difficult subjects. with edtech my learning is easier without any obstacles."} authorPosition={"Site Reliability Engineer"} avatarImg={Authorimg3} className={"col-md-5 fixingsize changeposleft"}/>
        <Testimonialcard authorName={"Sukran Memis"} cardContent={"I have always relied on EdTech to help me understand my studies. I can always count on him to get me through difficult subjects. with edtech my learning is easier without any obstacles."} authorPosition={"Site Reliability Engineer"} avatarImg={Authorimg3} className={"col-md-5 fixingsize"}/> 
        <Testimonialcard authorName={"Axel Coley"} cardContent={"I have always relied on EdTech to help me understand my studies. I can always count on him to get me through difficult subjects. with edtech my learning is easier without any obstacles."} authorPosition={"Site Reliability Engineer"} avatarImg={Authorimg4} className={"col-md-5 fixingsize changeposbottomright"}/>
        <Testimonialcard authorName={"Sukran Memis"} cardContent={"I have always relied on EdTech to help me understand my studies. I can always count on him to get me through difficult subjects. with edtech my learning is easier without any obstacles."} authorPosition={"Site Reliability Engineer"} avatarImg={Authorimg} className={"col-md-5 fixingsize changeposbottomleft"}/>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
