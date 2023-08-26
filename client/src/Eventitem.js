import React from 'react'
import { gsap } from 'gsap';

const Eventitem = (props) => {
    let style={width:'20.2rem',border:"2px solid black",height:'65vh'};

    if(props.checking==='black'){
       style={
            width:'18rem',
            color:'white',
            backgroundColor:'rgba(0, 0, 0, 0.9)',
            border:'2px solid white',
            boxShadow:'0px 0px 4px 2px white'
        }
    }
   
    var tl = gsap.timeline()
    tl.from("#jainamop",{
      opacity:0,
      
    })
    tl.to("#jainamop",{
      
      
      rotate:360,
     
      duration:2,
      stagger:0.5,
    
      opacity:1,
    })
  return (
    <div  id='jainamop' style={{margin:"10px 0px"}} >
    <div id='box' className="card" style={style}>
        <img src={props.imgurl} style={{width:'20rem',height:'15rem'}}alt="News" className="card-img-top cardhover" />
            <div className="card-body " style={{width:'17.8rem',height:'17rem'}} >
                <h5 className="card-title">{props.title.slice(0,62)}...</h5> 
                <p className="card-text" > {props.descrip.length>131?(props.descrip).slice(0,131):props.descrip}...</p>
                <a href={props.url}  className="btn btn-primary" style={{position:'absolute',bottom:'2px',left:"50%"}}>Enroll Now<i class="ri-secure-payment-fill"></i></a>
            </div>
    </div>
</div>

  )
}

export default Eventitem
