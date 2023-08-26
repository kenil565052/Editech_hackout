// import { useState } from "react"
import React  from 'react'
import Eventitem from "../Eventitem"
import element1 from './Element.json'


const Event = (props) => {
console.log(element1.Events)
    // let j=[1,2]
 
  return (
    <div>
      <div className='my-3 container blur'>
        <h2 className=' text-center my-3' style={{color:props.checked==='black'?'white':'black'}}>NewsMaster </h2>
        <div className="row  ">

            {
            
                element1.Events.map((element) =>  (<div key={element} className="col-md-4"><Eventitem title={element.title} descrip={element.descrip} imgurl={element.urlimg} url={""} checking={props.checked}/></div> ))
            }
      
            
            
            
      

        </div>
      </div>
    </div>
  )
}

export default Event



