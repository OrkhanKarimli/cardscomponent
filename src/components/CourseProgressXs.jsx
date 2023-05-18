import React from 'react'
const CourseProgressXs = ({
  img,
  title,
  author,
  progress,
  percent,
  className
}) => {
  return (

        <div className={`course-card-xs ${className}`}>
          <div className="row">
                      <div className="course-card-xsimg col-md-5">
            <img src={img} alt="" />
          </div>
 
         <ul className='col-md-7'>
          <li className='course-information-title'>
            <p>
            {title}
            </p>
          </li>
          <li className='course-information-author'>
            <p>
            {author}
            </p>
          </li>
          <li className='course-progress-indicator'></li>
          <li className='course-progress-indicator-info'>
            <p>{progress}</p>
            <span>{percent}</span>
          </li>
         </ul>
          </div>

        </div>

  )
}

export default CourseProgressXs