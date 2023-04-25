import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
const Category = () => {
  return (
    <div className='category_main'>
    <i><FontAwesomeIcon className="icon" icon={faTable} />
        </i> 
     <p>
     UI/UX Design
     </p>
    </div>
  )
}

export default Category