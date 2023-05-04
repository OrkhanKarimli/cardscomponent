import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { useState } from 'react';
const data=[
{
    title:'Plan Your Curriculum',
    content:'You begin with your enthusiasm and knowledge. Then, using our Marketplace Insights tool, select a promising topic. It is entirely up to you how you teach and what you bring to the table. We provide a wealth of materials for developing your first course. In addition, our teacher dashboard and curriculum pages help you stay organized.'

},
{
    title:'Record Your Video',
    content:'You begin with your enthusiasm and knowledge. Then, using our Marketplace Insights tool, select a promising topic. It is entirely up to you how you teach and what you bring to the table. We provide a wealth of materials for developing your first course. In addition, our teacher dashboard and curriculum pages help you stay organized.'
},
{
    title:'Launch Your Course',
    content:'You begin with your enthusiasm and knowledge. Then, using our Marketplace Insights tool, select a promising topic. It is entirely up to you how you teach and what you bring to the table. We provide a wealth of materials for developing your first course. In addition, our teacher dashboard and curriculum pages help you stay organized.'
}

]
const Acardion = () => {
    const [isActive,setActive]=useState(null)

    const toggle=(i)=>{
        if(isActive ==i){
            return setActive(null)
        }
        setActive(i)
    }
  return (
   <div className="container">
    <div className="row">
        <div className="col-md-6 acardion">
         {data.map((item,i)=>(
         <div className="item">
            <div className="title" onClick={()=>toggle(i)}>
               <h5>
                {item.title}
               </h5>
               <span>
               {isActive==i ? '-':'+'}
               </span>
            </div>
            <div className={isActive==i ? 'content show':'content'}>
                    <p>
                    {item.content}
                    </p>
                    </div>
         </div>
         ))}
        </div>
    </div>
   </div>
  )
}

export default Acardion