import React from 'react'
import img from "../image/Avatarimg.png"
const AuthorCourse = () => {
  return (
    <div className="container-fluid author-courses-main">
        <div className="row">
            <div className="col-md-8">
                <h4>
                    Author
                </h4>
                <div className="col-md-12 author-courses-div">
                    <div className="row">
                        <div className="col-md-4">
                <ul>
                    <li className='author-course-avatar'>
                        <img src={img} alt="" />
                    </li>
                    <li className='author-course-inf'>
                        <p>
                        Sen Janson
                        </p>
                        <span>
                        Design Lead Shopedia
                        </span>
                    </li>
                </ul>
               </div>
               <div className="col-md-5">
                <button className='author-course-profil'>
               View Profil
                </button>
                <button className='author-course-msg'>
              Message
                </button>
               </div> 
                    </div>
              
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthorCourse