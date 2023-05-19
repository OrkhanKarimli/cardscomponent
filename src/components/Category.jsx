import React from 'react'
const Category = ({
  icon,
  title
}) => {
  return (
    <div className='category_main'>
    <i>
      {icon}
        </i> 
     <p>
     {title}
     </p>
    </div>
  )
}

export default Category